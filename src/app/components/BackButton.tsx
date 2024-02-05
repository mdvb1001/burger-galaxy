"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { LeftArrowIcon } from "@/app/icons/LeftArrowIcon";
import { Button } from "@nextui-org/button";

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  // Could have added more accessibility features like aria-label
  return (
    <Button
      variant="light"
      isIconOnly
      className="font-medium py-1 my-3 w-16"
      onClick={goBack}
      aria-label="Go back to previous page"
    >
      <LeftArrowIcon className="h-4" />
      <span>Back</span>
    </Button>
  );
};

export default BackButton;
