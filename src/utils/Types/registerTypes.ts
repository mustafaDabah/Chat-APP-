export interface UserInputsDataType {
    username?: string;
    password: string;
    email: string;
}

export interface UserProps {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
    lastMessage?:string
}
