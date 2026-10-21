import React, { useMemo, useState } from "react";

const listings = [
  { id: 1, name: "Calculus, Early Transcendentals", category: "Books", price: 420, oldPrice: 780, condition: "Like new", seller: "Aarav · MANIT", emoji: "📚", tone: "lavender", location: "Hostel 3" },
  { id: 2, name: "Study table lamp", category: "Hostel", price: 250, oldPrice: 499, condition: "Good", seller: "Meera · MANIT", emoji: "💡", tone: "peach", location: "Hostel 5" },
  { id: 3, name: "Noise-cancelling headphones", category: "Electronics", price: 1800, oldPrice: 3200, condition: "Great", seller: "Kabir · MANIT", emoji: "🎧", tone: "blue", location: "Hostel 2" },
  { id: 4, name: "Graphing calculator", category: "Electronics", price: 950, oldPrice: 1600, condition: "Like new", seller: "Nisha · MANIT", emoji: "🧮", tone: "mint", location: "Hostel 4" },
  { id: 5, name: "Mechanical keyboard", category: "Electronics", price: 1200, oldPrice: 2100, condition: "Good", seller: "Dev · MANIT", emoji: "⌨️", tone: "yellow", location: "Hostel 1" },
  { id: 6, name: "Desk organiser set", category: "Hostel", price: 180, oldPrice: 350, condition: "Good", seller: "Isha · MANIT", emoji: "🗂️", tone: "rose", location: "Hostel 6" },
  { id: 7, name: "Engineering drawing kit", category: "Books", price: 300, oldPrice: 550, condition: "Good", seller: "Rohan · MANIT", emoji: "📐", tone: "blue", location: "Hostel 3" },
  { id: 8, name: "Badminton racket", category: "Sports", price: 700, oldPrice: 1300, condition: "Great", seller: "Ananya · MANIT", emoji: "🏸", tone: "mint", location: "Hostel 5" },
];

const categories = ["Everything", "Books", "Electronics", "Hostel", "Sports"];
const money = (amount) => `₹${amount.toLocaleString("en-IN")}`;
const steps = [
  { number: "01", icon: "⌕", title: "Find your thing", copy: "Explore useful finds from students right here on campus." },
  { number: "02", icon: "↗", title: "Connect directly", copy: "Message the student seller and agree on a fair price." },
  { number: "03", icon: "✦", title: "Meet & make it yours", copy: "Meet somewhere on campus, swap your item, and go." },
];

