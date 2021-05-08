interface MailOptions{
    to: string[];
    cc: string[] | undefined;
    bcc: string[] | undefined;
    subject: string,
    template: string;
    action_url: string;
}

export default MailOptions;