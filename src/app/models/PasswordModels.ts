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
        this.target="";
        this.targetURL="";
        this.username="";
        this.email="";
        this.note="";
        this.currentPassword ="";
        this.startsAt= new Date();
        this.history=[];
    }   
}


export class PasswordField{
    password:string;
    startsAt: Date;
    endsAt: Date;
    constructor(){
        this.password="sushi";
        this.startsAt = new Date();
        this.endsAt= new Date();
    }
}


export interface PasswordGroup{
    groupName: string,  //must be unique.
    content: PasswordItem[]
}

