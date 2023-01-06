import { User } from 'firebase/auth';
import create from 'zustand';
// import { User } from '../utils/Types/registerTypes';

// define the store
interface State {
  currentUser:User,
  selectUserChat:object,
  chatId:string,
}

interface Action {
  setCurrentUser:(currentUser: State['currentUser']) => void
  selectUserChat:(currentUser: State['selectUserChat']) => void
  setChatId:(currentUser: State['chatId']) => void
}

export const useStore = create<State & Action>((set) => ({
  currentUser: {} as User,
  setCurrentUser: (user) => set({ currentUser: user }),
  selectUserChat: {},
  setUserChat: (user) => set({ selectUserChat: user }),
  chatId: '',
  setChatId: (id) => set({ chatId: id }),
}));
