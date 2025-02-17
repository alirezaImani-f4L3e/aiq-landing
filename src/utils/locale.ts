import { normalizeLocale } from "@/locales/resources";

export const parseBrowserLanguage = () => {
    return 'fa-IR';
}

export const getAntdLocale = async (lang?: string) => {
    let normalLang = normalizeLocale(lang);

    if (normalLang == "ar") return "ar_EG";

    const { default: locale } = await import(`antd/locale/${normalLang.replace('-', '_')}.js`);

    return locale;
}