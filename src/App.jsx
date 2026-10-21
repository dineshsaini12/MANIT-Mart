import { useMemo, useState } from "react";
import { listings as allListings } from "./data/listings.js";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
import Marketplace from "./components/Marketplace/Marketplace.jsx";

export default function App() {
  const [category, setCategory] = useState("Everything");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState([]);
  const filteredListings = useMemo(() => allListings.filter((item) => {
    const matchesCategory = category === "Everything" || item.category === category;
    const matchesQuery = `${item.name} ${item.category} ${item.seller}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [category, query]);
  const toggleSaved = (id) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return <div className="app-shell" id="top">
    <Header savedCount={saved.length} onSavedClick={() => setCategory("Everything")} />
    <main><Hero /><Marketplace listings={filteredListings} category={category} setCategory={setCategory} query={query} setQuery={setQuery} saved={saved} onToggleSaved={toggleSaved} /><HowItWorks /></main>
    <Footer />
  </div>;
}
