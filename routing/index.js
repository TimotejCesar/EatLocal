var fs = require('fs')

exports.handleRoute = (url, res) => {
    if (url === '/') {
        fs.readFile(`views/index.html`, (err, pgResp) => {
            if (err) {
                res.writeHead(404);
                res.write('Contents not found.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
            res.end();
        });
    }
    else {
        fs.readFile(`views${url}.html`, (err, pgResp) => {
            if (err) {
                res.writeHead(404);
                res.write('Contents not found.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
            res.end();
        });
    }
}