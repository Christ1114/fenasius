import {intlayerMiddleware} from "next-intlayer/middleware"
import type {NextRequest} from "next/server"

export default function proxy(request:NextRequest){
    return intlayerMiddleware(request)
}
export const config={
    matcher:["/((?!api|_next|.*\\..*).*)"],
}