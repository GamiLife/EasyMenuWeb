import { useTranslation } from 'react-i18next';
import { i18n } from 'i18next';

interface IUseCustomTranslationReturn {
  t: (
    text: string | string[],
    options?: Record<string, unknown>
  ) => string | undefined;
  i18n: i18n;
}

export const useCustomTranslation = (): IUseCustomTranslationReturn => {
  const { i18n, t } = useTranslation();

  return {
    i18n,
    t,
  };
};
