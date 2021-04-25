import React, { useEffect, useState } from "react";
// import ColorfulMessage2 from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("App first");
  const [x, setFx] = useState(1);
  const [faceShowFlg, setFaceShowFlg] = useState(true);

  const onClickCountUp = () => {
    setFx(x + 1);
  };
  const onClickSwitchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    console.log("useEffect 初回のみ");
  }, []);

  useEffect(() => {
    console.log("useEffect カウントアップのみ");
    if (x % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x]);

  return (
    <>
      <h1 style={{ color: "red" }}>てｓつお</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>on/off</button>
      <p>{x}</p>
      {faceShowFlg && <p>（｀•ω•）</p>}
    </>
  );
};

export default App;
