import { LocaleMode } from "@/types/locale"
import { NeutralColors, PrimaryColors } from "@lobehub/ui"
import { ThemeMode } from "antd-style"

export type GeneralState = {
    theme: ThemeMode,
    language: LocaleMode,
    isMobile: boolean,
    neutralColor?: NeutralColors,
    primaryColor?: PrimaryColors
}

export const initialGeneralState: GeneralState = {
    theme: 'dark',
    language: 'fa-IR',
    isMobile: false,
    neutralColor: undefined,
    primaryColor: undefined
}