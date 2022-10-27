import create from 'zustand';
import { MessageStatus } from '../config/enum';

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
    isExpandedMobile: boolean;
    toggleExpandedMobile: () => void;
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
    clearMessageState: () => set(() => ({showMessage: false, message: {text: '', status: MessageStatus.Success}})),
    isExpandedMobile: false,
    toggleExpandedMobile: () => set((state) => ({isExpandedMobile: !state.isExpandedMobile}))
}))


export default useUIStore;