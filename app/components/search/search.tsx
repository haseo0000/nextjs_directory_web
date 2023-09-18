"use client";

import Image from "next/image";
import React, { useState, useContext } from "react";

import "./search-styles.css";
import SearchIcon from "../../assets/search.svg";

import { WordContext } from "../../context/wordContext";
import fetchWord from "../../util/fetch_word";

function Search() {
  const [searchWord, setSearchWord] = useState("");
  const { handleSetData, handleSetError, handleSetLoading } =
    useContext(WordContext);

  const handleSearch = async () => {
    if (!searchWord) return;

    handleSetError(null);
    handleSetData(null);
    handleSetLoading(true);

    const { data, error } = await fetchWord(searchWord);
    if (error) {
      handleSetError(error);
      handleSetLoading(false);
      return;
    }

    handleSetData(data);
    handleSetLoading(false);
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
