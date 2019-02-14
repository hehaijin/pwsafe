import * as uuid from 'uuid';

export class PasswordItem {
    id: string;
    public group:string;

    constructor(
        public target: string='facebook', // like 'facebook'
        public targetURL: string="", // like 'www.facebook.com'
        public username: string='test', // this does not change
        public currentPassword: string='test',
        public email: string="",
        public note: string="",
        public startsAt: Date= new Date(),
        public history: PasswordField[]= [],
    ) {
    
        this.id=uuid.v4();
    }
}


export class PasswordField {
    constructor(
        private password: string="sushi",
        private startsAt: Date= new Date(),
        private endsAt: Date= new Date(), ) {
    }
}


export interface PasswordGroup {
    groupName: string,  //must be unique.
    content: PasswordItem[]
}

