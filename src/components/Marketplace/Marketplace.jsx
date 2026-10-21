import { categories } from "../../data/listings.js";
import ListingCard from "../ListingCard/ListingCard.jsx";
import "./Marketplace.css";

export default function Marketplace({ listings, category, setCategory, query, setQuery, saved, onToggleSaved }) {
  return <section className="discover-section" id="discover">
    <div className="section-heading"><div><div className="eyebrow section-eyebrow">THE CAMPUS EXCHANGE / LIVE FINDS</div><h2>Find your next <em>favourite.</em></h2></div><div className="listing-count"><strong>{listings.length.toString().padStart(2, "0")}</strong><span>thoughtful finds<br />and counting</span></div></div>
    <div className="toolbar"><div className="category-list" role="tablist" aria-label="Filter by category">{categories.map((item) => <button role="tab" aria-selected={category === item} className={`category-chip ${category === item ? "selected" : ""}`} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the marketplace" aria-label="Search listings" /><kbd>⌘ K</kbd></label></div>
    {listings.length ? <div className="product-grid">{listings.map((item, index) => <ListingCard key={item.id} item={item} index={index} saved={saved.includes(item.id)} onToggleSaved={onToggleSaved} />)}</div> : <div className="empty-state"><span>⌕</span><h3>No finds just yet</h3><p>Try another search or category to see what’s available.</p><button onClick={() => { setQuery(""); setCategory("Everything"); }}>Show everything</button></div>}
    <div className="bottom-note"><span>✳</span> Every item deserves a second story. <a href="#how-it-works">Here’s how MANIT Mart works <b>↗</b></a></div>
  </section>;
}
