import { createStyles } from "antd-style";
import { memo } from "react";
import { Center } from "react-layout-kit";
import EarthBackground from "./EarchBackground";
import Content from "./Content";

const useStyles = createStyles(({ css }) => ({
    container: css`
        position: relative;
        width: 100%;
    `
}))

const HeroSection = memo(() => {
    const { styles } = useStyles();
    return (
        <Center className={styles.container} as={'section'} style={{
            height: 'calc(var(--vh, 100vh) * 1)',
            overflow: 'hidden',
            width: '100%'
        }}>
            <EarthBackground />
            <Content/>
            
        </Center>)
})

export default HeroSection;