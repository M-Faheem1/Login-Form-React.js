import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: '',
			mobileNumber: '',
			gender: '',
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required('First name is required').max(20, 'First name must be 20 characters or less').matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
			lastName: Yup.string().required('Last name is required').max(20, 'Last name must be 20 characters or less') .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
			email: Yup.string().email('Invalid email address').required('Email is required'),
			mobileNumber: Yup.number()
				.required('Mobile number is required')
				.positive('Mobile number must be positive')
				.max(9999999999, 'Mobile Number cannot exceed 11 digits')
        .min(1000000000, 'Mobile Number must be 11 digits')
				.integer('Mobile number must be an integer')
				.typeError('Invalid mobile number')
				.test('is-decimal', 'Mobile number cannot be a decimal', (value) => {
					return Number.isInteger(value);
				}),
			gender: Yup.string().required('Gender is required'),
		}),
		onSubmit: (values, {resetForm}) => {
			console.log(values);
      resetForm();
		},
		validateOnChange: true,
		validateOnBlur: true,
	});
  const isSubmitDisabled = !formik.dirty || formik.isSubmitting || !!formik.errors.name || !!formik.errors.lastName || !!formik.errors.email || !!formik.errors.mobileNumber || !!formik.errors.gender;

	return (
		<div className='login-form'>
			<h1>Login Form</h1>
			<form onSubmit={formik.handleSubmit}>
				<div className='form-fields'>
					<label htmlFor='name'>First Name</label>
					<div className='input-wrapper'>
						<input
							type='text'
							id='name'
							name='name'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
              className={ formik.touched.name && formik.errors.name ? 'field-error': '' } 						
						/>
					</div>
					{formik.touched.name && formik.errors.name && <div className='error'>{formik.errors.name}</div>}
				</div>
				<div className='form-fields'>
					<label htmlFor='lastName'>Last Name</label>
					<div className='input-wrapper'>
						<input
							type='text'
							id='lastName'
							name='lastName'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.lastName}
              className={ formik.touched.lastName && formik.errors.lastName ? 'field-error': '' } 						
						/>
					</div>
					{formik.touched.lastName && formik.errors.lastName && <div className='error'>{formik.errors.lastName}</div>}
				</div>
				<div className='form-fields'>
					<label htmlFor='email'>Email</label>
					<div className='input-wrapper'>
						<input
							type='email'
							id='email'
							name='email'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
              className={ formik.touched.email && formik.errors.email ? 'field-error': '' } 						
						/>
					</div>
					{formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}
				</div>
				<div className='form-fields'>
					<label htmlFor='mobileNumber'>Mobile Number</label>
					<div className='input-wrapper'>
						<input
							type='number'
							id='mobileNumber'
							name='mobileNumber'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.mobileNumber}
              className={ formik.touched.mobileNumber && formik.errors.mobileNumber ? 'field-error': '' } 						
						/>
					</div>
					{formik.touched.mobileNumber && formik.errors.mobileNumber && (
						<div className='error'>{formik.errors.mobileNumber}</div>
					)}
				</div>
				<div className='form-fields radio-field'>
					<label>Gender</label>
            <div className='radio-buttons'>
              <div className={`option ${formik.touched.gender && formik.errors.gender ? 'field-error' : ''}`}>
                <label>
                  <input
                    type='radio'
                    name='gender'
                    value='male'
                    checked={formik.values.gender === 'male'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.touched.gender && formik.errors.gender ? 'field-error': ''} 						
                    />
                  Male
                </label>
              </div>
              <div className={`option ${formik.touched.gender && formik.errors.gender ? 'field-error' : ''}`}>
                <label>
                  <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={formik.values.gender === 'female'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  Female
                </label>
              </div>
            </div>
					{formik.touched.gender && formik.errors.gender && <div className='error'>{formik.errors.gender}</div>}
				</div>
				<button className='submit-btn' type='submit' disabled={isSubmitDisabled}>
					Submit
        </button>
			</form> 
		</div>
	);
};

export default LoginForm;
