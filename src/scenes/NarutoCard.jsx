import { useState } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import HeaderAll from "../components/HeaderAll";
import RainbowText from "../components/RainbowText";

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
    <header className="narutoHeader">
      <h1>Jirya dies and sends out his final message to Naruto</h1>
    </header>
      <Button
        type="primary"
        onClick={showModal}
        className="narutoButton"
        // style={{
        //   padding: "50px",
        //   display: "flex",
        //   alignItems: "center",
        //   fontSize: "1.1em"
        // }}
        >
          <RainbowText text="🥺 This Is Where I Die 🥺"/>
      </Button>
      <Modal
        title="My Favorite Naurto Scene"
        open={show}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80%"
        centered
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/5vYDWCDtw7c"
          // will change
          title="My Favorite Naruto Scene"
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
          bottom: "21%"
        }}
      >
        <Link to='/buttons' className="App-link">Click here to go back!</Link>
      </Button>
    </>
  )
}
