"use client"

import { ConfigProvider } from "antd";
import { createI18nNext } from "@/locales/create";
import { isOnServerSide } from "@/utils/env";
import { memo, PropsWithChildren, useEffect, useState } from "react"
import dayjs from "dayjs";
import { isRtlLang } from "rtl-detect";
import { getAntdLocale } from "@/utils/locale";

interface LocaleLayoutProps extends PropsWithChildren {
    antdLocale?: any;
    defaultLang?: string;
}

const updateDayjs = async (lang: string) => {
    let dayJSLocale;

    try {
        const locale = lang!.toLowerCase() === "en-us" ? "en" : lang!.toLowerCase();

        dayJSLocale = await import(`dayjs/locale/${locale}.js`);
    } catch {
        dayJSLocale = await import(`dayjs/locale/en.js`);
    }

    dayjs.locale(dayJSLocale.default);
}

const Locale = memo<LocaleLayoutProps>(({ children, defaultLang, antdLocale }) => {
    const [i18n] = useState(createI18nNext(defaultLang));
    const [lang, setLang] = useState(defaultLang);
    const [locale, setLocale] = useState(antdLocale);

    if (isOnServerSide) {
        i18n.init();
    } else {
        if (!i18n.instance.isInitialized) {
            i18n.init().then(async () => {
                if (!lang) return;

                await updateDayjs(lang);
            })
        }
    }

    useEffect(() => {
        const handleLang = async (lng: string) => {
            setLang(lng);

            if (lang === lng) return;

            const newLocale = await getAntdLocale(lng);
            setLocale(newLocale);

            await updateDayjs(lng);
        }

        i18n.instance.on("languageChanged", handleLang);

        return () => {
            i18n.instance.off('languageChanged', handleLang);
        }
    }, [i18n, lang])

    const direction = isRtlLang(lang!) ? 'rtl' : 'ltr';

    return (
        <ConfigProvider direction={direction} locale={locale}>
            {children}
        </ConfigProvider>
    )
})

Locale.displayName = "Locale";

export default Locale;