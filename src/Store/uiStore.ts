import create from 'zustand';
import { MessageStatus } from '../config/config';

interface UIState {
    isMinimizeSidebar: boolean;
    toggleMinimizeSidebar: () => void;
    showMessage: boolean;
    updateShowMessage: (flag: boolean) => void;
    message: {
        text: string,
        status: MessageStatus
    },
    updateMessage: (text: string, status: MessageStatus) => void;
    clearMessageState: () => void;
}

const useUIStore = create<UIState>((set) => ({
    isMinimizeSidebar: false,
    toggleMinimizeSidebar: () => set((state) => ({isMinimizeSidebar: !state.isMinimizeSidebar})),
    showMessage: false,
    updateShowMessage: (flag) => set(() => ({showMessage: flag})),
    message: {
        text: '',
        status: MessageStatus.Success
    },
    updateMessage: (text, status) => set(() => ({message: {text, status}})),
    clearMessageState: () => set(() => ({showMessage: false, message: {text: '', status: MessageStatus.Success}}))
}))


export default useUIStore;