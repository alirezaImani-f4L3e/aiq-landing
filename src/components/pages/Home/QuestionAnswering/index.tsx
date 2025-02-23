import { createStyles } from "antd-style";
import { memo } from "react";
import { Center, Flexbox } from "react-layout-kit";
import QuestionsAndAnswers from "./QuestionsAndAnswers";

const useStyles = createStyles(({ css }) => ({
    container: css`
        position: relative;
        width: 100%;
    `,
    innerContainer: css`
        position: relative;
        width: 100%;
        padding-inline: 24px;
    `
}))

const QuestionAnswering = memo(() => {
    const { styles } = useStyles();
    return (
        <Center className={styles.container}>
            <Flexbox className={styles.innerContainer} style={{ maxWidth: "1200px", marginBottom: "48px", marginTop: "160px" }} gap={96} align="center" justify="center">
                <Center style={{ width: "100%"}}>
                    <QuestionsAndAnswers/>
                </Center>

                <Center style={{ width: "100%"}}>

                </Center>
            </Flexbox>
        </Center>
    )
})

export default QuestionAnswering;