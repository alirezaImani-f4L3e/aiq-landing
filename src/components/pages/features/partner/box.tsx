import { Button, Image } from "@lobehub/ui";
import { Center, Flexbox } from "react-layout-kit";
import { PartnerItem } from "..";
import { createStyles } from "antd-style";
import { Spotlight } from "@lobehub/ui/awesome";
import { Typography } from "antd";

interface boxPropsTypes {
  item: PartnerItem;
}

const useStyles = createStyles(({ css, token }) => ({
  wrapper: css`
    padding: 0 0 40px 0;
    position: relative;
    width: 100%;
    background: ${token.colorBgLayout};
    border: 1px solid ${token.colorBorder};
    border-radius: ${token.borderRadius}px;
  `,

  image: css`
    width: 100%;
    height: 150px;
    border-radius: 16px;
  `,
  moreButton: css`
    height: "36px";
    background-color: "#ffffff1A";
    color: "white";
    text-align: "center";
    display: "flex";
    flex-shrink: 0;
    justify-content: "center";
    align-items: "center";
    border-radius: "6px";
    cursor: "pointer";
    position: "absolute";
    bottom: "10px";
    left: "10px";
    right: "10px";
    opacity: 0.7;
    transition: all 0.5s ease;

    &:hover {
      opacity: 1;
    }
  `,
}));

const Box = ({ item }: boxPropsTypes) => {
  const { styles } = useStyles();
  const { Title, Paragraph } = Typography;

  return (
    <Center className={styles.wrapper}>
      <Spotlight size={256} />
      <Center className={styles.image}>
        <Image
          style={{ width: "100%", height: "100%" }}
          src={item.image}
          alt="box-image"
          variant="borderless"
          preview={false}
        />
      </Center>
      <Flexbox
        style={{
          width: "100%",
          padding: "10px",
        }}
      >
        <Flexbox>
          <Title level={3} style={{ fontSize: "18px", fontWeight: "bold" }}>
            {item.title}
          </Title>
          <Paragraph
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#aaaaaa",
              textAlign: "justify",
              margin: "20px 0",
            }}
          >
            {item.content}
          </Paragraph>
        </Flexbox>

        <Button
          onClick={() => console.log(item.id)}
          className={styles.moreButton}
          style={{
            height: "36px",
            backgroundColor: "#ffffff1A",
            color: "white",
            textAlign: "center",
            display: "flex",
            flexShrink: 0,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "6px",
            cursor: "pointer",
            position: "absolute",
            bottom: "10px",
            left: "10px",
            right: "10px",
          }}
        >
          بیشتر
        </Button>
      </Flexbox>
    </Center>
  );
};

export default Box;