import I18n from 'i18n-js';
import { getCurrencies, getLocales } from 'react-native-localize';

import * as ISO6391 from './utils/iso6391';
import { pluralizer } from './utils/pluralizer';

import en from './languages/en.json';
import pl from './languages/pl.json';

const userLocales = getLocales();

/**
 * Credit for this pretty piece of TS goes to:
 * @url https://twitter.com/diegohaz/status/1309489079378219009
 */
type PathImpl<T, Key extends keyof T> = Key extends string
    ? T[Key] extends Record<string, any>
        ?
              | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof Array<any>>> & string}`
              | `${Key}.${Exclude<keyof T[Key], keyof Array<any>> & string}`
        : never
    : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;

export type DefaultTranslationDictionary = typeof pl;

const systemLanguage = userLocales[0].languageTag;

I18n.defaultLocale = 'pl';
I18n.fallbacks = true;
I18n.translations = { en, pl };
I18n.locale = systemLanguage;

I18n.pluralization['en'] = pluralizer;
I18n.pluralization['pl'] = pluralizer;

/**
 * While an internal I18n's .currentLocale() method returns the unchanged value set to I18n.locale,
 * this method returns the key of existing translation consumed by I18n.t().
 *
 * E.g. If I18n.currentLocale() === "es-ES" then "es" is returned here
 */
const currentLocaleApplied = () => {
    const availableTranslations = Object.keys(I18n.translations);

    if (availableTranslations.includes(I18n.currentLocale())) {
        return I18n.currentLocale();
    } else {
        const lang = ISO6391.getLanguageCode(I18n.currentLocale());
        if (availableTranslations.includes(lang)) {
            return lang;
        } else {
            return 'en';
        }
    }
};

const setLocale = (locale?: string | null) => {
    I18n.locale = locale || systemLanguage;
};

const getUserCurrencies = () => {
    return getCurrencies();
};

/** This list of overloads is just to skip linting i18n.t(key, { scope: ... }) calls
 * which we've decided to abandon in behalf of i18n.t('full.path');
 **/
function t<P extends Path<DefaultTranslationDictionary>>(path: P): ReturnType<typeof I18n.t>;
// @ts-ignore
function t(path: Parameters<typeof I18n.t>[0], options: Record<string, unknown>);
function t(path: Parameters<typeof I18n.t>[0], options?: Record<string, unknown>) {
    return options ? I18n.t(path, options) : I18n.t(path);
}

export default {
    ...I18n,
    setLocale,
    currentLocaleApplied,
    getUserCurrencies,
    t,
};
