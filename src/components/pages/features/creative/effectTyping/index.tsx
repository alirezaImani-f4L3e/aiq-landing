"use client";
import { useEffect, useState, Fragment, useRef } from "react";
import { Image } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Center, Flexbox } from "react-layout-kit";
import { Typography } from "antd";

const useStyles = createStyles(({ css, responsive }) => ({
  boxWrapper: css`
    position: relative;
    width: 90%;
    margin-top: 64px;
  `,
  tooltipButton: css`
    position: absolute;
    top: -40px;
    left: 225px;
    color: red;
    color: #aaaaaa;

    ${responsive.mobile} {
      top: -40px;
    }
    ${responsive.tablet} {
      top: -40px;
      left: 60px;
    }
  `,
  textbox: css`
    background-color: #0d0d0d;
    padding: 8px 24px;
    border-radius: 16px;
    ${responsive.mobile} {
      width: 80%;
    }
    ${responsive.tablet} {
      width: 90%;
    }
  `,
  pargh: css`
    font-size: 14px;
    text-align: start;
    overflow: hidden;
    white-space: wrap;
    width: fit-content;
    margin-left: auto;
  `,
}));

type EffectPropsTypes = {
  speed: number;
  text: string;
};
const EffectTyping: React.FC<EffectPropsTypes> = ({ speed, text }) => {
  const { styles } = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const fullText = `${text}\nمن آن را برای شما می‌سازم 👉`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // typing just once play
          let i = 0;
          const typingInterval = setInterval(() => {
            if (i < fullText.length) {
              setDisplayedText(fullText.substring(0, i + 1));
              i++;
            } else {
              clearInterval(typingInterval);
            }
          }, speed);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated]);

  const tehranTime = new Date().toLocaleTimeString("fa-IR", {
    timeZone: "Asia/Tehran",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const { Paragraph } = Typography;
  return (
    <Center ref={containerRef} style={{ width: "100%" }}>
      <Flexbox
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={styles.boxWrapper}
        justify="center"
        align="start"
        horizontal
        gap={"16px"}
      >
        {showTooltip && (
          <Paragraph className={styles.tooltipButton}>{tehranTime}</Paragraph>
        )}

        <Center className={styles.textbox}>
          <Paragraph className={styles.pargh}>
            {displayedText.split("\n").map((line, index) => (
              <Fragment key={index}>
                {line}
                {index < displayedText.split("\n").length - 1 && <br />}
              </Fragment>
            ))}
          </Paragraph>
        </Center>

        <Image
          alt="🧑‍🎨"
          loading="lazy"
          style={{ width: "32px", height: "32px", borderRadius: "200px" }}
          decoding="async"
          data-nimg="1"
          preview={false}
          src="/images/features/painter.webp"
        />
      </Flexbox>
    </Center>
  );
};

export default EffectTyping;
