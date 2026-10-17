import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
    //API Call simulation
    console.log("Submitting the form", data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input className={errors.firstname ? 'input-error' : ""} 
        {...register('firstname', 
        { required: true, 
        minLength: {value:3, message:"Min Length is atleast 3"}, 
        maxLength: {value:20, message:"Max length is atleast 20"} })} />
        {errors.firstname && <p className="error-msg">{errors.firstname.message}</p>}
      </div>
      <br/>
      <div>
        <label>Last Name: </label>
        <input className={errors.lastname ? 'input-error' : ""} 
        {...register('lastname',
        {pattern: {
          value: /^[A-Za-z]+$/i,
          message: "Last name is not as per the rules"
          }
          })}/>
          {errors.lastname && <p className="error-msg">{errors.lastname.message}</p>}
      </div> 
      <br/>
      <input type="submit"/>
    </form>
    </>
  )
}

export default App
