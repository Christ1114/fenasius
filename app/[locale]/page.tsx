import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import FirstModuleHome from "@/components/home/first.module";
import SecondModuleHome from "@/components/home/second.module.home";
import NavbarPage from "@/components/shared/navbar/navbar";
import ThirdModuleHome from "@/components/home/third.module.home";
import Fourhome from "@/components/home/four.module.home";
import FooterPage from "@/components/shared/footer";
const Home: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  
  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <div className="h-full w-full  bg-linear-to-b from-black via-pink-900 to-black text-white overflow-x-hidden">
          <header className="flex  mb-8 px-14 w-full">
            <NavbarPage />
          </header>
          <main className="relative flex flex-col items-center w-full h-full">
            <FirstModuleHome/>
            <SecondModuleHome/>
            <ThirdModuleHome/>
            <Fourhome/>
            <section className="mt-12 w-full">
            </section>
          </main>
          <footer className="w-full h-full">
            <FooterPage/>
          </footer>
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default Home;