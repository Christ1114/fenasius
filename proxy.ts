import { intlayerMiddleware } from "next-intlayer/middleware";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
    
    return intlayerMiddleware(request, {
        // @ts-ignore - intlayer accepte ces options
        locales: ['en', 'fr', 'es', 'ja', 'ko', 'ru', 'hi', 'ar', 'zh-CN', 'zh-TW'],
        defaultLocale: 'fr',
        localePrefix: 'as-needed',
    });
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};