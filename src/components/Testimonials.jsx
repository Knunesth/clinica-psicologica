import { useState } from 'react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Fernanda S.',
      text: 'A Mente Serena transformou a minha relação comigo mesma. Depois de meses de terapia com a Dra. Camila, aprendi a lidar com a ansiedade de forma que nunca imaginei ser possível. Sou muito grata por cada sessão.',
      rating: 5,
      time: 'Paciente há 2 anos'
    },
    {
      name: 'João Paulo R.',
      text: 'Procurei ajuda em um momento muito difícil da minha vida e encontrei um acolhimento verdadeiro. O Dr. Rafael me ajudou a entender padrões que eu repetia há anos. Recomendo de olhos fechados.',
      rating: 5,
      time: 'Paciente há 1 ano'
    },
    {
      name: 'Ana Clara M.',
      text: 'Meu filho faz acompanhamento com a Dra. Isabela e a evolução dele tem sido incrível. A equipe é muito cuidadosa e sempre nos mantém informados sobre o progresso. Ambiente super acolhedor!',
      rating: 5,
      time: 'Mãe de paciente'
    },
    {
      name: 'Carlos Eduardo L.',
      text: 'A terapia de casal com o Dr. Lucas salvou meu casamento. Aprendemos a nos comunicar melhor e hoje temos uma relação muito mais saudável. O ambiente da clínica transmite muita paz.',
      rating: 5,
      time: 'Paciente há 8 meses'
    },
    {
      name: 'Beatriz Costa',
      text: 'Faço terapia online e a experiência é tão boa quanto presencial. A plataforma funciona bem e a Dra. Camila é extremamente profissional. Me sinto acolhida mesmo à distância.',
      rating: 5,
      time: 'Paciente online'
    },
    {
      name: 'Ricardo Almeida',
      text: 'A orientação profissional me ajudou a tomar uma decisão de carreira que mudou minha vida. O processo de autoconhecimento foi fundamental para entender o que realmente me motiva.',
      rating: 5,
      time: 'Paciente há 6 meses'
    }
  ]

  const [active, setActive] = useState(0)
  const visibleCount = 3

  const next = () => {
    setActive((prev) => (prev + 1) % (testimonials.length - visibleCount + 1))
  }

  const prev = () => {
    setActive((prev) => (prev - 1 + (testimonials.length - visibleCount + 1)) % (testimonials.length - visibleCount + 1))
  }

  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <div>
            <span className="section-tag">Depoimentos</span>
            <h2 className="section-title">O que nossos pacientes dizem</h2>
          </div>
          <div className="testimonials__nav">
            <button className="testimonials__nav-btn" onClick={prev} aria-label="Anterior">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="testimonials__nav-btn" onClick={next} aria-label="Próximo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials__track">
          <div
            className="testimonials__slider"
            style={{ transform: `translateX(-${active * (100 / visibleCount)}%)` }}
          >
            {testimonials.map((t, index) => (
              <div className="testimonials__card" key={index}>
                <div className="testimonials__quote">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="testimonials__text">{t.text}</p>
                <div className="testimonials__stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#e8b84b" stroke="#e8b84b" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <div className="testimonials__author">
                  <span className="testimonials__author-name">{t.name}</span>
                  <span className="testimonials__author-time">{t.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
