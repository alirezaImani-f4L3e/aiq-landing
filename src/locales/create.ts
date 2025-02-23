import { isDev, isOnServerSide } from "@/utils/env";
import i18n from "i18next";
import LangDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";
import { normalizeLocale } from "./resources";
import { isRtlLang } from "rtl-detect";
import { DEFAULT_LANG } from "@/const/locale";

export const createI18nNext = (lang?: string) => {
    const instance = i18n.use(initReactI18next)
        .use(LangDetector)
        .use(
            resourcesToBackend(async (lng: string, ns: string) => {
                return import(`@/../locales/${normalizeLocale(lng)}/${ns}.json`)
            })
        )

    instance.on("languageChanged", (lng) => {
        if (!isOnServerSide) {
            const direction = isRtlLang(lng) ? 'rtl' : 'ltr';
            document.documentElement.dir = direction;
        }
    })

    return {
        init: () => instance.init({
            defaultNS: [],
            fallbackLng: DEFAULT_LANG,
            interpolation: {
                escapeValue: false
            },
            lng: lang
        }),
        instance
    }
}