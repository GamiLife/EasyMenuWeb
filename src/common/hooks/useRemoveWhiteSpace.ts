interface IUseRemoveWhiteSpace {
  text: string;
}

export const useRemoveWhiteSpace = ({ text }: IUseRemoveWhiteSpace) => {
  do {
    text = text.replace(' ', '-');
  } while (text.includes(' '));
  const hyphenatedText = (text.charAt(0) + text.slice(1)).toLowerCase();

  return {
    hyphenatedText,
  };
};
