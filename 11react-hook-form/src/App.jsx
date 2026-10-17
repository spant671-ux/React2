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
    console.log("Submitting the form", data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input {...register('firstname')} />
      </div>
      <br/>
      <div>
        <label>Last Name: </label>
        <input {...register('lastname')}/>
      </div>
      <br/>
      <input type="submit"/>
    </form>
    </>
  )
}

export default App
