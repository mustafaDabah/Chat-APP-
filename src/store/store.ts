import create from 'zustand';

// define the store
interface State {
  currentUser:object | null,
}

interface Action {
  setCurrentUser:(currentUser: State['currentUser']) => void
}

export const useStore = create<State & Action>((set) => ({
  currentUser: {},
  setCurrentUser: (user) => set({ currentUser: user }),
}));
