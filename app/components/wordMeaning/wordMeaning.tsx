import "./wordMeaning-styles.css";
import React from "react";
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
            <div className="word_type_line"></div>
          </section>
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
            {meaning.synonyms.length !== 0 && (
              <div className="synonyms">
                <h3>synonyms</h3>
                {meaning.synonyms.map((synonym, synonymIdx) => (
                  <h3 className="synonym_purple" key={synonymIdx}>
                    {synonym}
                  </h3>
                ))}
              </div>
            )}
          </section>
        </article>
      ))}
    </div>
  );
}

export default WordMeaning;
