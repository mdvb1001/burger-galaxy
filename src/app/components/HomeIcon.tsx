'use client';

import { useRouter } from 'next/navigation';

const HomeIcon = () => {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/`);
  };
  return <a className="font-bold text-inherit" onClick={handleClick}>Home</a>;
};

export default HomeIcon;
