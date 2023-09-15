import Search from "./components/search/search";
import Word from "./components/word/word";
import WordProviders from "./context/wordContext";

export default function Home() {
  return (
    <div className="container">
      <WordProviders>
        <Search />
        <Word />
      </WordProviders>
    </div>
  );
}
