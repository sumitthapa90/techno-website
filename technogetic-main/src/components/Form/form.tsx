import { useState } from 'react';
import styles from './form.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
};

const initialFormValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: ''
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  message: Yup.string().required('Message is required')
});

export default function SendMailForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // TODO: Implement send mail functionality
      console.log('Form submitted with values:', values);
      setFormValues(initialFormValues);
    }
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.form}>
        <div className={styles.feilds}>
          <div className={styles.validation}>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name && (
              <div className={styles.error}>{formik.errors.name}</div>
            )}
          </div>

          <div className={styles.validation}>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className={styles.error}>{formik.errors.email}</div>
            )}
          </div>
        </div>

        <div className={styles.feilds}>
          <div className={styles.validation}>
            <input
              className={styles.input}
              type="text"
              id="subject"
              name="subject"
              value={formik.values.subject}
              onChange={handleInputChange}
              placeholder="Subject"
            />
            {formik.touched.subject && formik.errors.subject && (
              <div className={styles.error}>{formik.errors.subject}</div>
            )}
          </div>
          <div className={styles.validation}><input
            className={styles.input}
            type="tel"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className={styles.error}>{formik.errors.phone}</div>
          )}
          </div>
        </div>
        <div className={styles.feild}>
        <div className={styles.validation}>
          <input
            className={styles.message}
            id="message"
            name="message"
            value={formik.values.message}
            onChange={handleInputChange}
            placeholder="Type your message here..."
          />
          {formik.touched.message && formik.errors.message && (
            <div className={styles.error}>{formik.errors.message}</div>
          )}
          </div>
        </div>
      </div>
      <button type="submit" className={styles.light_button}>
        Send mail
      </button>
    </form>
  );
}
