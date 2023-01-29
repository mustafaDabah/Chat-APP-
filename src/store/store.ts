import create from 'zustand';
import { UserChatTypes } from '../utils/Types/types';

interface State {
  selectUserChat: UserChatTypes,
  chatId:string,
}

interface Action {
  setUserChat:(selectUserChat: State['selectUserChat']) => void
  setChatId:(chatId: State['chatId']) => void
  resetUserChat:() => void
}

export const useStore = create<State & Action>((set) => ({
  selectUserChat: {} as State['selectUserChat'],
  setUserChat: (user) => set({ selectUserChat: user }),
  resetUserChat: () => set({ selectUserChat: {} as State['selectUserChat'] }),
  chatId: '',
  setChatId: (id) => set({ chatId: id }),

}));
