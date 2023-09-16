import React from "react";

import "./wordMeaning-styles.css";

import type { meaning } from "../../types/word";

type Props = {
  meanings: meaning[];
};

function WordMeaning({ meanings }: Props) {
  return (
    <div className="word_meaning_container">
      {meanings.map((meaning, meaningIdx) => (
        <article key={meaningIdx}>
          <section className="word_type">
            <h3>{meaning.partOfSpeech}</h3>
            <span className="word_type_line"></span>
          </section>
          {meaning.definitions.length !== 0 && (
            <section className="meaning">
              <h3>Meaning</h3>
              <ul className="meaning_list">
                {meaning.definitions.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <li>{item.definition}</li>
                    {item.example && (
                      <p className="example_para">{`''${item.example}''`}</p>
                    )}
                  </div>
                ))}
              </ul>
            </section>
          )}
          {meaning.synonyms.length !== 0 && (
            <section className="synonyms">
              <h3>synonyms</h3>
              {meaning.synonyms.map((synonym, synonymIdx) => (
                <h4 className="synonym_purple" key={synonymIdx}>
                  {synonym}
                </h4>
              ))}
            </section>
          )}
        </article>
      ))}
    </div>
  );
}

export default WordMeaning;
