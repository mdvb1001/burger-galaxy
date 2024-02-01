"use client";

import { useRouter } from "next/navigation";
import { SparkleIcon } from "@/app/icons/SparkleIcon";
import Sparkles from "react-sparkle";

const HomeLink = () => {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/`);
  };
  return (
    <a
      className="font-bold text-inherit flex flex-row cursor-pointer relative"
      onClick={handleClick}
      role="link"
      tabIndex={0}
      aria-label="go to home page"
    >
      <span className="mr-2">Burger Galaxy
      <Sparkles
        color="teal"
        fadeOutSpeed={10}
        newSparkleOnFadeOut={false}
        flicker
        flickerSpeed="slow"
        count={80}
        minSize={5}
        maxSize={8}
        overflowPx={25}
      /></span>
      <SparkleIcon />
    </a>
  );
};

export default HomeLink;
