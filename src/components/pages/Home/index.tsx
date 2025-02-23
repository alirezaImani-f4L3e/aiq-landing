'use client'

import { useTranslation } from "react-i18next"
import HeroSection from "./HeroSection";
import Features from "./Features";
import QuestionAnswering from "./QuestionAnswering";

const Home = () => {
    const { t } = useTranslation('common');
    return (
        <>

            <HeroSection />
            <Features />
            <QuestionAnswering/>
        </>
    );
}

export default Home;