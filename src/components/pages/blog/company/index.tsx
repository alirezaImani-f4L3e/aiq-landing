"use client";

import { Flexbox } from "react-layout-kit";
import BlogBox from "../blogBox";
import { Grid } from "@lobehub/ui";
import PostBox from "../postBox";
import { createStyles } from "antd-style";
import Explor from "../../features/explor";
import { Divider } from "antd";

const useStyles = createStyles(({ css, responsive }) => ({
  gridPostBox: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 16px;

    ${responsive.mobile} {
      grid-template-columns: 1fr;
    }
  `,
  titleHead: css`
    font-size: 32px;
    font-weight: bold;
    margin-right: 20px;
    margin-top: 60px;

    ${responsive.tablet} {
      font-size: 28px;
    }
    ${responsive.mobile} {
      font-size: 28px;
    }
  `,
}));

const CompanyBlog = () => {
  const { styles } = useStyles();

  return (
    <Flexbox
      horizontal={false}
      style={{ maxWidth: "1200px", display: "flex", margin: "0 auto" }}
    >

      <h1 className={styles.titleHead}>اخبار شرکت</h1>
      <Grid className={styles.gridPostBox} gap={24}>
        <PostBox />
        <PostBox />
      </Grid>

      {/* <Divider style={{ margin: "78px 0 48px 0" }} />

      <Explor /> */}
    </Flexbox>
  );
};

export default CompanyBlog;