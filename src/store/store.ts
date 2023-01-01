import create from 'zustand';

// define the store
export const useStore = create((set) => ({
  votes: 0,
  addVotes: () => set((state) => ({ votes: state.votes + 1 })),
  subtractVotes: () => set((state) => ({ votes: state.votes - 1 })),
}));
