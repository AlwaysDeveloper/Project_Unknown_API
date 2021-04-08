interface IEmailData{
    name: string;
    action_url: string;
    [key: string]: any;
}

export class ForgotPasswordContent implements IEmailData{
    name!: string;
    action_url!: string;
    [key: string]: any;

    constructor(content: any){
        this.name = content.name;
        this.action_url = content.action_url
    }
}