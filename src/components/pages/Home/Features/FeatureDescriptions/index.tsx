import Descriptions from "./Descriptions";
import { memo } from "react";
import { Center, Flexbox } from "react-layout-kit";

const FeatureDescriptions = memo(() => {
    return (
        <Center style={{ width: '100%' }}>
            <Flexbox gap={88}>
                <Descriptions/>
            </Flexbox>
        </Center>
    )
});

export default FeatureDescriptions;