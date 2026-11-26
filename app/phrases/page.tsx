'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Volume2, Utensils, CarFront, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

const categories = [
  {
    category: 'Restaurant',
    icon: Utensils,
    phrases: [
      { english: 'How much is this?', korean: '이거 얼마예요?', romanized: 'I-geo eol-ma-ye-yo?' },
      { english: 'Please make it less spicy.', korean: '덜 맵게 해 주세요.', romanized: 'Deol maepge hae juseyo.' },
      { english: 'Can I get the bill, please?', korean: '계산서 주세요.', romanized: 'Gyesanseo juseyo.' },
      { english: 'A table for two, please.', korean: '두 명 자리 부탁드려요.', romanized: 'Du myeong jari butakdeuryeoyo.' },
    ],
  },
  {
    category: 'Taxi',
    icon: CarFront,
    phrases: [
      { english: 'Please take me here.', korean: '여기로 가 주세요.', romanized: 'Yeo-gi-ro ga ju-se-yo' },
      { english: 'Please stop here.', korean: '여기서 세워 주세요.', romanized: 'Yeogiseo sewo juseyo.' },
      { english: 'How long will it take?', korean: '얼마나 걸려요?', romanized: 'Eolmana geollyeoyo?' },
      { english: 'Please turn on the meter.', korean: '미터기 켜 주세요.', romanized: 'Miteogi kyeo juseyo.' },
    ],
  },
  {
    category: 'Shopping',
    icon: ShoppingBag,
    phrases: [
      { english: 'Do you have this in a smaller size?', korean: '더 작은 사이즈 있어요?', romanized: 'Deo ja-geun sa-i-jeu i-sseo-yo?' },
      { english: 'Can I try this on?', korean: '입어 봐도 돼요?', romanized: 'Ibeo bwado dwaeyo?' },
      { english: 'Do you have this in another color?', korean: '다른 색 있어요?', romanized: 'Dareun saek isseoyo?' },
      { english: 'Can I pay by card?', korean: '카드로 결제할 수 있어요?', romanized: 'Kadeuro gyeoljehal su isseoyo?' },
    ],
  },
]

export default function PhrasesPage() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activePhrase, setActivePhrase] = useState(0)
  const category = categories[activeCategory]
  const phrase = category.phrases[activePhrase]
  const Icon = category.icon
  const speakPhrase = () => { if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(phrase.korean); utterance.lang = 'ko-KR'; window.speechSynthesis.speak(utterance) } }

  return <main><header className="site-header"><Link className="brand" href="/"><span className="brand-mark">K</span><span>K-Trip Buddy</span></Link><nav className="site-nav" aria-label="Main navigation"><Link className="nav-link" href="/">Home</Link><Link className="nav-link" href="/#places">Places</Link><Link className="nav-link active" href="/phrases">Phrases</Link></nav><Link className="header-cta" href="/">Back home <ArrowRight size={16} /></Link></header><section className="phrases-page content-width"><Link className="back-link" href="/"><ArrowLeft size={17} /> Back to home</Link><div className="phrase-intro"><span className="eyebrow">Your phrasebook</span><h1>Say hello to Korea.</h1><p>Useful Korean for the moments you will remember.</p></div><div className="phrase-category-grid" role="tablist" aria-label="Phrase categories">{categories.map((item, index) => { const ItemIcon = item.icon; return <button className={`phrase-category ${activeCategory === index ? 'active' : ''}`} type="button" key={item.category} onClick={() => { setActiveCategory(index); setActivePhrase(0) }} role="tab" aria-selected={activeCategory === index}><ItemIcon size={20} /><span>{item.category}</span></button> })}</div><section className="phrase-feature" aria-live="polite"><div className="phrase-label"><Icon size={19} /> {category.category}</div><p>English: “{phrase.english}”</p><strong lang="ko">{phrase.korean}</strong><span>{phrase.romanized}</span><button className="listen-button" type="button" onClick={speakPhrase}><Volume2 size={18} /> Listen</button></section><div className="phrase-controls"><button type="button" onClick={() => setActivePhrase((activePhrase - 1 + category.phrases.length) % category.phrases.length)}><ArrowLeft size={17} /> Back</button><span>{activePhrase + 1} of {category.phrases.length}</span><button type="button" onClick={() => setActivePhrase((activePhrase + 1) % category.phrases.length)}>Next <ArrowRight size={17} /></button></div></section></main>
}
