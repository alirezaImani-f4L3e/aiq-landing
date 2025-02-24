import { Button } from "antd";
import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Flexbox } from "react-layout-kit";

const HeaderActions = memo(() => {
    const { t } = useTranslation("landing");
    return (
        <Flexbox horizontal gap={8} flex={'none'}>
            <Link href={'https://chat.aiqueue.ir/?utm_source=landing&utm_content=header_get_started'}>
                <Button type="primary" color="primary" variant="solid" shape="round" style={{ fontWeight: '500' }}>
                    {t("getStarted")}
                </Button>
            </Link>
        </Flexbox>
    )
});

export default HeaderActions;