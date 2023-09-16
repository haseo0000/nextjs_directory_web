"use client";

import "./wordSound-styles.css";
import React, { useRef } from "react";
import PlayIcon from "../../assets/play.svg";
import Image from "next/image";
import { wordResponse } from "../../types/word";

type Props = {
  data: wordResponse;
};

function WordSound({ data }: Props) {
  const ref = useRef<any>();

  const handlePlaySound = () => {
    ref.current.play();
  };

  return (
    <div className="word_sound_container">
      <h2 className="word">{data.word}</h2>
      {data.phonetic && (
        <>
          <h3 className="word_pronous">{data.phonetic}</h3>
          <button className="play_sound" onClick={handlePlaySound}>
            <Image src={PlayIcon} alt={"play icon"} width={15} />
            <audio ref={ref} src={data.audio} />
          </button>
        </>
      )}
    </div>
  );
}

export default WordSound;
