import Button from '@/utils/Button';

const Hero = () => {
  return (
    <section
      className={`relative mx-6 flex flex-col gap-6 rounded-md bg-[#F4F6F5] px-4 py-8 md:mx-12 md:px-12`}>
      <div className="absolute inset-0 bg-[url('@/assets/bg-fur.png')] bg-contain bg-position-[10rem] bg-no-repeat sm:bg-position-[right_10%_center]"></div>
      <h1 className='flex flex-col gap-2 text-2xl font-black md:text-4xl'>
        <span className='relative z-10 bg-transparent'>
          LET’S
          <span className='-rotate-0.5 absolute inset-0 -left-2 -z-10 h-8 w-35 -skew-1 bg-white md:-top-1 md:h-12 md:w-50'></span>
        </span>
        <span>EXPLORE</span>
        <span className='relative z-10 bg-transparent'>
          UNIQUE
          <span className='absolute inset-0 -left-2 -z-10 h-8 w-35 -rotate-1 -skew-1 bg-[#EBD96B] md:-top-1 md:h-12 md:w-50'></span>
        </span>
        <span>CLOTHES.</span>
      </h1>
      <span className='w-[20ch] text-sm sm:w-[25ch] sm:text-base md:w-[30ch] lg:w-auto'>
        Live for Influential and Innovative fashion!
      </span>
      <Button customStyle='capitalize self-start'>shop now</Button>
    </section>
  );
};

export default Hero;
