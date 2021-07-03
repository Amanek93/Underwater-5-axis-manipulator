const parseCode = (code: string): { language: string; country: string } => {
    const iso6391code = code.replace('_', '-');
    // eslint-disable-next-line prefer-const
    let [language, country = ''] = iso6391code.split('-');
    country = country.toUpperCase();

    return { language, country };
};

/**
 * Get language code from ISO6391 standard code
 * @param {string} code  E.g.: "pl_PL", "en", "en_GB", "pt", "pt_BR"...
 * @returns {string} language  E.g. "en"
 */
export const getLanguageCode = (code: string): string => parseCode(code).language;

/**
 * Get country code from ISO6391 standard code
 * @param {string} code  E.g.: "pl_PL", "en", "en_GB", "pt", "pt_BR"...
 * @returns {string} country  E.g. "GB"
 */
export const getCountryCode = (code: string): string => parseCode(code).country;

export const createCode = (language: string, country: string, separator = '-'): string =>
    [language, country].filter(Boolean).join(separator);

export { parseCode };
