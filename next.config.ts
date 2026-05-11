import type { NextConfig } from "next";
import {withIntlayer} from "next-intlayer/server";

const nextConfig: NextConfig = {
  experimental:{
    turbopackFileSystemCacheForDev:true,
  }
};

export default withIntlayer(nextConfig);
