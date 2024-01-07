import React from 'react';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { useMutation } from 'react-query';
import * as yup from 'yup';

import { validateMultiLangField } from '@/helpers/validations';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

type IFormValues = Types.IForm.Values;

type IChildren = FormikProps<IFormValues>;

interface IProps {
  id: string;
  values: Types.IForm.Values;
  onSuccess?: (data: Types.IEntity.Data) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  children(props: IChildren): JSX.Element;
}

const Update: React.FC<IProps> = ({ id, values, onSuccess, onError, onSettled, children }) => {
  const mutation = useMutation<Types.IEntity.Data, string, IFormValues, any>(
    async values => {
      const { data } = await Api.Update({ id, values });

      return Mappers.getData(data && data.data);
    },
    {
      onSuccess,
      onError,
      onSettled,
    },
  );

  const validationSchema = yup.object().shape({
    title: validateMultiLangField,
    description: validateMultiLangField,
  });

  const handleSubmit = (values: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
    mutation.mutate(values, {
      onSettled: () => setSubmitting(false),
    });
  };

  return (
    <Formik<IFormValues>
      onSubmit={handleSubmit}
      initialValues={{
        title: values.title,
        description: values.description,
        status: values.status,
      }}
      enableReinitialize
      {...{ validationSchema }}
    >
      {(props: FormikProps<IFormValues>) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Update;
