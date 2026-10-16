import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const navigate = useNavigate()
  function handleClick(){
    navigate('/')
  }
  return (
    <div>
        Dashboard Page
        <button onClick={handleClick}>
          Move to Home
        </button>
    </div>
  )
}

export default Dashboard