import { createGlobalStyle } from "antd-style";
import global from "./global";
import antOverride from "./antOverride";

const prefixCls = 'ant';

export const GlobalStyle = createGlobalStyle(({ theme }) => [
    global({ prefixCls, token: theme }),
    antOverride({ prefixCls, token: theme })
])

export * from "./text";