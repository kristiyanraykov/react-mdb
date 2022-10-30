import Image from 'next/image';

type Props = {
  imgUrl: string;
};

const Thumb = ({ imgUrl }: Props) => {
  return (
    <Image
      placeholder='blur'
      blurDataURL='/placeholder.jpg'
      className='rounded-lg'
      fill
      sizes='max-width 200'
      object-fit='cover'
      src={imgUrl}
      alt='thumb'
    />
  );
};
export default Thumb;
