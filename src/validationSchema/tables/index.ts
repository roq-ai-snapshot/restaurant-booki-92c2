import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  number: yup.number().integer().required(),
  capacity: yup.number().integer().required(),
  status: yup.string().required(),
  type: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
});
