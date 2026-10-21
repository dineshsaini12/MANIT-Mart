import "./Hero.css";

export default function Hero() {
  return <section className="hero">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-copy"><div className="eyebrow"><span className="pulse-dot" /> THE STUDENT-TO-STUDENT MARKETPLACE</div><h1>Good finds.<br /><span>Good for everyone.</span></h1><p>Your next favourite thing is already on campus.<br className="desktop-break" /> Buy and sell pre-loved essentials with fellow MANITians.</p><a className="hero-cta" href="#discover">Explore the marketplace <span>↘</span></a><div className="hero-note"><span className="mini-avatars"><i>A</i><i>M</i><i>K</i></span><span>A little more reuse, a lot more campus community.</span></div></div>
    <div className="hero-art" aria-label="Floating campus finds illustration"><div className="art-sun" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="float-card float-book"><span>📚</span><small>GOOD READS</small></div><div className="float-card float-headphones"><span>🎧</span><small>FRESH FINDS</small></div><div className="float-card float-lamp"><span>💡</span><small>ON CAMPUS</small></div><div className="art-student"><div className="student-hair" /><div className="student-face" /><div className="student-body" /><div className="student-arm" /></div><span className="tech-chip chip-one">MANIT / BHOPAL</span><span className="tech-chip chip-two">REUSE LOOP <b>↗</b></span><div className="art-caption">A fresh start<br />for pre-loved things <span>✳</span></div><div className="art-spark spark-one">✳</div><div className="art-spark spark-two">✦</div></div>
    <div className="hero-stamp"><span>STUDENT<br />TO STUDENT</span><b>↗</b></div><div className="hero-index">01 <i /> CAMPUS EXCHANGE</div>
  </section>;
}
