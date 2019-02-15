import * as uuid from 'uuid';

export class PasswordItem {
    id: string;
    public group: string;

    constructor(
        public target: string = 'facebook', // like 'facebook'
        public targetURL: string = "", // like 'www.facebook.com'
        public username: string = 'test', // this does not change
        public currentPassword: string = 'test',
        public email: string = "",
        public note: string = "",
        public startsAt: Date = new Date(),
        public history: PasswordField[] = [],
    ) {
        this.id = uuid.v4();
        this.group = 'default';
    }

    static parseObject(item: any): PasswordItem {
        let result: PasswordItem = item;
        if (!result.id) result.id = uuid.v4();
        if (!result.history) result.history = [];
        if (!result.group) result.group = 'default';
        if (!result.target && !result.targetURL) throw new Error('password must have a target or target URL');
        if (!result.username && !result.email) throw new Error('password must have a username or email');
        if (!result.currentPassword) throw new Error('password must exist');
        return result;
    }

}


export class PasswordField {
    constructor(
        private password: string = "sushi",
        private startsAt: Date = new Date(),
        private endsAt: Date = new Date(), ) {
    }
}


export interface PasswordGroup {
    groupName: string,  //must be unique.
    content: PasswordItem[]
}

