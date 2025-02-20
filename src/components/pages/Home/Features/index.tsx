import { createStyles } from "antd-style";
import { memo } from "react";
import { Center, Flexbox } from "react-layout-kit";
import FeatureShowcase from "./FeatureShowcase";
import FeatureDescriptions from "./FeatureDescriptions";
import ServiceProviders from "./ServiceProviders";

const useStyles = createStyles(({ css }) => ({
    container: css`
        position: relative;
        width: 100%;
    `,
    innerContainer: css`
        position: relative;
        width: 100%;
        padding-inline: 24px;
    `
}))

const Features = memo(() => {
    const { styles } = useStyles();
    return (
        <Center as={'section'} className={styles.container}>
            <Flexbox className={styles.innerContainer} style={{ maxWidth: '1200px' }} gap={120} align="center" justify="center">
                <FeatureShowcase />
                <FeatureDescriptions />
                <ServiceProviders />
            </Flexbox>
        </Center>
    )
})

export default Features;