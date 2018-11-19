export class User {
    constructor(public email: string,
                public name: string,
                private password: string) {}

    matches(another: User): boolean{
      return another !== undefined &&
       another.email === this.email &&
       another.password === this.password
    }
}

export const users: {[key:string]: User} = {
  "james@gmail.com": new User('james@gmail.com', 'James', 'James19'),
  "jaqueline@gmail.com": new User('jaqueline@gmail.com', 'Jaqueline', 'jaque20')
}
