import { createStyles } from "antd-style";
import { memo } from "react";
import { Flexbox } from "react-layout-kit";
import Showcase from "./Showcase";
import { Segmented } from "antd";

const useStyles = createStyles(({ css, token }) => ({
    container: css`
        z-index: 2;
        perspective: 1000px;
    `,
    featureSegmented: css`
        background: ${token.colorBgBlur};
        border: 1px solid ${token.colorBorder};
    `
}))

const FeatureShowcase = memo(() => {
    const { styles } = useStyles();
    return (
        <Flexbox gap={24} align="center" className={styles.container}>
            {/* Segmented to show different features */}
            <Segmented className={styles.featureSegmented} size="large" options={['Overview', 'Assistants', 'Text-to-Image', 'Text-to-Speech', 'Plugins', 'Multi-Models']} />

            <Showcase />
        </Flexbox>
    )
})

export default FeatureShowcase;