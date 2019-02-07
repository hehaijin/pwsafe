export class PasswordItem{
    target: string; // like 'facebook'
    targetURL: string; // like 'www.facebook.com'
    username:string; // this does not change
    email: string;
    note: string;
    currentPassword: string;
    startsAt: Date;
    history:PasswordField[];
    constructor(){

    }   
}


export interface PasswordField{
    password:string,
    startsAt: Date,
    endsAt: Date
}


export interface PasswordGroup{
    groupName: string,  //must be unique.
    content: PasswordItem[]
}

