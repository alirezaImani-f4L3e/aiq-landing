import { BRANDING_NAME, OFFICIAL_URL } from "@/const/branding";
import { DEFAULT_LANG } from "@/const/locale";
import { translation } from "@/server/translation";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
    const { t } = await translation('metadata');

    return {
        alternates: {
            canonical: OFFICIAL_URL
        },
        appleWebApp: {
            statusBarStyle: 'black-translucent',
            title: BRANDING_NAME
        },
        description: t("general.desc", { appName: BRANDING_NAME }),
        icons: {
            apple: '/apple-touch-icon.png?v=1',
            icon: '/favicon.ico?v=1',
            shortcut: '/favicon-32x32.ico?v=1',
        },
        metadataBase: new URL(OFFICIAL_URL),
        openGraph: {
            description: t("general.desc", { appName: BRANDING_NAME }),
            images: [],
            locale: DEFAULT_LANG,
            title: BRANDING_NAME,
            type: 'website',
            url: OFFICIAL_URL
        },
        title: {
            default: t("general.title", { appName: BRANDING_NAME }),
            template: `%s | ${BRANDING_NAME}`
        }
    }
}