import React from 'react';
import { useFormikContext } from 'formik';
import get from 'lodash/get';

import LanguageSwitcherBase from '@/components/LanguageSwitcher';

interface IProps {
  active: string;
  onChange: (value: string) => void;
  fields: string[];
  languages?: { title: string; value: string }[];
}

const defaultLanguages = [
  { title: 'O’zbekcha', value: 'oz' },
  { title: 'Ўзбекча', value: 'uz' },
  { title: 'Arab', value: 'ar' },
  { title: 'Ruscha', value: 'ru' },
  { title: 'English', value: 'en' },
];

const LanguageSwitcher: React.FC<IProps> = ({
  fields,
  active,
  onChange,
  languages = defaultLanguages,
}) => {
  const { errors, touched } = useFormikContext();

  const errorsCountByLanguage = languages.reduce((prev, language) => {
    const count = fields.reduce(
      (prev, field) =>
        prev +
        Number(
          !!get(errors, `${field}[${language.value}]`) &&
            !!get(touched, `${field}[${language.value}]`),
        ),
      0,
    );

    return {
      ...prev,
      [language.value]: count,
    };
  }, {});

  return (
    <LanguageSwitcherBase
      {...{ active, onChange }}
      options={languages.map(language => ({
        ...language,
        badge: errorsCountByLanguage[language.value],
      }))}
    />
  );
};

export default LanguageSwitcher;
