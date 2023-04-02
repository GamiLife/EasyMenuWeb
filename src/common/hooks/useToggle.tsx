import { useState } from 'react';
interface IUseToggle {
  defaultVisible?: boolean;
}

export const useToggle = ({ defaultVisible = false }: IUseToggle) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleToggle = (optionalVisible: boolean | null = null) =>
    setIsVisible(optionalVisible ?? !isVisible);

  return {
    isVisible,
    handleToggle,
  };
};
