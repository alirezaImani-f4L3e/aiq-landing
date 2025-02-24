import { Carousel } from "antd";
import { createStyles } from "antd-style";
import { memo, Fragment, RefObject } from "react";
import { Flexbox } from "react-layout-kit";
import { useScroll, useTransform, motion } from "motion/react";
import { useGeneralStore } from "@/store/general/Provider";
import { CarouselRef } from "antd/es/carousel";

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
        box-shadow: 0 0 12vw -4vw #a092ff;;
    `,
    containerFirstChild: css`
        position: absolute;
        z-index:0;
        inset: 0;
        width: 100%;
        height: 100%;
    `,
    sliderContainer: css`
        position: relative;
        z-index:1;
        overflow:hidden;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        margin: 1px;
        background: black;

        & .slick-slide { // Just to fix slider item empty space because of RTL carousel
            display:flex !important;
            justify-content: end !important;
        }
    `
}))

const slides = [
    {
        id: 0,
        videoUrl: "https://hub-apac-1.lobeobjects.space/landing/0.webm",
        poster: "https://hub-apac-1.lobeobjects.space/landing/0.webp"
    },
    {
        id: 1,
        videoUrl: "https://hub-apac-1.lobeobjects.space/landing/1.webm",
        poster: "https://hub-apac-1.lobeobjects.space/landing/1.webp"
    },
    {
        id: 2,
        videoUrl: "https://hub-apac-1.lobeobjects.space/landing/2.webm",
        poster: "https://hub-apac-1.lobeobjects.space/landing/2.webp"
    },
    {
        id: 3,
        videoUrl: "https://hub-apac-1.lobeobjects.space/landing/3.webm",
        poster: "https://hub-apac-1.lobeobjects.space/landing/3.webp"
    },
    {
        id: 4,
        videoUrl: "https://hub-apac-1.lobeobjects.space/landing/4.webm",
        poster: "https://hub-apac-1.lobeobjects.space/landing/4.webp"
    },
    {
        id: 5,
        videoUrl: "https://hub-apac-1.lobeobjects.space/landing/5.webm",
        poster: "https://hub-apac-1.lobeobjects.space/landing/5.webp"
    }
]

interface ShowcaseProps {
    sliderRef: RefObject<undefined>
}

const Showcase = memo<ShowcaseProps>(({ sliderRef }) => {
    const mobile = useGeneralStore(s => s.isMobile);
    const { styles } = useStyles();
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [100, 700], [30, 0]);
    const positionY = useTransform(scrollY, [100, 700], [mobile ? -56 : -224, 0])

    return (
        <motion.div style={{ y: positionY, rotateX: rotate }}>
            <div style={{ borderRadius: '16px' }} className={styles.videoContainer}>
                <div style={{ borderRadius: 'calc(16px * 0.96)' }} className={styles.containerFirstChild}>
                    {/* Moving light around the border */}
                </div>

                <div style={{ borderRadius: 'calc(16px * 0.96)' }} className={styles.sliderContainer}>
                    <Carousel ref={sliderRef} slidesToShow={1} arrows={false} style={{ width: '1200px', maxWidth: 'calc(100vw - 32px)' }} dots={mobile}>
                        {slides.map((slide) => <Fragment key={slide.id}>
                            <Flexbox align="center" justify="center" style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
                                <video controls muted autoPlay preload="none" poster={slide.poster} style={{ width: "100%", display: "inline-block" }}>
                                    <source src={slide.videoUrl} />
                                </video>
                            </Flexbox>
                        </Fragment>)}
                    </Carousel>
                </div>
            </div>
        </motion.div>
    )
})

export default Showcase;