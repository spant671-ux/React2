import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
    <form>
      <div>
        <label>First Name: </label>
        <input />
      </div>
      <br/>
      <div>
        <label>Last Name: </label>
        <input />
      </div>
    </form>
    </>
  )
}

export default App
