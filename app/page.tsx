import Search from "./components/search/search";
import Word from "./components/word/word";
import WordProviders from "./context/wordContext";

export default function Home() {
  return (
    <section>
      <WordProviders>
        <Search />
        <Word />
      </WordProviders>
    </section>
  );
}
