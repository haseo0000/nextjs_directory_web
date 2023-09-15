"use client";

import React, { createContext, useState } from "react";
import type { wordResponse } from "../types/word";

type Context = {
  data: wordResponse | null;
  handleSetData: (word: wordResponse | null) => void;
  error: string | null;
  handleSetError: (error: any) => void;
  loading: boolean;
  handleSetLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: React.ReactNode;
};

export const WordContext = createContext<Context>({} as Context);

function WordProviders({ children }: Props) {
  const [data, setData] = useState<wordResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSetError = (error: any) => {
    setError(error);
  };

  const handleSetData = (data: any) => {
    if (!data) {
      return setData(null);
    }

    setData({
      word: data[0].word,
      phonetic: data[0].phonetic,
      audio: findAudio(data[0].phonetics),
      meanings: getMeanings(data[0].meanings),
    });
  };

  const findAudio = (phonetics: any) => {
    let audio = "";
    phonetics.forEach((item: any) => {
      if (item.audio !== "") {
        audio = item.audio;
        return;
      }
    });

    return audio;
  };

  const getMeanings = (meanings: any) => {
    return meanings.map((item: any) => {
      return {
        partOfSpeech: item.partOfSpeech,
        definitions: item.definitions,
        synonyms: item.synonyms,
      };
    });
  };

  return (
    <WordContext.Provider
      value={{
        data,
        handleSetData,
        error,
        handleSetError,
        loading,
        handleSetLoading: setLoading,
      }}>
      {children}
    </WordContext.Provider>
  );
}

export default WordProviders;
