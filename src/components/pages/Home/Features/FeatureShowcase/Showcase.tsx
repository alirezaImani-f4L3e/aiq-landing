import { Carousel } from "antd";
import { createStyles } from "antd-style";
import { Fragment, RefObject, Dispatch, SetStateAction } from "react";
import { Flexbox } from "react-layout-kit";
import { useScroll, useTransform, motion } from "motion/react";
import { useGeneralStore } from "@/store/general/Provider";
import { ShowcaseSection } from ".";
import { CarouselRef } from "antd/es/carousel";
import Image from "next/image";

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
            pointer-events: auto !important;
        }
    `
}))

const slides = [
    {
        id: 0,
        videoUrl: "/videos/landing/0.webm",
        poster: "/images/landing/0.webp"
    },
    {
        id: 1,
        videoUrl: "/videos/landing/1.webm",
        poster: "/images/landing/1.webp"
    },
    {
        id: 2,
        videoUrl: "/videos/landing/2.webm",
        poster: "/images/landing/2.webp"
    },
    {
        id: 3,
        videoUrl: "/videos/landing/3.webm",
        poster: "/images/landing/3.webp"
    },
    {
        id: 4,
        videoUrl: "/videos/landing/4.webm",
        poster: "/images/landing/4.webp"
    },
    {
        id: 5,
        videoUrl: "/videos/landing/5.webm",
        poster: "/images/landing/5.webp"
    }
]

const imageSlides = [
    {
        id: 0,
        image: "/images/hero_section/overview.png"
    },
    {
        id: 1,
        image: "/images/hero_section/assistants.png"
    },
    {
        id: 2,
        image: "/images/hero_section/image_generation.png"
    },
    {
        id: 3,
        image: "/images/hero_section/speech_to_text.png"
    },
    {
        id: 4,
        image: "/images/hero_section/plugins.png"
    },
    {
        id: 5,
        image: "/images/hero_section/supported_models.png"
    }
]

interface ShowcaseProps {
    sliderRef: RefObject<CarouselRef | null>,
    currentSlide: ShowcaseSection,
    setCurrentSlide: Dispatch<SetStateAction<ShowcaseSection>>
}

const Showcase = ({ sliderRef, currentSlide, setCurrentSlide }: ShowcaseProps) => {
    const mobile = useGeneralStore(s => s.isMobile);
    const { styles } = useStyles();
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [100, 700], [30, 0]);
    const positionY = useTransform(scrollY, [100, 700], [mobile ? -200 : -224, 0])

    return (
        <>
            <motion.div style={{ y: positionY, rotateX: rotate }}>
                <div style={{ borderRadius: '16px' }} className={styles.videoContainer}>
                    <div style={{ borderRadius: 'calc(16px * 0.96)' }} className={styles.containerFirstChild}>
                        {/* Moving light around the border */}
                    </div>

                    <div style={{ borderRadius: 'calc(16px * 0.96)' }} className={styles.sliderContainer}>
                        <Carousel ref={sliderRef} slidesToShow={1} arrows={false} style={{ width: '1200px', maxWidth: 'calc(100vw - 32px)' }} dots={mobile} beforeChange={(_, next) => {
                            setCurrentSlide(next)
                        }}>
                            {/* {slides.map((slide) => <Fragment key={slide.id}>
                                <Flexbox align="center" justify="center" style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
                                    <video muted controls preload="none" tabIndex={-1} src={slide.videoUrl} poster={slide.poster} style={{ width: "100%", display: "inline-block" }} onEnded={() => {
                                        sliderRef.current?.next();
                                    }}>
                                    </video>
                                </Flexbox>
                            </Fragment>)} */}

                            {imageSlides.map((slide) => <Fragment key={slide.id}>
                                <Flexbox align="center" justify="center" style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
                                    <img tabIndex={-1} style={{ width: "100%", display: "inline-block" }} src={slide.image} alt="Image"/>
                                </Flexbox>
                            </Fragment>)}
                        </Carousel>
                    </div>
                </div>
            </motion.div>

            {mobile && <Flexbox horizontal gap={6}>
                {slides.map((slide) => {
                    return <div
                        key={`dots-${slide.id}`}
                        style={{ cursor: "pointer", background: "#fff", borderRadius: "3px", height: "6px", width: "6px", opacity: slide.id === currentSlide ? 1 : 0.2 }}
                        onClick={() => {
                            setCurrentSlide(slide.id)
                            sliderRef.current?.goTo(slide.id);
                        }}
                    >

                    </div>
                })}
            </Flexbox>}
        </>
    )
}

export default Showcase;