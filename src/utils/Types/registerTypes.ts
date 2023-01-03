export interface UserInputsDataType {
    username?: string;
    password: string;
    email: string;
}

export interface User {
    uid?: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
    lastMessage?:string
}
