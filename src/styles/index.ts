import { createGlobalStyle } from "antd-style";
import antOverride from "./antOverride";
import global from "./global";

const prefixCls = 'ant';

export const GlobalStyle = createGlobalStyle(({ theme }) => [
    global({ prefixCls, token: theme }),
    antOverride({ prefixCls, token: theme })
])

export * from "./text";