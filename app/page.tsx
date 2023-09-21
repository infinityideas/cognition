"use client"

import { useState } from "react"

export default function Home() {
  const [imageLink, setImageLink] = useState(0);
  const [ready, setReady] = useState(false);
  const [interstitial, setInterstitial] = useState(false);
  const [end, setEnd] = useState(false);
  const [times, setTimes]: any = useState([]);
  const [show, setShow] = useState(false);
  const [links, setLinks]: any = useState([]);

  let currentTime = (new Date()).getTime();

  document.addEventListener("keypress", (event: KeyboardEvent) => {
    if (event.code == 'KeyA') {
      setShow(false);
      setInterstitial(false);
      setTimeout(() => {setShow(true); currentTime = (new Date()).getTime()}, 2000);
    }

    if (event.code == 'Space') {
      if (imageLink == 2) {
        setEnd(true);
        setTimes([...times, (new Date()).getTime() - currentTime])
      } else {
        setInterstitial(true);
        setShow(false);
        setImageLink(imageLink+1);
        setTimes([...times, (new Date()).getTime() - currentTime])
        currentTime = (new Date()).getTime();
      }
    }
  })

  if (end) {
    return (
      <div>{times[0]}, {times[1]}, {times[2]}</div>
    )
  }
  
  if (!ready) {
    return (
      <div style={{width: "75", height: "100vw", margin: "auto"}}>
        <button style={{width: "100px", marginRight: 20, height: 100, fontSize: "2em"}} onClick={()=> {setLinks(["/allmismatched/Slide1.jpeg", "/allmismatched/Slide2.jpeg", "/allmismatched/Slide3.jpeg"]); setReady(true); setInterstitial(true);}}>1️⃣</button>
        <button style={{width: "100px", marginRight: 20, height: 100, fontSize: "2em"}} onClick={()=> {setLinks(["/somemismatched/Slide1.jpeg", "/somemismatched/Slide2.jpeg", "/somemismatched/Slide3.jpeg"]); setReady(true); setInterstitial(true);}}>2️⃣</button>
        <button style={{width: "100px", marginRight: 20, height: 100, fontSize: "2em"}} onClick={()=> {setLinks(["/nonemismatched/Slide1.jpeg", "/nonemismatched/Slide2.jpeg", "/nonemismatched/Slide3.jpeg"]); setReady(true); setReady(true); setInterstitial(true);}}>3️⃣</button>
      </div>
    )
  }

  if (interstitial) {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2em", width: "100vw", height: "100vh"}}><h1>Press "a" to move to the next image</h1></div>
    )
  }

  if (show) {
    return (
      <div style={{justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", display: "flex"}}>
        <img src={links[imageLink]} />
      </div>
    )
  }
}
