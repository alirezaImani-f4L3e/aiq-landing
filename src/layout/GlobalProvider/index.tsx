import { getAntdLocale, parseBrowserLanguage } from "@/utils/locale";
import { ReactNode } from "react";
import StyleRegistry from "./StyleRegistry";
import Locale from "./Locale";
import AntdV5MonkeyPatch from "./AntdV5MonkeyPatch";
import AppTheme from "./AppTheme";
import StoreInitialization from "./StoreInitialization";

interface GlobalLayoutProps {
    appearance: string;
    children: ReactNode;
    locale: string;
    neutralColor?: string;
    primaryColor?: string;
}

const GlobalLayout = async ({ children, appearance, locale: userLocale, neutralColor, primaryColor }: GlobalLayoutProps) => {
    const antdLocale = await getAntdLocale(userLocale);

    return (
        <StyleRegistry>
            <Locale antdLocale={antdLocale} defaultLang={userLocale}>
                <AppTheme
                    customFontFamily="Shabnam"
                    customFontURL="/fonts/shabnam/shabnam-font.css"
                    defaultAppearance={appearance}
                    defaultNeutralColor={neutralColor as any}
                    defaultPrimaryColor={primaryColor as any}
                >
                    {children}
                    <StoreInitialization />
                </AppTheme>
                <AntdV5MonkeyPatch />
            </Locale>
        </StyleRegistry>
    )
}

export default GlobalLayout;