function App() {
  const [category, setCategory] = useState("Everything");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState([]);
  const filtered = useMemo(() => listings.filter((item) => {
    const matchesCategory = category === "Everything" || item.category === category;
    const matchesQuery = `${item.name} ${item.category} ${item.seller}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [category, query]);
  const toggleSaved = (id) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return (
    <div className="app-shell" id="top">
      <header className="topbar glass-panel">
        <a className="brand" href="#top" aria-label="MANIT Mart home"><span className="brand-mark">m</span><span>manit<span className="brand-light">mart</span></span></a>
        <nav className="main-nav" aria-label="Main navigation"><a className="active" href="#discover">Discover</a><a href="#how-it-works">How it works</a></nav>
        <div className="top-actions">
          <button className="saved-link" onClick={() => setCategory("Everything")}>Saved <span>{saved.length}</span></button>
          <a className="sell-button" href="#how-it-works"><span>＋</span> Sell an item</a>
          <div className="avatar" aria-label="Your profile">S</div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> THE STUDENT-TO-STUDENT MARKETPLACE</div>
            <h1>Good finds.<br /><span>Good for everyone.</span></h1>
            <p>Your next favourite thing is already on campus.<br className="desktop-break" /> Buy and sell pre-loved essentials with fellow MANITians.</p>
            <a className="hero-cta" href="#discover">Explore the marketplace <span>↘</span></a>
            <div className="hero-note"><span className="mini-avatars"><i>A</i><i>M</i><i>K</i></span><span>A little more reuse, a lot more campus community.</span></div>
          </div>
          <div className="hero-art" aria-label="Floating campus finds illustration">
            <div className="art-sun" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="float-card float-book"><span>📚</span><small>GOOD READS</small></div>
            <div className="float-card float-headphones"><span>🎧</span><small>FRESH FINDS</small></div>
            <div className="float-card float-lamp"><span>💡</span><small>ON CAMPUS</small></div>
            <div className="art-student"><div className="student-hair" /><div className="student-face" /><div className="student-body" /><div className="student-arm" /></div>
            <span className="tech-chip chip-one">MANIT / BHOPAL</span><span className="tech-chip chip-two">REUSE LOOP <b>↗</b></span>
            <div className="art-caption">A fresh start<br />for pre-loved things <span>✳</span></div>
            <div className="art-spark spark-one">✳</div><div className="art-spark spark-two">✦</div>
          </div>
          <div className="hero-stamp"><span>STUDENT<br />TO STUDENT</span><b>↗</b></div>
          <div className="hero-index">01 <i /> CAMPUS EXCHANGE</div>
        </section>

        <section className="discover-section" id="discover">
          <div className="section-heading"><div><div className="eyebrow section-eyebrow">THE CAMPUS EXCHANGE / LIVE FINDS</div><h2>Find your next <em>favourite.</em></h2></div><div className="listing-count"><strong>{filtered.length.toString().padStart(2, "0")}</strong><span>thoughtful finds<br />and counting</span></div></div>
          <div className="toolbar"><div className="category-list" role="tablist" aria-label="Filter by category">{categories.map((item) => <button role="tab" aria-selected={category === item} className={`category-chip ${category === item ? "selected" : ""}`} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the marketplace" aria-label="Search listings" /><kbd>⌘ K</kbd></label></div>
          {filtered.length ? <div className="product-grid">{filtered.map((item, index) => <article className="product-card glass-panel" key={item.id} style={{ "--card-index": index }}><div className={`product-image ${item.tone}`}><span className="item-emoji">{item.emoji}</span><span className="condition-tag">{item.condition}</span><button className={`heart ${saved.includes(item.id) ? "is-saved" : ""}`} aria-label={saved.includes(item.id) ? "Remove from saved" : "Save listing"} aria-pressed={saved.includes(item.id)} onClick={() => toggleSaved(item.id)}>{saved.includes(item.id) ? "♥" : "♡"}</button><span className="image-grain" /></div><div className="product-info"><div className="product-title-row"><h3>{item.name}</h3><span className="category-label">{item.category}</span></div><div className="price-row"><strong>{money(item.price)}</strong><del>{money(item.oldPrice)}</del><span className="discount">{Math.round((1 - item.price / item.oldPrice) * 100)}% off</span></div><div className="seller-row"><span className="seller-avatar">{item.seller[0]}</span><span>{item.seller}</span><span className="location">↗ {item.location}</span></div></div></article>)}</div> : <div className="empty-state"><span>⌕</span><h3>No finds just yet</h3><p>Try another search or category to see what’s available.</p><button onClick={() => { setQuery(""); setCategory("Everything"); }}>Show everything</button></div>}
          <div className="bottom-note"><span>✳</span> Every item deserves a second story. <a href="#how-it-works">Here’s how MANIT Mart works <b>↗</b></a></div>
        </section>

        <section className="steps-section" id="how-it-works"><div className="steps-intro"><div className="eyebrow">THREE STEPS / ZERO FUSS</div><h2>Good things<br /><em>move forward.</em></h2><p>Campus finds, a little more circular.<br />Here’s how your next exchange happens.</p><span className="steps-orbit" aria-hidden="true">↗</span></div><div className="steps-list">{steps.map((step) => <article className="step-card glass-panel" key={step.number}><div className="step-top"><span className="step-number">{step.number} / 03</span><span className="step-icon">{step.icon}</span></div><h3>{step.title}</h3><p>{step.copy}</p><span className="step-line" /></article>)}</div></section>
      </main>
      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">m</span><span>manit<span className="brand-light">mart</span></span></a><span>Made with care for the MANIT community.</span><span>Bhopal, India <b>· Keep good things going.</b></span></footer>
    </div>
  );
}

export default App;
