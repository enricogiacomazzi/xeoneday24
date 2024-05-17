import clsx from "clsx";
import { useFormik } from 'formik';

export default function App() {

  const emailRgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;

  const validateFn = ({username, email}) => {
    const err = {}
    if(username.length === 0) {
      err.username = 'username is required';
    }

    if(!email) {
      err.email = 'email is required';
    } else {
      if(!emailRgx.test(email)) {
        err.email = 'invalid email address';
      }
    }
    return err;
  };

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: { username: '', email: ''},
    validate: validateFn,
    onSubmit: (data) => console.log(data)
  });




  const inputStyle = (ctrl) => { 
    const someTouched = Object.values(touched).some(x => x);
    var valid = undefined;
    if(someTouched) {
      valid = !!errors[ctrl] ? 'is-invalid' : 'is-valid' 
    }

    return clsx('form-control', valid);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        name="username"
        type="text" 
        className={inputStyle('username')} 
        placeholder="username"/>

      <input 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        type="text" 
        className={inputStyle('email')} 
        placeholder="email"/>

      <input type="submit" className="form-control" value="Send"/>

    </form>
  )

}





