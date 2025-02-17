import Home from "@/components/pages/Home";
import { getCanonicalUrl } from "@/utils/server/url";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: getCanonicalUrl('/') }
}

const HomePage = () => {
    return <Home/>
}

export default HomePage;