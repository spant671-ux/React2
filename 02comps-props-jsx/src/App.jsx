import UserCard from './components/UserCard'
import './App.css'
function App() {
  return (
    <div className='container'>
      <UserCard name="Sans" desc="desc1" />
      <UserCard name="Mikey" desc="desc2"/>
      <UserCard name="Guts" desc="desc3"/>
    </div>
  )
}

export default App
