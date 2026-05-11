import {Locales, type IntlayerConfig} from "intlayer";
const config:IntlayerConfig = {
    internationalization: {
        locales : [
            Locales.ENGLISH,
            Locales.FRENCH,
            Locales.SPANISH,
            Locales.JAPANESE,
            Locales.KOREAN,
            Locales.RUSSIAN,
            Locales.HINDI,
            Locales.ARABIC,
            Locales.CHINESE_SIMPLIFIED,
            Locales.CHINESE_TRADITIONAL,
        ],
        defaultLocale:Locales.ENGLISH,
    }
}
export default config;
