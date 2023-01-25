import { create } from 'zustand';

interface State {
    isSelectUser:boolean,
    isUserSettings: boolean
}

interface Action {
  setIsSelectUser:() => void
  resetIsSelectUser:() => void
  setUserSettings:() => void
}

export const useMobileScreen = create<State & Action>((set, get) => ({
  isSelectUser: false,
  setIsSelectUser: () => set({ isSelectUser: true }),
  resetIsSelectUser: () => set({ isSelectUser: false }),
  isUserSettings: false,
  setUserSettings: () => set({ isUserSettings: !get().isUserSettings }),
}));

