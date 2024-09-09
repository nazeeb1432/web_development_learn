import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var flag=true;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req,res,next){
    if(req.body["password"]=='ILoveProgramming') {
        flag=true;
        next();
    }
    else {
        flag=false;
        next();
    };
    
}

app.use(checkPassword);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
  console.log(req.body);
  if(flag) res.sendFile(__dirname + '/public/secret.html');
  else res.send('Wrong password!Cannot tell secrets!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
