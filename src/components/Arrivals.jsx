import Title from '@/utils/Title';
import Card from '@/utils/Card';

import hoodie from '@/assets/hoodie.png';
import parka from '@/assets/parka.png';
import tshirt from '@/assets/t-shirt.png';

const Arrivals = () => {
  return (
    <section className='mx-12 my-10 flex flex-col items-center gap-12'>
      <Title customStyle={'self-start md:self-center'}>new arrivals</Title>
      <div className='flex flex-col items-center gap-10 sm:flex-row'>
        <Card img={hoodie} />
        <Card img={parka} />
        <Card img={tshirt} />
      </div>
    </section>
  );
};

export default Arrivals;
