import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('This field is required.').min(3, 'El nombre debe tener al menos 3 caracteres'),
  lastName: yup.string().required('This field is required.'),
  companyName: yup.string().required('This field is required.'),
  contactNumber: yup.string().matches(/^\d+$/, 'Contact number must be a number.').required('This field is required.'),
  email: yup.string().email('Invalid email address.').required('This field is required.'),
  website: yup.string().url('Invalid URL.').optional(),
  references: yup.string().notRequired(),
});

export default schema;