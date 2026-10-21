import { money } from "../../data/listings.js";
import "./ListingCard.css";

export default function ListingCard({ item, index, saved, onToggleSaved }) {
  return <article className="product-card glass-panel" style={{ "--card-index": index }}><div className={`product-image ${item.tone}`}><span className="item-emoji">{item.emoji}</span><span className="condition-tag">{item.condition}</span><button className={`heart ${saved ? "is-saved" : ""}`} aria-label={saved ? "Remove from saved" : "Save listing"} aria-pressed={saved} onClick={() => onToggleSaved(item.id)}>{saved ? "♥" : "♡"}</button><span className="image-grain" /></div><div className="product-info"><div className="product-title-row"><h3>{item.name}</h3><span className="category-label">{item.category}</span></div><div className="price-row"><strong>{money(item.price)}</strong><del>{money(item.oldPrice)}</del><span className="discount">{Math.round((1 - item.price / item.oldPrice) * 100)}% off</span></div><div className="seller-row"><span className="seller-avatar">{item.seller[0]}</span><span>{item.seller}</span><span className="location">↗ {item.location}</span></div></div></article>;
}
