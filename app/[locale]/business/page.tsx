import FirstcomponentPage from '@/components/business/first.component';
import Fivecomponent from '@/components/business/five.component';
import Fourcomponent from '@/components/business/four.component';
import Lastcomponent from '@/components/business/last.component';
import Secondcomponent from '@/components/business/second.component';
import Thirdcomponent from '@/components/business/third.component';
import FooterPage from '@/components/shared/footer';
import NavbarPage from '@/components/shared/navbar/navbar';
import React from 'react';



const BusinessPage = () => {
  return (
    <div className='h-full w-full  bg-linear-to-b from-black via-pink-900 to-black text-white overflow-x-hidden'>
       <header className="flex  mb-8 px-14 w-full">
            <NavbarPage />
        </header>
        <main className="relative flex flex-col items-center w-full h-full">
          <FirstcomponentPage/>
          <Secondcomponent/>
          <Thirdcomponent/>
          <Fourcomponent/>
          <Fivecomponent/>
          <Lastcomponent />
        </main>
        <footer className="w-full h-full">
            <FooterPage/>
          </footer>
    </div>
  )
}

export default BusinessPage;
