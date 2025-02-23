
import { ThemeMode } from "antd-style";
import { LocaleMode } from "@/types/locale";
import { NeutralColors, PrimaryColors } from "@lobehub/ui";
import { createStore } from "zustand";

export type GeneralState = {
    theme: ThemeMode,
    language: LocaleMode,
    isMobile: boolean,
    neutralColor?: NeutralColors,
    primaryColor?: PrimaryColors
}

export const initialGeneralState: GeneralState = {
    theme: 'light',
    language: 'fa-IR',
    isMobile: false,
    neutralColor: undefined,
    primaryColor: undefined
}

export interface GeneralActions {
    setIsMobile: (isMobile: boolean) => void
}

export type GeneralStore = GeneralState & GeneralActions


export const createGeneralStore = (inState: Partial<GeneralState> = initialGeneralState) => {
    const initState = {
        ...initialGeneralState,
        ...inState
    }

    return createStore<GeneralStore>()((set) => ({
        ...initState,
        setIsMobile: (isMobile: boolean) => {
            set({
                isMobile
            })
        }
    }))
}