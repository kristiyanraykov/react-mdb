import Image from 'next/image';
import React, { SetStateAction, useState } from 'react';

type Props = {
  setQuery: React.Dispatch<SetStateAction<string>>;
};

const TIME = 700 //ms

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = useState('');
  const timer = React.useRef<NodeJS.Timeout>()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('re-activating')
    const value = e.currentTarget.value;

    clearTimeout(timer.current)

    setText(value);

    timer.current = setTimeout(() => {
        setQuery(value)
    }, TIME)
  };

  return (
    <>
      <input
        className='h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200'
        type='text'
        placeholder='Search Movie'
        value={text}
        onChange={handleInput}
      />
      <div className='absolute right-4'>
        <Image width='30' height='32' src='/tmdb-logo.svg' alt='tmdb-logo'  />
      </div>
    </>
  );
};
export default SearchInput;
