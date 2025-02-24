import { createStyles } from "antd-style";
import Link from "next/link";
import { memo, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Flexbox } from "react-layout-kit";

const useStyles = createStyles(({ css, token }) => ({
    colTitle: css`
        font-size: 16px;
        font-weight: bold;
    `,
    colContainer: css`
        color: ${token.colorTextDescription};

        & a {
            color: inherit;
        }

        & a:hover {
            color: white;
        }
    `
}))

export interface FooterColumnItem {
    type: "link";
    text: string;
    href: string;
    linkTarget?: "_blank"
}

interface FooterColumnProps {
    title: string;
    items: FooterColumnItem[];
}

const FooterColumn = memo<FooterColumnProps>(({ title, items }) => {
    const { styles } = useStyles();
    const { t } = useTranslation("common");
    return <Flexbox style={{ gridColumn: 'span 2' }} gap={16}>
        <div className={styles.colTitle}>{title}</div>

        <Flexbox gap={8} className={styles.colContainer}>
            {items.map((item: FooterColumnItem) => <Fragment key={item.text}>
                {item.type === "link" && <Link href={item.href} target={item.linkTarget}>
                    <Flexbox gap={4} align="center" horizontal>
                        {t(`footer.${item.text}`)}
                    </Flexbox>
                </Link>}
            </Fragment>)}
        </Flexbox>
    </Flexbox>
})

export default FooterColumn;