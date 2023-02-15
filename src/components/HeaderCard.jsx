import { Link } from "react-router-dom"

export default function HeaderCard() {
    return (
    <>
      <header>
        <h1>My favorite Video clips from a few different animes</h1>
        <p>There are many things i can talk about in great detail, but i think the most fitting for me and what i enjoy would be video clips of my favorite moments in animes. I'll link the YouTuber as well as the anime/show, as giving credit is a very important thing to do</p>
        <h2>WARNING: spoliers ahead</h2>
      </header>
      <Link to='/buttons' className="App-link">Click here to view top 3!</Link>
    </>
    )
  }