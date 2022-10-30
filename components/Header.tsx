import Link from 'next/link';
import Image from 'next/image';
import SearchInput from './SearchInput';
import { SetStateAction } from 'react';

type Props = {
  setQuery?: React.Dispatch<SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => {
  return (
    <div className='sticky flex top-0 z-40 w-full h-24 bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500'>
      <div className='flex justify-between items-center w-full h-full max-w-7xl m-auto px-4'>
        <Link href='/'>
          <div className='flex items-center cursor-pointer'>
            <div className='invisible md:visible'>
              <Image
                width='150'
                height='50'
                src='/rmdb-logo.svg'
                alt='rmdb-logo'
              />
            </div>
            <div className='absolute md:invisible pt-2'>
              <Image
                width='50'
                height='50'
                src='/rmdb-logo-small.svg'
                alt='/rmdb-logo-small'
              />
            </div>
          </div>
        </Link>
        {setQuery && (
          <div className='relative flex items-center'>
            <SearchInput setQuery={setQuery} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
