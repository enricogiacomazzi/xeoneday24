import clsx from "clsx";


import { useForm } from "react-hook-form";




export default function App() {


  const { 
    register, 
    handleSubmit, 
    trigger, 
    watch, 
    formState: { 
      errors, 
      isDirty, 
      isValid 
    } 
  } = useForm({mode: "all", criteriaMode: "all"});


  const emailRgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;

  watch(() => trigger());



  const submitHandler = (data) => {
    console.log(data);
  }

  const inputStyle = (ctrl) => { 
    var valid = undefined;
    if(isDirty) {
      valid = !!errors[ctrl] ? 'is-invalid' : 'is-valid' 
    }

    return clsx('form-control', valid);
  }



  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input 
        {...register('username', {required: true})}
        type="text" 
        className={inputStyle('username')} 
        placeholder="username"/>

      <input 
        {...register('email', {required: true, pattern: emailRgx})}
        type="text" 
        className={inputStyle('email')} 
        placeholder="email"/>

      <input type="submit" disabled={!isValid} className="form-control" value="Send"/>
    </form>
  )



}





