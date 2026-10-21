import "./Header.css";

export default function Header({ savedCount, onSavedClick }) {
  return <header className="topbar glass-panel">
    <a className="brand" href="#top" aria-label="MANIT Mart home"><span className="brand-mark">m</span><span>manit<span className="brand-light">mart</span></span></a>
    <nav className="main-nav" aria-label="Main navigation"><a className="active" href="#discover">Discover</a><a href="#how-it-works">How it works</a></nav>
    <div className="top-actions"><button className="saved-link" onClick={onSavedClick}>Saved <span>{savedCount}</span></button><a className="sell-button" href="#how-it-works"><span>＋</span> Sell an item</a><div className="avatar" aria-label="Your profile">S</div></div>
  </header>;
}
