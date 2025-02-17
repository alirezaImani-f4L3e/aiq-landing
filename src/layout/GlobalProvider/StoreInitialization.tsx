'use client'

import { useIsMobile } from "@/hooks/useIsMobile";
import { useGeneralStore } from "@/store/general";
import { memo } from "react"
import { createStoreUpdater } from "zustand-utils";

const StoreInitialization = memo(() => {
    const useStoreUpdater = createStoreUpdater(useGeneralStore);

    const mobile = useIsMobile();

    useStoreUpdater("isMobile", mobile);

    return null;
})


export default StoreInitialization;