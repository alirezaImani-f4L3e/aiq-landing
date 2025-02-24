'use client'

import { useTranslation } from "react-i18next"
import HeroSection from "./HeroSection";
import Features from "./Features";
import QuestionAnswering from "./QuestionAnswering";
import { notFound, usePathname } from "next/navigation";

const Home = () => {
    const { t } = useTranslation('common');
    const pathname = usePathname();

    if (pathname !== "/") { // FIXME: for now we have only / path in the project
        return notFound();
    }
    return (
        <>

            <HeroSection />
            <Features />
            <QuestionAnswering />
        </>
    );
}

export default Home;