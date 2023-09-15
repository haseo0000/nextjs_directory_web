"use client";

import React, { useContext } from "react";
import WordSound from "../wordSound/wordSound";
import WordMeaning from "../wordMeaning/wordMeaning";

import { WordContext } from "../../context/wordContext";

function word() {
  const { data, error } = useContext(WordContext);
  console.log(error);
  console.log({ data });

  if (error) return <p>{error}</p>;

  if (!data) return;

  return (
    <>
      <WordSound data={data} />
      <WordMeaning meanings={data.meanings} />
    </>
  );
}

export default word;
