import { Carousel } from "antd";
import { createStyles } from "antd-style";
import { memo } from "react";
import { Flexbox } from "react-layout-kit";
import { useMotionValueEvent, useScroll, useTransform, motion } from "motion/react";
import { Video } from "@lobehub/ui";

const useStyles = createStyles(({ css, token }) => ({
    videoContainer: css`
        position: relative;
        overflow: hidden;
        max-width: 1000px;
        background: black;
        transform-origin: bottom center;
        border: 1px solid ${token.colorBorder};
        -webkit-transition: all 2s ease-in-out;
        transition: all 2s ease-in-out;
    `,
    containerFirstChild: css`
        position: absolute;
        z-index:0;
        inset: 0;
        width: 100%;
        height: 100%;
    `,
    containerSecondChild: css`
        position: relative;
        z-index:1;
        overflow:hidden;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        margin: 1px;
        background: black;
    `
}))

const slides = [
    {
        id: 1,
        videoUrl: "https://hub-apac-1.lobeobjects.space/landing/0.webm",
        poster: "https://hub-apac-1.lobeobjects.space/landing/0.webp"
    },
    {
        id: 2,
        videoUrl: "https://hub-apac-1.lobeobjects.space/landing/0.webm",
        poster: "https://hub-apac-1.lobeobjects.space/landing/0.webp"
    }
]

const Showcase = memo(() => {
    const { styles } = useStyles();
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [100, 500], [30, 0]);
    const positionY = useTransform(scrollY, [100, 500], [-224, 0])

    return (
        <motion.div style={{ y: positionY, rotateX: rotate }}>
            <div style={{ borderRadius: '16px' }} className={styles.videoContainer}>
                <div style={{ borderRadius: 'calc(16px * 0.96)' }} className={styles.containerFirstChild}>
                    {/* Moving light around the border */}
                </div>

                <div style={{ borderRadius: 'calc(16px * 0.96)' }} className={styles.containerSecondChild}>
                    <Carousel arrows={false} style={{ width: '1200px', maxWidth: 'calc(100vw - 32px)' }} dots={false}>
                        {slides.map((slide) => <Flexbox key={slide.id} align="center" justify="center" style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
                            <Video src={slide.videoUrl} poster={slide.poster} />
                        </Flexbox>)}
                    </Carousel>
                </div>
            </div>
        </motion.div>
    )
})

export default Showcase;