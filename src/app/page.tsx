"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Camera, Mail, Menu, Phone, Quote, Sparkles, X } from "lucide-react";

const gallery = [
  ["Film", "On set", "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85"],
  ["Photoshoots", "Portrait study", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85"],
  ["Events", "Red carpet", "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85"],
  ["Media", "In conversation", "https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=1200&q=85"],
  ["Awards", "Recognition", "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&w=900&q=85"],
  ["Film", "The frame", "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=900&q=85"],
] as const;
const nav = [["About", "about"], ["Gallery", "gallery"], ["Awards & Recognition", "awards"], ["Portfolio", "press"], ["Contact Us", "contact"]] as const;
const awards = ["REPRESENTED INDIA INTERNATIONALLY AND WON THE MR. UNIVERSE RUNNER-UP 2025 TITLE", "Recognition details to be added", "Milestone details to be added"];
const awardImages = [
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
] as const;
const pressItems = [
  ["Movies", "ACTED AS THE LEAD HERO IN THE TAMIL MOVIE ANDHANAN", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=85"],
  ["Ads", "WORKED WITH THE MANYAVAR BRAND", "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=900&q=85"],
  ["Movies", "Featured film coverage", "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85"],
  ["Ads", "WORKED WITH THE TRYB BRAND", "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=85"],
] as const;

export default function Home() {
  const [scrolled, setScrolled] = useState(false), [menu, setMenu] = useState(false), [enquiry, setEnquiry] = useState(false), [filter, setFilter] = useState("All"), [pressFilter, setPressFilter] = useState("All"), [lightbox, setLightbox] = useState<number | null>(null), [sent, setSent] = useState(false), [activeIndex, setActiveIndex] = useState(0), [visibleCount, setVisibleCount] = useState(3), [awardImageIndex, setAwardImageIndex] = useState(0);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); addEventListener("scroll", onScroll); return () => removeEventListener("scroll", onScroll); }, []);
  const go = (id: string) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const filteredGallery = useMemo(() => gallery.filter((item) => filter === "All" || item[0] === filter), [filter]);
  const visiblePressItems = useMemo(() => pressFilter === "All" ? pressItems : pressItems.filter(([type]) => type === pressFilter), [pressFilter]);
  const displayedPressItems = visiblePressItems.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(3);
  }, [pressFilter]);

  useEffect(() => {
    if (!filteredGallery.length) return;
    setActiveIndex((current) => Math.min(current, filteredGallery.length - 1));
  }, [filteredGallery.length]);

  useEffect(() => {
    if (!filteredGallery.length) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % filteredGallery.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [filteredGallery.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAwardImageIndex((current) => (current + 1) % awardImages.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return <main>
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}><button className="brand" onClick={() => go("home")}><span>R</span> RAMESHBABU</button><nav className={menu ? "nav-links nav-open" : "nav-links"}>{nav.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}<button className="nav-enquiry" onClick={() => { setEnquiry(true); setMenu(false); }}>Enquiry <ArrowRight size={15} /></button></nav><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button></header>
    <section id="home" className="hero"><Image className="hero-image" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2200&q=90" alt="Cinematic portrait placeholder for Rameshbabu" fill priority sizes="100vw" /><div className="hero-shade" /><div className="hero-content reveal-up"><p className="eyebrow"><span /> Official portfolio <span /></p><h1>Ramesh<span>babu</span></h1><p className="hero-role">CINE ACTOR</p><p className="hero-tagline">Passion. Performance. Presence.</p><div className="hero-actions"><button className="button button-gold" onClick={() => go("gallery")}>Explore portfolio <ArrowRight size={16} /></button><button className="button button-ghost" onClick={() => go("contact")}>Get in touch</button></div></div></section>
    <section id="about" className="section about-section"><div className="about-grid"><div className="about-visual"><Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1000&q=85" alt="Portrait placeholder for Rameshbabu" width={900} height={1100} /><div className="image-caption">Rameshbabu <span>— actor profile</span></div></div><div className="about-copy"><p className="eyebrow eyebrow-dark">About Rameshbabu</p><h2>Every frame<br /><em>has a story.</em></h2><p className="lead">A presence shaped for the screen, a craft built on curiosity.</p><p>Add biography here. This space is ready for Rameshbabu&apos;s story, acting journey, professional experience and the roles that have shaped his path in cinema.</p><p>Add acting specialties, film and television experience, personal achievements and the perspective he brings to every performance.</p><button className="text-link" onClick={() => go("contact")}>Work with Rameshbabu <ArrowRight size={17} /></button></div></div><div className="stats">{[["—", "Years of experience"], ["—", "Films / projects"], ["—", "Awards"], ["—", "Recognitions"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section id="gallery" className="section gallery-section"><div className="section-heading"><div><p className="eyebrow">Visual archive</p><h2>Gallery</h2></div><p>Moments on camera, behind the scenes,<br />and everywhere the story takes shape.</p></div><div className="gallery-slider-wrap"><div className="gallery-slider-controls"><button className="gallery-arrow" onClick={() => setActiveIndex((current) => (current - 1 + filteredGallery.length) % filteredGallery.length)} aria-label="Previous gallery item"><ArrowLeft size={20} /></button><button className="gallery-arrow" onClick={() => setActiveIndex((current) => (current + 1) % filteredGallery.length)} aria-label="Next gallery item"><ArrowRight size={20} /></button></div><div className="gallery-slider"><div className="gallery-slider-track">{filteredGallery.map((item, index) => {
          const offset = (index - activeIndex + filteredGallery.length) % filteredGallery.length;
          const position = offset > filteredGallery.length / 2 ? offset - filteredGallery.length : offset;
          const isVisible = Math.abs(position) <= 2;

          if (!isVisible) return null;

          return <button className={`gallery-item ${position === 0 ? "gallery-item-center" : ""}`} key={item[2]} onClick={() => setLightbox(gallery.indexOf(item))} style={{ transform: `translate(-50%, -50%) translateX(${position * 170}px) scale(${position === 0 ? 1.18 : 0.82}) rotateY(${position * -22}deg)`, zIndex: position === 0 ? 3 : 2 - Math.abs(position), opacity: Math.abs(position) > 1 ? 0.7 : 1 }}>
            <Image src={item[2]} alt={`${item[1]} gallery placeholder`} fill sizes="(max-width: 768px) 74vw, 28vw" />
            <span className="gallery-overlay"><small>{item[0]}</small><strong>{item[1]}</strong></span>
          </button>;
        })}</div></div></div></section>
    <section id="awards" className="section awards-section"><div className="section-kicker">03 / Milestones</div><div className="section-heading"><div><p className="eyebrow">The journey so far</p><h2>Awards &<br /><em>Recognition</em></h2></div><p>Every acknowledgement is a reminder<br />to keep reaching for the next scene.</p></div><div className="awards-layout"><div className="award-list">{awards.map((title, i) => <article className="award-row" key={title}><span className="award-index">0{i + 1}</span><span className="award-year">20—</span><div><h3>{title}</h3><p>Organization, category and recognition details will be added here.</p></div><Sparkles size={19} /></article>)}</div><div className="award-slider-panel"><div className="award-slider"><div className="award-slider-track">{awardImages.map((image, index) => <div className={awardImageIndex === index ? "award-slide award-slide-active" : "award-slide"} key={image}><Image src={image} alt="Recognition gallery" fill sizes="(max-width: 768px) 100vw, 30vw" /></div>)}</div><div className="award-slider-dots">{awardImages.map((image, index) => <button className={awardImageIndex === index ? "award-dot award-dot-active" : "award-dot"} onClick={() => setAwardImageIndex(index)} key={`${image}-${index}`} aria-label={`Show slide ${index + 1}`} />)}</div></div></div></div></section>
    <section id="press" className="section press-section"><div className="section-kicker">04 / In the spotlight</div><div className="section-heading"><div><p className="eyebrow">From the archive</p><h2>Portfolio</h2></div></div><div className="press-tabs">{["All", "Movies", "Ads"].map((tab) => <button className={pressFilter === tab ? "press-tab press-tab-active" : "press-tab"} onClick={() => setPressFilter(tab)} key={tab}>{tab}</button>)}</div><div className="news-grid">{displayedPressItems.map(([type, title, image]) => <article className="news-card" key={title}><div className="news-image"><Image src={image} alt="Press image placeholder" fill sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="news-info"><div className="news-meta"><span>{type}</span><span>Coming soon</span></div><h3>{title}</h3><p>Add the publication excerpt and a link to the full article here.</p><button className="text-link">Read more <ArrowRight size={16} /></button></div></article>)}</div>{visiblePressItems.length > displayedPressItems.length && <button className="load-more" onClick={() => setVisibleCount((count) => Math.min(count + 3, visiblePressItems.length))}>Load more</button>}</section>
    <section id="contact" className="contact-section"><div className="section-kicker">05 / Start a conversation</div><div className="contact-grid"><div><p className="eyebrow">Contact</p><h2>Let&apos;s make<br /><em>something real.</em></h2><p className="contact-intro">For casting, collaborations, media enquiries and professional opportunities, reach out directly.</p><div className="contact-links"><a href="tel:9841848951"><Phone size={17} /><span>Phone<br /><strong>9841848951 / 7904102036</strong></span></a><a href="mailto:rameshgeetha918@gmail.com"><Mail size={17} /><span>Email<br /><strong>rameshgeetha918@gmail.com</strong></span></a><a href="https://instagram.com/RAMESHBABU_GEETHA" target="_blank"><Camera size={17} /><span>Instagram<br /><strong>@RAMESHBABU_GEETHA</strong></span></a></div></div><div className="contact-note"><Quote size={28} /><p>&quot;The camera doesn&apos;t just capture a face. It captures a feeling.&quot;</p><span>— Rameshbabu</span></div></div></section>
    <footer><div className="footer-top"><div className="footer-brand"><span>R</span><h3>RAMESHBABU</h3><p>Cine Actor</p></div><div className="footer-nav">{nav.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div><div className="footer-contact"><p>Bookings & enquiries</p><a href="tel:9841848951">9841848951 / 7904102036</a><a href="mailto:rameshgeetha918@gmail.com">rameshgeetha918@gmail.com</a></div></div><div className="footer-bottom"><span>© 2026 Rameshbabu. All Rights Reserved.</span><a href="https://instagram.com/RAMESHBABU_GEETHA" target="_blank"><Camera size={15} /> @RAMESHBABU_GEETHA</a></div></footer>
    <a className="whatsapp" href="https://wa.me/917904102036" target="_blank" aria-label="Chat on WhatsApp"><i className="fa fa-whatsapp" aria-hidden="true"></i></a><button className={`back-top ${scrolled ? "back-top-visible" : ""}`} onClick={() => go("home")} aria-label="Back to top"><ArrowUp size={18} /></button>
    {lightbox !== null && <div className="lightbox"><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close gallery"><X /></button><button className="lightbox-arrow left" onClick={() => setLightbox((lightbox + gallery.length - 1) % gallery.length)} aria-label="Previous image"><ArrowLeft /></button><Image src={gallery[lightbox][2]} alt={gallery[lightbox][1]} width={1400} height={1000} /><button className="lightbox-arrow right" onClick={() => setLightbox((lightbox + 1) % gallery.length)} aria-label="Next image"><ArrowRight /></button><p>{gallery[lightbox][0]} / {gallery[lightbox][1]}</p></div>}
    {enquiry && <div className="modal-backdrop" onClick={() => setEnquiry(false)}><div className="enquiry-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setEnquiry(false)} aria-label="Close enquiry"><X /></button>{sent ? <div className="success-message"><Sparkles size={30} /><h2>Thank you.</h2><p>Your enquiry has been noted. We&apos;ll be in touch soon.</p><button className="button button-gold" onClick={() => setEnquiry(false)}>Close</button></div> : <><p className="eyebrow eyebrow-dark">Let&apos;s connect</p><h2>Make an enquiry</h2><form onSubmit={(e) => { e.preventDefault(); setSent(true); }}><label>Name<input required /></label><label>Phone number<input required type="tel" /></label><label>Email<input required type="email" /></label><label>Subject<input required /></label><label>Message<textarea required rows={4} /></label><button className="button button-dark" type="submit">Submit enquiry <ArrowRight size={16} /></button></form></>}</div></div>}
  </main>;
}
