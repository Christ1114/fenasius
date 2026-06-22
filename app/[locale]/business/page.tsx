import FirstcomponentPage from '@/components/business/first.component';
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
        </main>
    </div>
  )
}

export default BusinessPage;
