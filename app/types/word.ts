export type wordResponse = {
  word: string;
  phonetic: string;
  audio: string;
  meanings: meaning[];
};

export type meaning = {
  partOfSpeech: string;
  definitions: definition[];
  synonyms: string[];
};

type definition = {
  definition: string;
  example?: string;
};
