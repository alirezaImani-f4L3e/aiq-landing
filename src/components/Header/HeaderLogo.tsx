import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { Flexbox } from "react-layout-kit";
import AIQLogo from "@/assets/images/aiq_logo.png";

const HeaderLogo = memo(() => {
    return (
        <Flexbox style={{ zIndex: 10 }} flex={'none'} horizontal>
            <Link href={'/'}>
                <Image alt="AIQ" title="home" width={36} height={36} decoding="async" style={{ color: "transparent" }} src={AIQLogo} />
            </Link>
        </Flexbox>
    )
})

export default HeaderLogo;