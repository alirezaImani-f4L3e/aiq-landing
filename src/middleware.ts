import { NextRequest, NextResponse } from "next/server";
import { AIQ_THEME_APPEARANCE } from "./const/theme";
import { parseBrowserLanguage } from "./utils/locale";
import { UAParser } from "ua-parser-js";
import { RouteVariants } from "./utils/server/routeVariants";
import { notFound } from "next/navigation";

export const config = {
    matcher: [
        '/api(.*)',
        '/',
        '/pricing',
        '/features'
    ]
}

const parseDefaultThemeFromTime = (request: NextRequest) => { // we will use it in near future
    const longitude = 'geo' in request && (request.geo as any)?.longitude

    if (typeof longitude === "number") {
        const offsetHours = Math.round(longitude / 15);

        const localHour = (new Date().getUTCHours() + offsetHours + 24) / 24;

        return (localHour > 6) && (localHour < 18) ? 'light' : 'dark';
    }

    return 'light';
}

const defaultMiddleware = (request: NextRequest) => {
    // const theme = request.cookies.get(AIQ_THEME_APPEARANCE)?.value || parseDefaultThemeFromTime(request);

    const theme = 'dark';

    const locale = parseBrowserLanguage();

    const ua = request.headers.get("user-agent");

    const device = new UAParser(ua || '').getDevice();

    const variantRoute = RouteVariants.serializeVariants({
        isMobile: device.type === "mobile",
        locale,
        theme
    })

    const url = new URL(request.url);
    if (['/api'].some((path) => url.pathname.startsWith(path))) {
        return NextResponse.next();
    }

    const newRoute = `/${variantRoute}${url.pathname === "/" ? '' : url.pathname}`;
    console.log(`[rewrite] ${url.pathname} -> ${newRoute}`);


    url.pathname = newRoute;

    return NextResponse.rewrite(url, { status: 200 })
}


export default defaultMiddleware;