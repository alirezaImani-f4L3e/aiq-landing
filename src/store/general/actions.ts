import type { StateCreator } from "zustand/vanilla"
import { GeneralStore } from "./store"

export interface GeneralActions {
    setIsMobile: (isMobile: boolean) => void
}

export const createGeneralSlice: StateCreator<GeneralStore, [['zustand/devtools', never]], [], GeneralActions> = (set, get) => ({
    setIsMobile: (isMobile: boolean) => {
        set({
            isMobile
        })
    }
})