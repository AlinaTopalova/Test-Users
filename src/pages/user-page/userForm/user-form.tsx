import './user-form.scss';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { UserType } from 'types/types';
import * as Yup from 'yup';
import "yup-phone";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  street: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
  phone: Yup.string().phone('Invalid phone').required('Required'),
  website: Yup.string()
  .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
  )
  .required('Please enter website'),
});


type UserFormProps = {
  currentUser: UserType,
}

export default function UserForm(props: UserFormProps): JSX.Element {
  const { currentUser } = props;

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleEditButtonClick = () => {
    setIsDisabled(false);
  }

  return (
    <div className="form__wrap">
      <div className="form__header-wrap">
        <h1 className="form__header-title">Профиль пользователя</h1>
        <button
          onClick={handleEditButtonClick}
          className="form__edit-button"
        >
          Редактировать
        </button>
      </div>
      <Formik
        initialValues={{
          name: `${currentUser.name}`,
          userName: `${currentUser.username}`,
          email: `${currentUser.email}`,
          street: `${currentUser.address.street}`,
          city: `${currentUser.address.city}`,
          zipCode: `${currentUser.address.zipcode}`,
          phone: `${currentUser.phone}`,
          website: `${currentUser.website}`,
          comment: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          setIsDisabled(true);
          console.log(JSON.stringify(values, null, 2));
        }}
      >
      {({ errors, touched }) => (
      <Form className='form'>
        <label className='form__label' htmlFor='name'>Name</label>
        {errors.name && touched.name
          ? (<span className='form__error'>{errors.name}</span>)
          : null}
        <Field
          className={`form__input ${errors.name && touched.name ? 'input__invalid' : ''}`}
          id='name'
          name='name'
          disabled={isDisabled}
        />

        <label className='form__label' htmlFor='userName'>User Name</label>
        {errors.userName && touched.userName
          ? (<span className='form__error'>{errors.userName}</span>)
          : null}
        <Field
          className={`form__input ${errors.userName && touched.userName ? 'input__invalid' : ''}`}
          id='userName'
          name='userName'
          disabled={isDisabled}
        />

        <label className='form__label' htmlFor='email'>E-mail</label>
        {errors.email && touched.email
          ? (<span className='form__error'>{errors.email}</span>)
          : null}
        <Field
          className={`form__input ${errors.email && touched.email ? 'input__invalid' : ''}`}
          id='email'
          name='email'
          type='email'
          disabled={isDisabled}
        />

        <label className='form__label' htmlFor='street'>Street</label>
        {errors.street && touched.street
          ? (<span className='form__error'>{errors.street}</span>)
          : null}
        <Field
          className={`form__input ${errors.street && touched.street ? 'input__invalid' : ''}`}
          id='street'
          name='street'
          disabled={isDisabled}
        />

        <label className='form__label' htmlFor='city'>City</label>
        {errors.city && touched.city
          ? (<span className='form__error'>{errors.city}</span>)
          : null}
        <Field
          className={`form__input ${errors.city && touched.city ? 'input__invalid' : ''}`}
          id='city'
          name='city'
          disabled={isDisabled}
        />

        <label className='form__label' htmlFor='zipCode'>Zip code</label>
        {errors.zipCode && touched.zipCode
          ? (<span className='form__error'>{errors.zipCode}</span>)
          : null}
        <Field
          className={`form__input ${errors.zipCode && touched.zipCode ? 'input__invalid' : ''}`}
          id='zipCode'
          name='zipCode'
          disabled={isDisabled}
        />

        <label className='form__label' htmlFor='phone'>Phone</label>
        {errors.phone && touched.phone
          ? (<span className='form__error'>{errors.phone}</span>)
          : null}
        <Field
          className={`form__input ${errors.phone && touched.phone ? 'input__invalid' : ''}`}
          id='phone'
          name='phone'
          disabled={isDisabled}
        />

        <label className='form__label' htmlFor='website'>Website</label>
        {errors.website && touched.website
          ? (<span className='form__error'>{errors.website}</span>)
          : null}
        <Field
          className={`form__input ${errors.website && touched.website ? 'input__invalid' : ''}`}
          id='website'
          name='website'
          disabled={isDisabled}
        />

        <label className='form__label' htmlFor='comment'>Comment</label>
        <Field
          className='form__input form__comment'
          id='comment'
          name='comment'
          component='textarea'
          rows='5'
          disabled={isDisabled}
        />
        <button
          className='form__submit-button'
          type="submit"
        >
          Отправить
        </button>
      </Form>
      )}
      </Formik>
    </div>
  )
}