import Image from "next/image";
import AIQLogo from "@/assets/images/aiq_logo.png";
import { memo } from "react";

const Logo = memo(() => {
    return (
        <Image alt="AIQ" title="home" width={36} height={36} decoding="async" style={{ color: "transparent", verticalAlign: 'middle', borderStyle: 'none' }} src={AIQLogo} />
    )
})

export default Logo;