'use server'

import { join } from "node:path";
import { DEFAULT_LANG } from "@/const/locale";
import { Locales, normalizeLocale, NS } from "@/locales/resources";
import { existsSync, readFileSync } from "node:fs";
import { get } from "lodash-es";

export const getLocale = async (hl?: string): Promise<Locales> => {
    if (hl) return normalizeLocale(hl) as Locales;

    return DEFAULT_LANG as Locales;
}

export const translation = async (ns: NS = 'common', hl?: string) => {
    let i18s = {};

    const lng = await getLocale(hl);

    try {
        let filePath = join(process.cwd(), `locales/${normalizeLocale(lng)}/${ns}.json`);
        const isExist = existsSync(filePath);

        if (!isExist) {
            filePath = join(process.cwd(), `locales/${normalizeLocale(DEFAULT_LANG)}/${ns}.json`)
        }

        const file = readFileSync(filePath, 'utf8');
        i18s = JSON.parse(file);
    } catch (e) {
        console.error("Error while reading translation file", e);
    }

    return {
        locale: lng,
        t: (key: string, options: { [key: string]: string } = {}) => {
            if (!i18s) return key;
            let content = get(i18s, key);
            if (!content) return key;
            if (options) {
                Object.entries(options).forEach(([key, value]) => {
                    content = content.replace(`{{${key}}}`, value);
                })
            }
            return content;
        }
    }
}