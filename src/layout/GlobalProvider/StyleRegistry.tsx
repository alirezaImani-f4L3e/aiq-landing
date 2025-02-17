"use client"

import { extractStaticStyle, StyleProvider } from "antd-style";
import { useServerInsertedHTML } from "next/navigation";
import { PropsWithChildren, useRef } from "react"

const StyleRegistry = ({ children }: PropsWithChildren) => {
    const isInserted = useRef(false);

    useServerInsertedHTML(() => {
        if (isInserted.current) return;

        isInserted.current = true;

        return extractStaticStyle().map((item) => item.style);
    })

    return <StyleProvider cache={extractStaticStyle.cache}>{children}</StyleProvider>
}

export default StyleRegistry;