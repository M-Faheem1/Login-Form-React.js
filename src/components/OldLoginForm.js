// import React from 'react'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'

// const initialValues = {
//   name: '',
//   email: '',
//   address: '',
// }

// const onSubmit = values => {
//   console.log('Form data', values) 
// }

// const validate = values => {
//   let errors = {}
//   if(!values.name){
//     errors.name = 'Name Required'
//   }

//   if(!values.email){
//     errors.email = 'Email Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email= 'Please enter a valid email address'
//   }

//   if(!values.address){
//     errors.address = 'Address Required'
//   }
//   return errors
// }
// const validationSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email format').required('Email is required'),
//   address: Yup.string().required('Address is required'),
// })

// function OldLoginForm() {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     // validate,
//     validationSchema,
//   })
//   console.log('Form Errors', formik.errors);
//   return (
//     <div className='login-form'>
//       <h1>
//         Login Form
//       </h1>
//       <form onSubmit={formik.handleSubmit}>
//         <div className='form-fields form-control'>
//           <label htmlFor='name'>Name</label>
//           <div className='input-wrapper'>
//             <input 
//               type='text' 
//               id='name' 
//               name='name' 
//               placeholder='Please enter your name'
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.name}
//             />
//           </div>
//           {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
//         </div>
//         <div className='form-fields form-control'>
//           <label htmlFor='email'>Email</label>
//           <div className='input-wrapper'>
//             <input
//               type='text' 
//               id='email' 
//               name='email' 
//               placeholder='Please enter your email' 
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               value={formik.values.email}
//             />
//           </div>
//           {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
//         </div>
//         <div className='form-fields form-control'>
//           <label htmlFor='address'>Address</label>
//           <div className='input-wrapper'>
//             <input 
//               type='address' 
//               id='address' 
//               name='address' 
//               placeholder='Please enter your address' 
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               value={formik.values.address}
//             />
//           </div>
//           {formik.touched.address && formik.errors.address ? <div className='error'>{formik.errors.address}</div> : null}
//         </div>
//         <button type='submit' className='submit-btn'> Submit </button>
//         <a href='#' color='red'> Contacts </a>
//       </form>
//     </div>
//   )
// }

// export default OldLoginForm
