import { User } from 'firebase/auth';
import create from 'zustand';
// import { User } from '../utils/Types/registerTypes';

// define the store
interface State {
  currentUser:User,
}

interface Action {
  setCurrentUser:(currentUser: State['currentUser']) => void
}

export const useStore = create<State & Action>((set) => ({
  currentUser: {
    emailVerified: true,
    isAnonymous: false,
  } as User,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
