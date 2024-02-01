"use client";

import { useRouter } from "next/navigation";
import { SparkleIcon } from "@/app/icons/SparkleIcon";

const HomeLink = () => {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/`);
  };
  return (
    <a
      className="font-bold text-inherit flex flex-row cursor-pointer"
      onClick={handleClick}
      role="link"
      tabIndex={0}
      aria-label="go to home page"
    >
      <span className="mr-2">Burger Galaxy</span>
      <SparkleIcon />
    </a>
  );
};

export default HomeLink;
