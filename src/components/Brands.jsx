import amazonLogo from '@/assets/brands/amazon.png';
import hmLogo from '@/assets/brands/h&m.png';
import lacosteLogo from '@/assets/brands/lacoste.png';
import levisLogo from '@/assets/brands/levis.png';
import obeyLogo from '@/assets/brands/obey.png';
import shopifyLogo from '@/assets/brands/shopify.png';

const Brands = () => {
  return (
    <section className='my-10 flex w-full flex-wrap items-center justify-center gap-12 bg-[#EBD96B] px-0.5 py-8'>
      <img
        className='h-10 w-24 hover:scale-110 cursor-pointer mix-blend-multiply'
        src={hmLogo}
        alt='H&M Logo'
      />
      <img
        className='h-10 w-24 hover:scale-110 cursor-pointer mix-blend-multiply'
        src={obeyLogo}
        alt='Obey Logo'
      />
      <img
        className='h-10 w-24 hover:scale-110 cursor-pointer mix-blend-multiply'
        src={shopifyLogo}
        alt='Shopify Logo'
      />
      <img
        className='h-10 w-24 hover:scale-110 cursor-pointer mix-blend-multiply'
        src={lacosteLogo}
        alt='Lacoste Logo'
      />
      <img
        className='h-10 w-24 hover:scale-110 cursor-pointer mix-blend-multiply'
        src={levisLogo}
        alt='Levis Logo'
      />
      <img
        className='h-10 w-24 hover:scale-110 cursor-pointer mix-blend-multiply'
        src={amazonLogo}
        alt='Amazon Logo'
      />
    </section>
  );
};

export default Brands;
