import { Timestamp } from 'firebase/firestore';

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

export interface UserChatTypes {
    uid:string;
    displayName:string;
    lastMessage: string;
    photoURL:string;
}

export interface MessageType {
    message:{
      date:Timestamp
      id: number
      senderId: string
      text: string
      img?:string
    }
  }
