import { DEFAULT_LANG } from "@/const/locale";
import { locales } from "@/locales/resources";
import { DynamicLayoutProps } from "@/types/next";
import { ThemeAppearance } from "antd-style";

export interface IRouteVariants {
    isMobile: boolean;
    locale: string;
    neutralColor?: string;
    primaryColor?: string;
    theme: ThemeAppearance
}

export const DEFAULT_VARIANTS: IRouteVariants = {
    isMobile: false,
    locale: DEFAULT_LANG,
    theme: 'light'
}

const SUPPORTED_THEMES = ['light', 'dark'] as const;

const SPLITTER = "__";

export class RouteVariants {
    static serializeVariants = (variants: IRouteVariants) => {
        return [variants.locale, Number(variants.isMobile), variants.theme].join(SPLITTER);
    }

    static deserializeVariants = (serialized: string): IRouteVariants => {
        try {
            const [locale, isMobile, theme] = serialized.split(SPLITTER);

            return {
                isMobile: isMobile === '1',
                locale: this.isValidLocale(locale) ? locale : DEFAULT_VARIANTS.locale,
                theme: this.isSupportedTheme(theme) ? theme : DEFAULT_VARIANTS.theme
            }
        } catch {
            return {
                ...DEFAULT_VARIANTS
            }
        }


    }

    static getIsMobile = async (props: DynamicLayoutProps) => {
        const { variants } = await props.params;
        const { isMobile } = RouteVariants.deserializeVariants(variants);

        return isMobile;
    }

    private static isValidLocale = (locale: string) => locales.includes(locale);
    private static isSupportedTheme = (theme: string) => SUPPORTED_THEMES.includes(theme as any);
}