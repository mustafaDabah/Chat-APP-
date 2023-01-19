import { User } from 'firebase/auth';
import create from 'zustand';

interface State {
  currentUser:User,
}

interface Action {
  setCurrentUser:(currentUser: State['currentUser']) => void
  resetCurrentUser:() => void
}

export const useCurrentUser = create<State & Action>((set) => ({
  currentUser: {} as User,
  setCurrentUser: (user) => set({ currentUser: user }),
  resetCurrentUser: () => set({ currentUser: {} as User }),
}));
