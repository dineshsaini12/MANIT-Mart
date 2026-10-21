import { steps } from "../../data/listings.js";
import "./HowItWorks.css";

export default function HowItWorks() {
  return <section className="steps-section" id="how-it-works"><div className="steps-intro"><div className="eyebrow">THREE STEPS / ZERO FUSS</div><h2>Good things<br /><em>move forward.</em></h2><p>Campus finds, a little more circular.<br />Here’s how your next exchange happens.</p><span className="steps-orbit" aria-hidden="true">↗</span></div><div className="steps-list">{steps.map((step) => <article className="step-card glass-panel" key={step.number}><div className="step-top"><span className="step-number">{step.number} / 03</span><span className="step-icon">{step.icon}</span></div><h3>{step.title}</h3><p>{step.copy}</p><span className="step-line" /></article>)}</div></section>;
}
