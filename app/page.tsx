'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { useState } from 'react'

const places = [
  { name: 'Seoul', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gyeongbok-gung%20palace.jpg?width=1200', detail: 'Palaces, cafes and city lights' },
  { name: 'Busan', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Haeundae%20Beach.jpg?width=1200', detail: 'Beaches, seafood and sunsets' },
  { name: 'Jeju', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeju%20-%20Seongsan%20Ilchulbong%202.JPG?width=1200', detail: 'Trails, waterfalls and calm' },
]

export default function HomePage() {
  const [activePlace, setActivePlace] = useState(0)
  const place = places[activePlace]

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">K</span><span>K-Trip Buddy</span></Link>
        <nav className="site-nav" aria-label="Main navigation"><Link className="nav-link active" href="/">Home</Link><a className="nav-link" href="#places">Places</a><Link className="nav-link" href="/phrases">Phrases</Link></nav>
        <Link className="header-cta" href="/phrases">Learn Korean <ArrowRight size={16} /></Link>
      </header>

      <section className="hero content-width">
        <div className="hero-copy"><div className="eyebrow"><Sparkles size={15} /> Your pocket guide to Korea</div><h1>Feel at home<br /><em>in Korea.</em></h1><p>Discover unforgettable places, local favorites, and the Korean phrases that make every moment a little easier.</p><div className="hero-actions"><Link className="primary-button" href="#places">Explore places <ArrowRight size={18} /></Link><Link className="text-link" href="/phrases">Learn easy Korean</Link></div></div>
        <div className="hero-art" aria-label="A travel photo of Gyeongbokgung Palace in Seoul"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Gyeongbok-gung%20palace.jpg?width=1600" alt="Gyeongbokgung Palace in Seoul" /><div className="hero-caption"><MapPin size={16} /><span>Seoul, South Korea</span></div></div>
      </section>

      <section className="places content-width" id="places"><div className="section-heading"><div><span className="eyebrow">Make your trip yours</span><h2>Places to fall in love with</h2></div><p>From the energy of Seoul to the quiet beauty of Jeju, find a Korea that feels like yours.</p></div><div className="place-grid">{places.map((item, index) => <button className={`destination-card ${index === activePlace ? 'selected' : ''}`} type="button" key={item.name} onClick={() => setActivePlace(index)} aria-pressed={index === activePlace}><img src={item.image} alt={`${item.name} travel destination`} /><span className="destination-overlay"><strong>{item.name}</strong><small>{item.detail}</small></span></button>)}</div><p className="selected-note"><MapPin size={15} /> Planning for {place.name}? {place.detail}.</p></section>

      <section className="phrase-promo content-width"><div><span className="eyebrow">Speak with confidence</span><h2>A little Korean goes a long way.</h2><p>Learn useful phrases for ordering food, getting around, shopping and making new friends.</p></div><Link className="primary-button coral" href="/phrases">Explore phrases <ArrowRight size={18} /></Link></section>
      <footer className="site-footer content-width"><span>© 2026 K-Trip Buddy</span><span>Made for curious travelers</span></footer>
    </main>
  )
}
