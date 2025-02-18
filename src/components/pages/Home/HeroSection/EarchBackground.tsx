import { createStyles } from "antd-style";
import { memo } from "react";

const useStyles = createStyles(({ css }) => ({
    container: css`
        pointer-events: none;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    `
}))

const EarthBackground = memo(() => {
    const { styles } = useStyles();
    return (
        <div className={styles.container} style={{
            display: 'block',
            opacity: 0
        }}>

        </div>
    )
})

export default EarthBackground;