import {create} from 'zustand';

interface Loading {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useToastStore = create<Loading>(set => ({
  loading: false,
  setLoading: loading => set({loading}),
}));

export function useLoading(): Loading['loading'] {
  return useToastStore(state => state.loading);
}

export function useLoadingAction() {
  return useToastStore(state => state.setLoading);
}
