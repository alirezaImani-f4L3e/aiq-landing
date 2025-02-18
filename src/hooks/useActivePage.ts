import { usePathname } from "next/navigation";


export type PageKey = "features" | "pricing";

const useActivePage = () => {

    const pathname = usePathname();

    const activePage: PageKey = pathname.split('/').at(-1) as PageKey;

    return activePage;
}

export default useActivePage;