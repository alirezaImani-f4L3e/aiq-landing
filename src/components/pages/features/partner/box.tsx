import { Image } from "@lobehub/ui";
import { Flexbox } from "react-layout-kit";
import { PartnerItem } from "..";
import { createStyles } from "antd-style";

interface boxPropsTypes {
  item: PartnerItem;
}

const useStyles = createStyles(({ css, responsive }) => ({
  wrapper: css`
    border: 1px solid #0c0c0c;
    border-radius: 16px;
    background-color: #0d0d0d;
    position:relative;
    padding:0 0 40px 0
    `,
    
    image: css`
    width: 100%;
    height: 150px;
    border-radius: 16px;
  `,
}));

const Box = ({ item }: boxPropsTypes) => {
  const { styles } = useStyles();

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          style={{ width: "100%", height: "100%" }}
          src={item.image}
          alt="box-image"
          variant="borderless"
        />
      </div>
      <Flexbox
        style={{
          width: "100%",
          padding:"10px",
        }}
      >
        <Flexbox>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            {item.title}
          </span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#aaaaaa",
              textAlign: "justify",
              margin: "20px 0",
            }}
          >
            {item.content}
          </span>
        </Flexbox>

        <div onClick={() => console.log(item.id)}
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
            position:"absolute",
            bottom:"10px",
            left:"10px",
            right:"10px",
          }}
        >
          بیشتر
        </div>
      </Flexbox>
    </div>
  );
};

export default Box;
