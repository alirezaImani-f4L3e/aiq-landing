import { getAntdLocale, parseBrowserLanguage } from "@/utils/locale";
import { ReactNode } from "react";
import StyleRegistry from "./StyleRegistry";
import Locale from "./Locale";
import AntdV5MonkeyPatch from "./AntdV5MonkeyPatch";
import AppTheme from "./AppTheme";
import StoreInitialization from "./StoreInitialization";
import { GeneralStoreProvider } from "@/store/general/Provider";
import { ThemeMode } from "antd-style";

interface GlobalLayoutProps {
    appearance: string;
    children: ReactNode;
    locale: string;
    isMobile: boolean;
    neutralColor?: string;
    primaryColor?: string;
}

const GlobalLayout = async ({ children, isMobile, appearance, locale: userLocale, neutralColor, primaryColor }: GlobalLayoutProps) => {
    const antdLocale = await getAntdLocale(userLocale);

    return (
        <StyleRegistry>
            <Locale antdLocale={antdLocale} defaultLang={userLocale}>
                <GeneralStoreProvider isMobile={isMobile} theme={appearance as ThemeMode} language={userLocale}>
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
                </GeneralStoreProvider>
                <AntdV5MonkeyPatch />
            </Locale>
        </StyleRegistry>
    )
}

export default GlobalLayout;