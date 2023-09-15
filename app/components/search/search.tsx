"use client";

import Image from "next/image";
import "./search-styles.css";
import React, { useState, useContext } from "react";
import SearchIcon from "../../assets/search.svg";
import { WordContext } from "../../context/wordContext";

function Search() {
  const [searchWord, setSearchWord] = useState("");
  const { handleSetData, handleSetError, handleSetLoading } =
    useContext(WordContext);

  const handleSearch = async () => {
    if (!searchWord) return;

    handleSetError(null);
    handleSetData(null);
    handleSetLoading(true);

    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );

      if (!res.ok) {
        throw new Error("Cannot find word");
      }

      const data = await res.json();
      handleSetData(data);
      handleSetLoading(false);
    } catch (error: any) {
      handleSetError(error.message);
      handleSetLoading(false);
    }
  };

  const handleOnkeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleSearch();
  };

  return (
    <div className="search_container">
      <input
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onKeyDown={handleOnkeyDown}
        placeholder="Enter some word..."
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
