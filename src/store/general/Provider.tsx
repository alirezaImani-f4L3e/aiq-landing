"use client"

import { createContext, ReactNode, useContext, useRef } from "react"
import { createGeneralStore, GeneralStore } from "./store";
import { useStore } from "zustand";
import { ThemeMode } from "antd-style";
import { LocaleMode } from "@/types/locale";


export type GeneralStoreApi = ReturnType<typeof createGeneralStore>;

export const GeneralStoreContext = createContext<GeneralStoreApi | undefined>(undefined)

interface GeneralStoreProviderProps {
    children: ReactNode;
    isMobile: boolean;
    theme: ThemeMode;
    language: LocaleMode;
}

export const GeneralStoreProvider = ({ children, isMobile, theme, language }: GeneralStoreProviderProps) => {
    const storeRef = useRef<GeneralStoreApi>(null);

    if (!storeRef.current) {
        storeRef.current = createGeneralStore({
            isMobile,
            theme,
            language
        });
    }

    return <GeneralStoreContext.Provider value={storeRef.current}>
        {children}
    </GeneralStoreContext.Provider>
}

export const useGeneralStore = <T,>(
    selector: (s: GeneralStore) => T
): T => {
    const generalStoreContext = useContext(GeneralStoreContext);

    if (!generalStoreContext) {
        throw new Error("General Store not initialized");
    }

    return useStore(generalStoreContext, selector);
} 