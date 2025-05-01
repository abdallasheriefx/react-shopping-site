import { MoveRight } from 'lucide-react';

const Card = ({ img }) => {
  return (
    <div className='flex flex-col gap-8'>
      <img className='aspect-[11/16] w-100 rounded-md' src={img} />
      <p className='flex items-center justify-between gap-4'>
        <div className='flex flex-col gap-4'>
          <p>Hoodies & Sweetshirt</p>
          <p className='text-gray-300'>Explore Now!</p>
        </div>
        <MoveRight className='text-gray-300' size={24  } />
      </p>
    </div>
  );
};

export default Card;
