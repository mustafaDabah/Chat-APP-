import { create } from 'zustand';

interface State {
    isSelectUser:boolean,

}

interface Action {
  setIsSelectUser:() => void
  resetIsSelectUser:() => void
}

export const useMobileScreen = create<State & Action>((set) => ({
  isSelectUser: false,
  setIsSelectUser: () => set({ isSelectUser: true }),
  resetIsSelectUser: () => set({ isSelectUser: false }),
}));

