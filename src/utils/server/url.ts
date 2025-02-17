import urlJoin from "url-join";

const siteUrl = "http://aiqueue.ir";

export const getCanonicalUrl = (...paths: string[]) => urlJoin(siteUrl, ...paths);
