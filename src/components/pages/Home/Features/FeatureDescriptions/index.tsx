import Descriptions from "./Descriptions";
import { memo } from "react";
import { Center, Flexbox } from "react-layout-kit";
import FeatureCards from "./FeatureCards";

const FeatureDescriptions = memo(() => {
    return (
        <Center style={{ width: '100%' }}>
            <Flexbox gap={88}>
                <Descriptions />
                <FeatureCards />
            </Flexbox>
        </Center>
    )
});

export default FeatureDescriptions;