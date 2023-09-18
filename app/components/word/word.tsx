"use client";

import React, { useContext } from "react";
import ReactLoading from "react-loading";

import WordSound from "../wordSound/wordSound";
import WordMeaning from "../wordMeaning/wordMeaning";
import { WordContext } from "../../context/wordContext";

function word() {
  const { data, error, loading } = useContext(WordContext);

  if (loading) {
    return (
      <div className="loading_container">
        <ReactLoading
          type={"spin"}
          width={100}
          height={100}
          className="loading_spin_color"
        />
      </div>
    );
  }

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
