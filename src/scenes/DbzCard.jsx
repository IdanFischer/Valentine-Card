import { useState } from "react"
import { Button, Modal } from "antd"
import HeaderAll from "../components/HeaderAll";
import RainbowText from "../components/RainbowText";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function DbzCard({ text }) {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const handleOk = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <PageLayout>
      <header className="dbzHeader">
        <h1>YOU MUST DIE BY MY HANDS! (Frieza trying and failing to launch one last attack after being spared and even saved by Goku)</h1>
      </header>
      <Button
        type="primary"
        onClick={showModal}
        className="dbzButton"
        // style={{
        //   padding: "60px",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   fontSize: "1.1em"
        // }}
      >
        <RainbowText text={"😠 ‎ YOU ‎ FOOL! ‎ 😠"}></RainbowText>
      </Button>
      <Modal
        title='My Favorite Dragon Ball Z Scene'
        open={show}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80%"
        centered
        maskStyle={{

        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/1JKrsew7qBk"
          title="Favorite Dragon Ball Z Scene"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Modal>
      <Button
        type="link"
        style={{
          fontSize: "1.1em",
          position: "relative",
          bottom: "11%"
        }}
      >
        <Link to='/buttons' className="App-link">Click here to go back!</Link>
      </Button>
    </PageLayout>
  );
}