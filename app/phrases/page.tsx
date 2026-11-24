'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Volume2, Utensils, CarFront, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

const phrases = [
  { category: 'Restaurant', icon: Utensils, english: 'How much is this?', korean: '이거 얼마예요?', romanized: 'I-geo eol-ma-ye-yo?' },
  { category: 'Taxi', icon: CarFront, english: 'Please take me here.', korean: '여기로 가 주세요.', romanized: 'Yeo-gi-ro ga ju-se-yo' },
  { category: 'Shopping', icon: ShoppingBag, english: 'Do you have this in a smaller size?', korean: '더 작은 사이즈 있어요?', romanized: 'Deo ja-geun sa-i-jeu i-sseo-yo?' },
]

export default function PhrasesPage() {
  const [active, setActive] = useState(0)
  const phrase = phrases[active]
  const Icon = phrase.icon
  const speakPhrase = () => { if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(phrase.korean); utterance.lang = 'ko-KR'; window.speechSynthesis.speak(utterance) } }

  return <main><header className="site-header"><Link className="brand" href="/"><span className="brand-mark">K</span><span>K-Trip Buddy</span></Link><nav className="site-nav" aria-label="Main navigation"><Link className="nav-link" href="/">Home</Link><Link className="nav-link" href="/#places">Places</Link><Link className="nav-link active" href="/phrases">Phrases</Link></nav><Link className="header-cta" href="/">Back home <ArrowRight size={16} /></Link></header><section className="phrases-page content-width"><Link className="back-link" href="/"><ArrowLeft size={17} /> Back to home</Link><div className="phrase-intro"><span className="eyebrow">Your phrasebook</span><h1>Say hello to Korea.</h1><p>Useful Korean for the moments you will remember.</p></div><div className="phrase-category-grid" role="tablist" aria-label="Phrase categories">{phrases.map((item, index) => { const ItemIcon = item.icon; return <button className={`phrase-category ${active === index ? 'active' : ''}`} type="button" key={item.category} onClick={() => setActive(index)} role="tab" aria-selected={active === index}><ItemIcon size={20} /><span>{item.category}</span></button> })}</div><section className="phrase-feature" aria-live="polite"><div className="phrase-label"><Icon size={19} /> {phrase.category}</div><p>English: “{phrase.english}”</p><strong lang="ko">{phrase.korean}</strong><span>{phrase.romanized}</span><button className="listen-button" type="button" onClick={speakPhrase}><Volume2 size={18} /> Listen</button></section><div className="phrase-controls"><button type="button" onClick={() => setActive((active - 1 + phrases.length) % phrases.length)}><ArrowLeft size={17} /> Back</button><button type="button" onClick={() => setActive((active + 1) % phrases.length)}>Next <ArrowRight size={17} /></button></div></section></main>
}
