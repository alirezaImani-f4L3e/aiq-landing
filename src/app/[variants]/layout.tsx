import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import { DEFAULT_LANG } from "@/const/locale";
import GlobalProvider from "@/layout/GlobalProvider";
import { DynamicLayoutProps } from "@/types/next";
import { RouteVariants } from "@/utils/server/routeVariants";
import { ThemeAppearance } from "antd-style";
import { ResolvingViewport } from "next";
import { ReactNode } from "react";
import { isRtlLang } from "rtl-detect";


interface RootLayoutProps extends DynamicLayoutProps {
    children: ReactNode;
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
    const { variants } = await params;

    const { locale, theme, neutralColor, primaryColor } = RouteVariants.deserializeVariants(variants);

    const direction = isRtlLang(locale) ? 'rtl' : 'ltr';

    return (
        <html dir={direction} lang={locale} suppressHydrationWarning>
            <body>
                <GlobalProvider locale={locale} appearance={theme} neutralColor={neutralColor} primaryColor={primaryColor}>
                    <Header />
                    {children}
                </GlobalProvider>
                <Analytics />
            </body>
        </html>
    )
}

export default RootLayout;

export { generateMetadata } from "./metadata";

export const generateViewport = async (props: DynamicLayoutProps): ResolvingViewport => {
    const isMobile = await RouteVariants.getIsMobile(props);

    const dynamicScale = isMobile ? { maximumScale: 1, userScalable: false } : {};

    return {
        ...dynamicScale,
        initialScale: 1,
        minimumScale: 1,
        themeColor: [
            { color: '#f8f8f8', media: '(prefers-color-scheme: light)' },
            { color: '#000', media: '(prefers-color-scheme: dark)' },
        ],
        viewportFit: 'cover',
        width: 'device-width',
    }
}

export const generateStaticParams = () => {
    const themes: ThemeAppearance[] = ['dark', 'light'];
    const mobileOptions = [true, false];

    const staticLocales = [DEFAULT_LANG];

    const variants: { variants: string }[] = [];

    for (const locale of staticLocales) {
        for (const theme of themes) {
            for (const isMobile of mobileOptions) {
                variants.push({
                    variants: RouteVariants.serializeVariants({ isMobile, locale, theme })
                })
            }
        }
    }

    return variants;
}