"use client";

import Image from "next/image";
import "./search-styles.css";
import React, { useState, useContext } from "react";
import SearchIcon from "../../assets/search.svg";
import { WordContext } from "../../context/wordContext";

function Search() {
  const [searchWord, setSearchWord] = useState("");
  const { handleSetData, handleSetError } = useContext(WordContext);

  const handleSearch = async () => {
    handleSetError(null);
    handleSetData(null);

    if (!searchWord) return;

    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );

      if (!res.ok) {
        throw new Error("Cannot find word");
      }

      const data = await res.json();
      handleSetData(data);
    } catch (error: any) {
      handleSetError(error.message);
    }
  };

  return (
    <div className="search_container">
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <Image
        className="search"
        src={SearchIcon}
        alt="search icon"
        width={30}
        onClick={handleSearch}
      />
    </div>
  );
}

export default Search;
