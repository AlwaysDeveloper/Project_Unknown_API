import Dotenv from 'dotenv';
import Path from 'path';

import Mailer from "./mailer";

Dotenv.config({
    path: Path.join(__dirname, './../../.env')
});

const mailer = new Mailer();

export {
    mailer
}