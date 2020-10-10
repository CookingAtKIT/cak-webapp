export class User {
    authMailUser: string;   // uxxxx (inkl. u)
    level: number;   // 0 = guest

    constructor(authMailUser: string, level: number) {
        this.authMailUser = authMailUser;
        this.level = level;
    }

    getAuthMailUser(): string {
        return this.authMailUser;
    }

    getLevel(): number {
        return this.level;
    }
}
