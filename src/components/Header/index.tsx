'use client'

import { createStyles } from "antd-style";
import { memo } from "react";
import { Flexbox } from "react-layout-kit";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import HeaderActions from "./HeaderActions";

const useStyles = createStyles(({ css, token }) => ({
    headerContainer: css`
        pointer-events: none;
        position: fixed;
        z-index:1001;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        inset-block-start: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    `,
    headerInner: css`
        pointer-events: all;
        overflow: hidden;
        width: unset;
        padding-inline: 12px;
        backdrop-filter:  saturate(180%) blur(16px);
        border: 1px solid ${token.colorBorderSecondary};
        border-radius: 56px;
        transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

        & a {
            color: inherit;
        }
    `
}))

const Header = memo(() => {
    const { styles } = useStyles();
    return <header className={styles.headerContainer}>
        <Flexbox horizontal justify="center" align="center" height={56} gap={8} className={styles.headerInner}>
            <HeaderLogo />
            <Navbar />
            <HeaderActions />
        </Flexbox>
    </header>
});

export default Header;