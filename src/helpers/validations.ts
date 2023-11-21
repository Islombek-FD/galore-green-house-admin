import * as yup from 'yup';

export const validateMultiLangField = yup.object().shape({
  oz: yup.string().required(),
  uz: yup.string().required(),
  ar: yup.string().required(),
  ru: yup.string().required(),
  en: yup.string().required(),
});
