import { Button } from "antd"
import { Link } from "react-router-dom"
import display from "../assets/images/display.png"



export default function ContentCard() {
  return (
    <>
    <header>
      <h1 className="display">This is the best way to view the videos and text, as it brings out vibrancy on your screen</h1>
      <img src={display} alt="best display to use" />
    </header>
      <nav>
        <Link to="/dbz">
          <Button type="link" shape="lg">My favorite clip from Dragon Ball Z</Button>
        </Link>

        <Link to="/hxh">
          <Button type="link" shape="lg">My favorite clip from Hunter x Hunter</Button>
        </Link>
        
        <Link to="/naruto">
          <Button type="link" shape="lg"  >My favorite clip from Naruto</Button>
        </Link>
      </nav>

    <Link to="/home" className="App-link">HOME</Link>
    </>
  )
}