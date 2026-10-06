import UserCard from './components/UserCard'
import './App.css'
import ZoroPic from "./assets/Zoro.jpg";
import MikeyPic from "./assets/Mikey.jpg";
import GutsPic from "./assets/Guts.jpg";

function App() {
  return (
    <div className='container'>
      <UserCard name="Zoro" desc="desc1" image={ZoroPic}/>
      <UserCard name="Mikey" desc="desc2" image={MikeyPic}/>
      <UserCard name="Guts" desc="desc3" image={GutsPic}/>
    </div>
  )
}

export default App
