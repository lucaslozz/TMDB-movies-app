import {create} from 'zustand';

interface Loading {
  loading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

export const useToastStore = create<Loading>(set => ({
  loading: false,
  showLoading: () => set({loading: true}),
  hideLoading: () => set({loading: false}),
}));

export function useLoading(): Loading['loading'] {
  return useToastStore(state => state.loading);
}

export function useLoadingAction(): Omit<Loading, 'loading'> {
  return useToastStore(state => ({
    showLoading: state.showLoading,
    hideLoading: state.hideLoading,
  }));
}
