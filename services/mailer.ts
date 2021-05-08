import { createTransport, SendMailOptions, Transport, TransportOptions } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import Path from 'path';
import File from 'fs';
import HtmlToText from 'html-to-text';
import { User } from "../models";

const mailTemplate = Path.join(__dirname, './../../assets/email');

class Mailer{
    protected host: string = process.env.MAIL_TEST_HOST ? process.env.MAIL_TEST_HOST : '';
    protected port: number = process.env.MAIL_TEST_PORT ? parseInt(process.env.MAIL_TEST_PORT) : 0;
    protected user: string = process.env.MAIL_TEST_USER ? process.env.MAIL_TEST_USER : '';
    protected password: string = process.env.MAIL_TEST_PASSWORD ? process.env.MAIL_TEST_PASSWORD: '';
    protected transport!: Mail;  
    
    constructor(){
        this.transport = createTransport(this.getCredentialCheck());
    }

    protected getCredentialCheck(){
        let isOk = { cause: '' , valid: true};
        if(this.host === ''){
            isOk = { cause: 'Mailer host is not valid!', valid: false };
        }else if(this.port === 0){
            isOk = { cause: 'Mailer port is not valid!', valid: false };
        }else if(this.user === ''){
            isOk = { cause: 'Mailer user is not found!', valid: false };
        }else if(this.password === ''){
            isOk = { cause: 'Mailer password is not valid!', valid: false }
        }
        
        if(!isOk.valid)throw new Error(isOk.cause);

        return {
            host: this.host,
            port: this.port,
            secure: false,
            auth: {
                user: this.user,
                pass: this.password
            }
        };
    }

    public send(mail: MailOptions){
        const { to, template, action_url, subject } = mail;
        File.readFile(Path.join(mailTemplate, `${template}.html`), "utf-8", (error, data) => {
            if(error)throw new Error(error.message);
            to.forEach((reciver) => {
                User.getuser({id: reciver})
                .then((user: any) => {
                    let toMail;
                    switch(template){
                        case 'reset_password':
                            user.action_url = action_url
                            toMail = this.forgetPassword(user, data);
                            break;
                        default:
                            console.log();
                            break;
                    }
                    this.transport.sendMail({
                        to: user.email,
                        subject: subject,
                        text: toMail?.text,
                        html: toMail?.html
                    }).then((send) => {}).catch((error) => { throw new Error(error); });             
                })
                .catch((error) => {throw new Error(error);});
            });
        });
    }

    protected forgetPassword(user: any, html: string){
        const toReplace = { fullname: user.fullname, action_url: user.action_url };
        for(let i in toReplace){
            html = html.replace(`{{${i}}}`, user[i]);
        }
        return { html, text: HtmlToText.htmlToText(html) }
    }
}

export default Mailer;