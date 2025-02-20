import { createGlobalStyle } from "antd-style";
import antOverride from "./antOverride";

const prefixCls = 'ant';

export const GlobalStyle = createGlobalStyle(({ theme }) => [
    antOverride({ prefixCls, token: theme })
])

export * from "./text";