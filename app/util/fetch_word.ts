const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const fetchWord = async (searchWord: string) => {
  try {
    const res = await fetch(`${url}${searchWord}`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Cannot find word");
    }

    const data = await res.json();

    return {
      data,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export default fetchWord;
