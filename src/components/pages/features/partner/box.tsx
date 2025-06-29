import { Image } from "@lobehub/ui";
import { Flexbox } from "react-layout-kit";
import { PartnerItem } from "..";

interface boxPropsTypes {
  item:PartnerItem
}

const Box = ({item}:boxPropsTypes) => {
  
  return (
    <div
      style={{
        maxWidth: "350px",
        border: "1px solid #0C0C0C",
        borderRadius: "16px",
      }}
    >
      <div style={{ width: "100%", height: "150px", padding: "0 5px" }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          src={item.image}
          alt="box-image"
          variant="borderless"
        />
      </div>
      <Flexbox style={{width:"100%",height:"230px", padding: "10px" ,backgroundColor:"#0D0D0D"}}>
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

        <div
          style={{
            width: "100%",
            height: "36px",
            backgroundColor: "#ffffff1A",
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop:"auto"
          }}
        >
          بیشتر
        </div>
      </Flexbox>
    </div>
  );
};

export default Box;
