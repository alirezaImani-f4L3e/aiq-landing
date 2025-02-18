'use client'

import { useTranslation } from "react-i18next"
import HeroSection from "./HeroSection";
import Features from "./Features";

const Home = () => {
    const { t } = useTranslation('common');
    return (
        <>

            <HeroSection />
            <Features />
        </>
    );
}

export default Home;