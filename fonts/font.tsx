import {Inter,Lusitana, Albert_Sans} from 'next/font/google'
import { Bebas_Neue,Montserrat,Playfair_Display,Parisienne,Orbitron } from "next/font/google";



export const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
  });
export const inter=Inter({
    subsets:["latin"]
})
export const lusitana=Lusitana({
    weight:["400","700"],
    subsets:["latin"]
    
})

export const albert=Albert_Sans({
    subsets:["latin"],
    weight:["600", "700"]
})
export const bebas_neue=Bebas_Neue({
    subsets:["latin"],
    weight:["400"]
});
export const montserrat=Montserrat({
    subsets:["latin"],
    weight:["400","700"]
});
export const playdisplay=Playfair_Display({
    subsets:["latin"],
    weight:["400","700"]
});
export const parisienne=Parisienne({
    weight:["400"],
    subsets:["latin"]

})