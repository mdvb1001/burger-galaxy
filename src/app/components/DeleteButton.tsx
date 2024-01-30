"use client";

import React from "react";
import { useCartContext } from "../Contexts/CartContext";

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { removeFromCartCompletely } = useCartContext();
  return <button onClick={() => removeFromCartCompletely(id)}>Delete</button>;
};

export default DeleteButton;