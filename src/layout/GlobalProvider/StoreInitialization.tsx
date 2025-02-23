'use client'

import { useIsMobile } from "@/hooks/useIsMobile";
import { useGeneralStore } from "@/store/general/Provider";
import { memo } from "react"
import { createStoreUpdater } from "zustand-utils";

const StoreInitialization = memo(() => {
    const setIsMobile = useGeneralStore(s => s.setIsMobile);

    const mobile = useIsMobile();

    setIsMobile(mobile)

    return null;
})


export default StoreInitialization;