import create from 'zustand';
import { User } from '../utils/Types/registerTypes';

// define the store
interface State {
  currentUser:User | null,
}

interface Action {
  setCurrentUser:(currentUser: State['currentUser']) => void
}

export const useStore = create<State & Action>((set) => ({
  currentUser: {},
  setCurrentUser: (user) => set({ currentUser: user }),
}));
