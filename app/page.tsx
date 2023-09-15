import Navbar from "./components/navbar/navbar";
import Search from "./components/search/search";
import Word from "./components/word/word";
import WordProviders from "./context/wordContext";

export default function Home() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <WordProviders>
          <Search />
          <Word />
        </WordProviders>
      </main>
    </div>
  );
}
