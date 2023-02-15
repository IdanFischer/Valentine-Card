import { useState } from "react";
import { Button, Modal } from "antd";
import HeaderAll from "../components/HeaderAll";
import RainbowText from "../components/RainbowText";
import { Link } from "react-router-dom";

export default function HxhCard() {
  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true)
  }

  const handleOk = () => {
    setShow(false)
  }

  const handleCancel = () => {
    setShow(false)
  }

  return (
    <>
      <header className="hxhHeader">
        <h1>Meruem and Komugi's last conversation</h1>
      </header>
      <Button
        type="primary"
        onClick={showModal}
        className="hxhButton"
        // style={{
        //   padding: "50px",
        //   display: "flex",
        //   alignItems: "center",
        //   fontSize: "1em"
        // }}
      >
        {<RainbowText text="😔 Good ‎ Night...‎ Meruem 😔" />}
        {/* {<RainbowText text="Good Night... Meruem" />}
        CHANGE WITH THIS */}
      </Button>
      <Modal
        title="My Favorite HXH Scene"
        open={show}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80%"
        centered
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/juR22wr3Ifw"
          title="My Favorite HxH clip"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

      </Modal>
      <Button
        type="link"
        style={{
          fontSize: "1.1em",
          position: "relative",
          bottom: -20
        }}
      >
        <Link to='/buttons' className="App-link">Click here to go back!</Link>
      </Button>
    </>
  )
}
