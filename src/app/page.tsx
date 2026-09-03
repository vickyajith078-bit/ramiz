"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Camera, Mail, Menu, Phone, Quote, Sparkles, X } from "lucide-react";

const gallery = [
  ["Film", "Featured portrait", "/img1.jpg"],
  ["Film", "Behind the lens", "/img2.jpg"],
  ["Photoshoots", "Portrait study", "/img3.jpg"],
  ["Events", "Fantasy look", "/img4.jpg"],
  ["Awards", "Recognition", "/img6.jpg"],
  ["Film", "The frame", "/img7.jpg"],
  ["Photoshoots", "Studio light", "/img8.jpg"],
  ["Events", "Candid portrait", "/img9.jpg"],
  ["Film", "Scene detail", "/img10.jpg"],
  ["Photoshoots", "Award night", "/img11.jpg"],
  ["Events", "On location", "/img12.jpg"],
  ["Media", "Red carpet", "/img13.jpg"],
  ["Awards", "Award night", "/img14.jpg"],
  ["Film", "Character study", "/img15.jpg"],
  ["Photoshoots", "Editorial look", "/img16.jpg"],
  ["Events", "Celebration", "/img17.jpg"],
  ["Media", "Movie", "/img18.jpg"],
  ["Film", "Stage moment", "/img19.jpg"],
  ["Film", "Featured addition", "/img20.jpg"],
] as const;
const nav = [["About", "about"], ["Gallery", "gallery"], ["Awards & Recognition", "awards"], ["Portfolio", "press"], ["Contact Us", "contact"]] as const;
const awards = ["REPRESENTED INDIA INTERNATIONALLY AND WON THE MR. UNIVERSE RUNNER-UP 2025 TITLE", "ENTERED THE WORLD OF TAMIL CINEMA WITH MY DEBUT AS LEAD HERO", "REPRESENTED INDIA AS MISTER UNIVERSE INDIA AND WON ICONIC MR. INDIA 2025 1ST RUNNER-UP"];
const awardImages = [
  "/img8.jpg",
  "/img11.jpg",
  "/img19.jpg",
  "/img20.jpg",
] as const;
const pressItems = [
  ["Movies", "ACTED AS THE LEAD HERO IN THE TAMIL MOVIE ANDHANAN", "/img18.jpg"],
  ["Ads", "WORKED WITH THE MANYAVAR BRAND", "/img13.jpg"],
  ["Ads", "WORKED WITH THE RAYMOND BRAND", "/img12.jpg"],
  ["Ads", "WORKED WITH THE TRYB BRAND", "/img6.jpg"],
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
    <section id="home" className="hero"><Image className="hero-image" src="/img10.jpg" alt="Cinematic portrait placeholder for Rameshbabu" fill priority sizes="100vw" /><div className="hero-shade" /><div className="hero-content reveal-up"><p className="eyebrow"><span /> Official portfolio <span /></p><h1>Ramesh<span>babu</span></h1><p className="hero-role">CINE ACTOR & MODEL</p><p className="hero-tagline">Passion. Performance. Presence.</p><div className="hero-actions"><button className="button button-gold" onClick={() => go("gallery")}>Explore portfolio <ArrowRight size={16} /></button><button className="button button-ghost" onClick={() => go("contact")}>Get in touch</button></div></div></section>
    <section id="about" className="section about-section"><div className="about-grid"><div className="about-visual"><Image src="/img2.jpg" alt="Portrait placeholder for Rameshbabu" width={900} height={1100} /><div className="image-caption">Rameshbabu <span>— actor profile</span></div></div><div className="about-copy"><p className="eyebrow eyebrow-dark">About Rameshbabu</p><h2>Every frame<br /><em>has a story.</em></h2><p className="lead">I’m Ramesh Babu Geetha, an actor, model, and fitness enthusiast from Tamil Nadu.</p><br /><p>My journey in modelling began with a passion for fitness, fashion, and performance. Over the years, I have represented myself on national and international platforms and earned several titles, including <strong>Mr. Super Model 2019, Mr. Tamil Nadu 2022 – 1st Runner-Up, Mr. India Best Runway Model 2024, and Mr. India 2025.</strong></p><br /><p>With more than <strong>nine years of fitness experience</strong>, I have built my physique naturally through consistent <strong>training, discipline, and a dedicated lifestyle.</strong> Fitness has played an important role in developing my confidence, screen presence, body language, and overall personality.</p><br /><p>I believe acting is more than appearance. It is about expression, emotion, body language, versatility, and the ability to connect with an audience. I continue to develop my skills as a performer while exploring opportunities in <strong>Tamil cinema, modelling, advertisements, fashion, and other visual platforms</strong>. My journey is still evolving, and my goal is to build a strong identity as an actor and model while making every opportunity count.</p><br /><button className="text-link" onClick={() => go("contact")}>Work with Rameshbabu <ArrowRight size={17} /></button></div></div><div className="stats">{[["—", "Years of experience"], ["—", "Films / projects"], ["—", "Awards"], ["—", "Recognitions"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section id="gallery" className="section gallery-section"><div className="section-heading"><div><p className="eyebrow">Visual archive</p><h2>Gallery</h2></div></div><div className="gallery-slider-wrap"><div className="gallery-slider-controls"><button className="gallery-arrow" onClick={() => setActiveIndex((current) => (current - 1 + filteredGallery.length) % filteredGallery.length)} aria-label="Previous gallery item"><ArrowLeft size={20} /></button><button className="gallery-arrow" onClick={() => setActiveIndex((current) => (current + 1) % filteredGallery.length)} aria-label="Next gallery item"><ArrowRight size={20} /></button></div><div className="gallery-slider"><div className="gallery-slider-track">{filteredGallery.map((item, index) => {
          const offset = (index - activeIndex + filteredGallery.length) % filteredGallery.length;
          const position = offset > filteredGallery.length / 2 ? offset - filteredGallery.length : offset;
          const isVisible = Math.abs(position) <= 2;

          if (!isVisible) return null;

          return <button className={`gallery-item ${position === 0 ? "gallery-item-center" : ""}`} key={item[2]} onClick={() => setLightbox(gallery.indexOf(item))} style={{ transform: `translate(-50%, -50%) translateX(${position * 170}px) scale(${position === 0 ? 1.18 : 0.82}) rotateY(${position * -22}deg)`, zIndex: position === 0 ? 3 : 2 - Math.abs(position), opacity: Math.abs(position) > 1 ? 0.7 : 1 }}>
            <Image src={item[2]} alt={`${item[1]} gallery placeholder`} fill sizes="(max-width: 768px) 74vw, 28vw" />
            <span className="gallery-overlay"><small>{item[0]}</small><strong>{item[1]}</strong></span>
          </button>;
        })}</div></div></div></section>
    <section id="awards" className="section awards-section"><div className="section-heading"><div><p className="eyebrow">The journey so far</p><h2>Awards &<br /><em>Recognition</em></h2></div></div><div className="awards-layout"><div className="award-list">{awards.map((title, i) => <article className="award-row" key={title}><span className="award-index">0{i + 1}</span><span className="award-year">{i === 0 ? "2025" : i === 1 ? "2026" : "2025"}</span><div><h3>{i === 2 ? "REPRESENTED INDIA AS MISTER UNIVERSE INDIA AND WON ICONIC MR. INDIA 2025 1ST RUNNER-UP" : title}</h3><p>{i === 0 ? <>In 2025, I represented India at <strong>Mr. Universe</strong>, where I secured the <strong>Runner-Up</strong> title and became the <strong>first Indian</strong> to achieve a Runner-Up position at Mr. Universe.</> : i === 1 ? <>Acting has always been one of my greatest passions. I made my acting debut as the lead hero in the <strong>Tamil film Andharan</strong>, marking an important milestone in my journey from the world of fitness and fashion into cinema.</> : < >In 2025, I proudly represented India as <strong>Mister Universe India</strong> and secured the prestigious <strong>1st Runner-Up title at Iconic Mr. India 2025</strong>, marking a significant achievement on the national pageant stage.</>}</p></div><Sparkles size={19} /></article>)}</div><div className="award-slider-panel"><div className="award-slider"><div className="award-slider-track">{awardImages.map((image, index) => <div className={awardImageIndex === index ? "award-slide award-slide-active" : "award-slide"} key={image}><Image src={image} alt="Recognition gallery" fill sizes="(max-width: 768px) 100vw, 30vw" /></div>)}</div><div className="award-slider-dots">{awardImages.map((image, index) => <button className={awardImageIndex === index ? "award-dot award-dot-active" : "award-dot"} onClick={() => setAwardImageIndex(index)} key={`${image}-${index}`} aria-label={`Show slide ${index + 1}`} />)}</div></div></div></div></section>
    <section id="press" className="section press-section"><div className="section-heading"><div><p className="eyebrow">From the archive</p><h2>Portfolio</h2></div></div><div className="press-tabs">{["All", "Movies", "Ads"].map((tab) => <button className={pressFilter === tab ? "press-tab press-tab-active" : "press-tab"} onClick={() => setPressFilter(tab)} key={tab}>{tab}</button>)}</div><div className="news-grid">{displayedPressItems.map(([type, title, image]) => <article className="news-card" key={title}><div className="news-image"><Image src={image} alt="Press image placeholder" fill sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="news-info"><div className="news-meta"><span>{type}</span></div><h3>{title}</h3></div></article>)}</div>{visiblePressItems.length > 3 && <button className="load-more" onClick={() => setVisibleCount((count) => count >= visiblePressItems.length ? 3 : visiblePressItems.length)}>{visiblePressItems.length > displayedPressItems.length ? "Load more" : "Hide more"}</button>}</section>
    <section id="contact" className="contact-section"><div className="contact-grid"><div><p className="eyebrow">Contact</p><h2>Let&apos;s make<br /><em>something real.</em></h2><p className="contact-intro">For casting, collaborations, media enquiries and professional opportunities, reach out directly.</p><div className="contact-links"><a href="tel:8778500904"><Phone size={17} /><span>Phone<br /><strong>8778500904, 7904102036</strong></span></a><a href="mailto:rameshgeetha1816@gmail.com"><Mail size={17} /><span>Email<br /><strong>rameshgeetha1816@gmail.com</strong></span></a><a href="https://instagram.com/RAMESHBABU______" target="_blank"><Camera size={17} /><span>Instagram<br /><strong>@RAMESHBABU______</strong></span></a></div></div><div className="contact-note"><Quote size={28} /><p>&quot;The camera doesn&apos;t just capture a face. It captures a feeling.&quot;</p><span>— Rameshbabu</span></div></div></section>
    <footer><div className="footer-top"><div className="footer-brand"><span>R</span><h3>RAMESHBABU</h3><p>Cine Actor & MODEL</p></div><div className="footer-nav">{nav.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div><div className="footer-contact"><p>Bookings & enquiries</p><a href="tel:8778500904">8778500904, 7904102036</a><a href="mailto:rameshgeetha1816@gmail.com">rameshgeetha1816@gmail.com</a></div></div><div className="footer-bottom"><span>© 2026 Rameshbabu. All Rights Reserved.</span><span>Designed and developed by amwebz❤️</span></div></footer>
    <a className="whatsapp" href="https://wa.me/917904102036" target="_blank" aria-label="Chat on WhatsApp"><i className="fa fa-whatsapp" aria-hidden="true"></i></a><button className={`back-top ${scrolled ? "back-top-visible" : ""}`} onClick={() => go("home")} aria-label="Back to top"><ArrowUp size={18} /></button>
    {lightbox !== null && <div className="lightbox"><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close gallery"><X /></button><button className="lightbox-arrow left" onClick={() => setLightbox((lightbox + gallery.length - 1) % gallery.length)} aria-label="Previous image"><ArrowLeft /></button><Image src={gallery[lightbox][2]} alt={gallery[lightbox][1]} width={1400} height={1000} /><button className="lightbox-arrow right" onClick={() => setLightbox((lightbox + 1) % gallery.length)} aria-label="Next image"><ArrowRight /></button><p>{gallery[lightbox][0]} / {gallery[lightbox][1]}</p></div>}
    {enquiry && <div className="modal-backdrop" onClick={() => setEnquiry(false)}><div className="enquiry-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setEnquiry(false)} aria-label="Close enquiry"><X /></button>{sent ? <div className="success-message"><Sparkles size={30} /><h2>Thank you.</h2><p>Your enquiry has been noted. We&apos;ll be in touch soon.</p><button className="button button-gold" onClick={() => setEnquiry(false)}>Close</button></div> : <><p className="eyebrow eyebrow-dark">Let&apos;s connect</p><h2>Make an enquiry</h2><form onSubmit={(e) => { e.preventDefault(); const form = e.currentTarget; const formData = new FormData(form); const subject = encodeURIComponent(String(formData.get("subject"))); const body = encodeURIComponent(`Name: ${formData.get("name")}\nPhone: ${formData.get("phone")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`); form.reset(); setSent(false); setEnquiry(false); window.location.href = `mailto:rameshgeetha1816@gmail.com?subject=${subject}&body=${body}`; }}><label>Name<input required name="name" /></label><label>Phone number<input required name="phone" type="tel" /></label><label>Email<input required name="email" type="email" /></label><label>Subject<input required name="subject" /></label><label>Message<textarea required name="message" rows={4} /></label><button className="button button-dark" type="submit">Submit enquiry <ArrowRight size={16} /></button></form></>}</div></div>}
  </main>;
}
