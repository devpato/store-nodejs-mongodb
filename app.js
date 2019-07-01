const HTTP = require('http');
const FS = require('fs');

const SERVER = HTTP.createServer((req, res) => {
  const URL = req.url;
  const METHOD = req.method;
  res.setHeader('Content-Type', 'text/html');
  if (URL === '/') {
    res.write(
      `<html>
            <head><title>My first Page</title>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message"/>
                    <button>SEND</button>
                </form>
            </body>
        </html>`
    );
    return res.end();
  }

  if (URL === '/message' && METHOD === 'POST') {
    const BODY = [];
    req.on('data', chunk => {
      BODY.push(chunk);
    });
    return req.on('end', () => {
      const PARSED_BODY = Buffer.concat(BODY).toString();
      const MESSAGE = PARSED_BODY.split('=')[1];
      FS.writeFile('message.txt', MESSAGE, error => {
        if (!error) {
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        }
      });
    });
  }
  res.write(
    `<html>
          <head><title>My first Page</title>
          <body>
            YAY!
          </body>
      </html>`
  );
});

SERVER.listen(3000);
