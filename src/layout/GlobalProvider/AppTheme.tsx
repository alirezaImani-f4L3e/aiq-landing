'use client'

import { createStyles, ThemeAppearance, ThemeMode } from "antd-style";
import { memo, ReactNode } from "react";
import { ConfigProvider, FontLoader, NeutralColors, PrimaryColors, ThemeProvider } from "@lobehub/ui";
import { setCookie } from "@/utils/cookie";
import { AIQ_THEME_APPEARANCE } from "@/const/theme";
import { GlobalStyle } from "@/styles";
import Link from "next/link";
import Image from "next/image";

const useStyles = createStyles(({ css, token }) => ({

  // scrollbar-width and scrollbar-color are supported from Chrome 121
  // https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color
  scrollbar: css`
    scrollbar-color: ${token.colorFill} transparent;
    scrollbar-width: thin;

    #lobe-mobile-scroll-container {
      scrollbar-width: none;

      ::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }
  `,

  // so this is a polyfill for older browsers
  scrollbarPolyfill: css`
    ::-webkit-scrollbar {
      width: 0.75em;
      height: 0.75em;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }

    :hover::-webkit-scrollbar-thumb {
      border: 3px solid transparent;
      background-color: ${token.colorText};
      background-clip: content-box;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  `,
}))

export interface AppThemeProps {
  children?: ReactNode;
  customFontFamily?: string;
  customFontURL?: string;
  defaultAppearance?: ThemeAppearance;
  defaultNeutralColor?: NeutralColors;
  defaultPrimaryColor?: PrimaryColors;
  globalCDN?: boolean
}

const AppTheme = memo<AppThemeProps>(({
  children,
  customFontFamily,
  customFontURL,
  defaultAppearance,
  defaultNeutralColor,
  defaultPrimaryColor,
  globalCDN
}) => {

  const { styles, cx, theme } = useStyles();

  return (
    <ThemeProvider
      className={cx(styles.scrollbar, styles.scrollbarPolyfill)}
      customTheme={{
        neutralColor: defaultNeutralColor,
        primaryColor: defaultPrimaryColor
      }}
      defaultAppearance={defaultAppearance}
      onAppearanceChange={(appearance) => {
        setCookie(AIQ_THEME_APPEARANCE, appearance);
      }}
      theme={{
        cssVar: true,
        token: {
          fontFamily: customFontFamily ? `${customFontFamily},${theme.fontFamily}` : undefined
        }
      }}
      themeMode={defaultAppearance as ThemeMode}
    >
      {!!customFontURL && <FontLoader url={customFontURL} />}
      <GlobalStyle />
      <ConfigProvider config={{
        aAs: Link,
        imgAs: Image,
        imgUnoptimized: true,
        proxy: globalCDN ? 'unpkg' : undefined
      }}>
        {children}
      </ConfigProvider>
    </ThemeProvider>
  )
})

export default AppTheme;