import { DEFAULT_LANG } from "@/const/locale"

import resources from "./default"

export const locales = [
    'fa-IR'
]

export type DefaultResources = typeof resources;
export type NS = keyof DefaultResources;
export type Locales = (typeof locales)[number];

export const normalizeLocale = (locale?: string) => {
    if (!locale) return DEFAULT_LANG;

    if (locale.startsWith('ar')) return 'ar';

    return DEFAULT_LANG;
}