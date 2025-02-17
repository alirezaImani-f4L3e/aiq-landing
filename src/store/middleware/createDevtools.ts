import { isDev, isOnServerSide } from "@/utils/env";
import { optionalDevtools } from "zustand-utils";
import { devtools } from "zustand/middleware";

export const createDevtools = (name: string): typeof devtools => (initializer) => {
    let showDevtools = false;

    if (!isOnServerSide) {
        const url = new URL(window.location.href);
        const debug = url.searchParams.get("debug");
        if (debug?.includes(name)) {
            showDevtools = true;
        }
    }

    return optionalDevtools(showDevtools)(initializer, {
        name: `AIQ_${name}${isDev ? '_DEV' : ''}`
    })
}