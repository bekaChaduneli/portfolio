import { PopUpActions, PopUpState } from "@/types/storeTypes";
import { create } from "zustand";

const usePopUpStore = create<PopUpState & PopUpActions>((set) => ({
    type: null,
    isOpen: false,
    onOpen: (type) => set({ type, isOpen: true }),
    onClose: () => set({ type: null, isOpen: false }),
}));

export default usePopUpStore;
