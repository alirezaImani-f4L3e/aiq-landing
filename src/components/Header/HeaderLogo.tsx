import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { Flexbox } from "react-layout-kit";
import Logo from "@/components/shared/Logo";

const HeaderLogo = memo(() => {
    return (
        <Flexbox style={{ zIndex: 10 }} flex={'none'} horizontal>
            <Link href={'/'}>
                <Logo />
            </Link>
        </Flexbox>
    )
})

export default HeaderLogo;