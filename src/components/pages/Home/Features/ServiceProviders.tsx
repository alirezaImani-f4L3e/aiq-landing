import { createStyles } from "antd-style";
import { memo } from "react";
import { Center, Flexbox } from "react-layout-kit";
import { OpenAI, Gemini, Claude, Meta, Perplexity, Mistral, Ollama, Bedrock, Dalle, DeepSeek, Midjourney, Grok, Moonshot, Qwen } from "@lobehub/icons";
import { AI_SERVICE_PROVIDERS_ICON_SIZE } from "@/const/theme";
import { useTranslation } from "react-i18next";

const useStyles = createStyles(({ css }) => ({
    title: css`
        font-size: 28px;
        font-weight: 500;
        line-height: 1.6;
        text-align: center;
    `,
    container: css`
        -webkit-box-flex-wrap: wrap;
        flex-wrap: wrap;
        gap: 32px 64px;
        max-width: 1024px;
        opacity: 0.6;
    `
}))

const ServiceProviders = memo(() => {
    const { styles } = useStyles();
    const { t } = useTranslation("landing");
    return (
        <Center style={{ width: "100%" }} gap={48}>
            <Flexbox style={{ textAlign: 'center' }} as={'h3'} >
                <div className={styles.title}>
                    {t("serviceProvidersTitle")}
                </div>
                <div style={{ opacity: 0.6 }}>
                    {t("poweredBy")}
                </div>
            </Flexbox>

            <Flexbox horizontal justify="center" align="center" className={styles.container} dir="ltr">
                <OpenAI.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Gemini.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Claude.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Meta.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Perplexity.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Mistral.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Ollama.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Bedrock.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Dalle.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <DeepSeek.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Midjourney.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Grok.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Moonshot.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
                <Qwen.Combine size={AI_SERVICE_PROVIDERS_ICON_SIZE} />
            </Flexbox>
        </Center>
    )
});

export default ServiceProviders;