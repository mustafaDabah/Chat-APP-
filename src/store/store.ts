import { User } from 'firebase/auth';
import create from 'zustand';
import { UserChatTypes } from '../utils/Types/registerTypes';
// import { User } from '../utils/Types/registerTypes';

interface State {
  currentUser:User,
  selectUserChat: UserChatTypes,
  chatId:string,
}

interface Action {
  setCurrentUser:(currentUser: State['currentUser']) => void
  resetCurrentUser:() => void
  setUserChat:(selectUserChat: State['selectUserChat']) => void
  setChatId:(chatId: State['chatId']) => void
}

export const useStore = create<State & Action>((set) => ({
  currentUser: {} as User,
  setCurrentUser: (user) => set({ currentUser: user }),
  resetCurrentUser: () => set({ currentUser: {} as User }),
  selectUserChat: {} as State['selectUserChat'],
  setUserChat: (user) => set({ selectUserChat: user }),
  chatId: '',
  setChatId: (id) => set({ chatId: id }),
}));
