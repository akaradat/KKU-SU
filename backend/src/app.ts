import express from 'express';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors'

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));


app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));


// app.get('/', (req: express.Request, res: express.Response) => {
//     res.status(200).send(`Server running at http://localhost:${port}`)
// });

export default app