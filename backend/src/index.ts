import express, { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import { LoginRequestBody } from './types';
import cors from 'cors';

const PORT = 8000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const EMAIL = 'codibly@codibly.com';
const PASSWORD = 'Codibly1';

app.post('/login', (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
    console.log(req.body);
    if (!req.body) {
        res.sendStatus(400);
        return;
    }

    if (!req.body.email || !req.body.password) {
        res.sendStatus(400);
        return;
    }

    if (req.body.email === EMAIL && req.body.password === PASSWORD) {
        res.json({userId: 1, email: req.body.email}).send(200);
        return;
    }

    res.sendStatus(401);
});
app.listen(PORT, () => console.log(`⚡️ Running at http://localhost:${PORT}`));
