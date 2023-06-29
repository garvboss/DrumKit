import React, { useEffect } from "react";
import clap from "../sounds/clap.wav";
import hithat from "../sounds/hihat.wav";
import kick from "../sounds/kick.wav";
import openhat from "../sounds/openhat.wav";
import boom from "../sounds/boom.wav";
import ride from "../sounds/ride.wav";
import snare from "../sounds/snare.wav";
import tom from "../sounds/tom.wav";
import tink from "../sounds/tink.wav";
import guit from "../sounds/acoustic_guitar.mp3"

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

export default function Main() {
  useEffect(() => {
    document.addEventListener("keydown", playSound);
    return () => {
      document.removeEventListener("keydown", playSound);
    };
  }, []);

  return (
    <div className="main">
      <div onTransitionEnd={removeTransition} data-key="65" className="key">
        <kbd>A</kbd>
        <span className="sound">clap</span>
      </div>
      <div onTransitionEnd={removeTransition} data-key="83" className="key">
        <kbd>S</kbd>
        <span className="sound">hihat</span>
      </div>
      <div onTransitionEnd={removeTransition} data-key="68" className="key">
        <kbd>D</kbd>
        <span className="sound">kick</span>
      </div>
      <div onTransitionEnd={removeTransition} data-key="70" className="key">
        <kbd>F</kbd>
        <span className="sound">openhat</span>
      </div>
      <div onTransitionEnd={removeTransition} data-key="71" className="key">
        <kbd>G</kbd>
        <span className="sound">boom</span>
      </div>
      <div onTransitionEnd={removeTransition} data-key="72" className="key">
        <kbd>H</kbd>
        <span className="sound">ride</span>
      </div>
      <div onTransitionEnd={removeTransition} data-key="74" className="key">
        <kbd>J</kbd>
        <span className="sound">snare</span>
      </div>
      <div onTransitionEnd={removeTransition} data-key="75" className="key">
        <kbd>K</kbd>
        <span className="sound">tom</span>
      </div>
      <div onTransitionEnd={removeTransition} data-key="76" className="key">
        <kbd>L</kbd>
        <span className="sound">tink</span>
      </div>

      <audio data-key="65" src={clap}></audio>
      <audio data-key="83" src={hithat}></audio>
      <audio data-key="68" src={kick}></audio>
      <audio data-key="70" src={openhat}></audio>
      <audio data-key="71" src={boom}></audio>
      <audio data-key="72" src={ride}></audio>
      <audio data-key="74" src={snare}></audio>
      <audio data-key="75" src={tom}></audio>
      <audio data-key="76" src={tink}></audio>
    </div>
  );
}