import './Hero.css'

function Hero() {
  const handleCTA = (e) => {
    e.preventDefault()
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKnowMore = (e) => {
    e.preventDefault()
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Psicologia Clínica
          </div>

          <h1 className="hero__title">
            Cuidar da mente é o <br />
            <span className="hero__title-accent">primeiro passo</span> para <br />
            uma vida plena
          </h1>

          <p className="hero__description">
            Na <strong>Mente Serena</strong>, acreditamos que o autoconhecimento 
            é a chave para o bem-estar emocional. Nossa equipe de psicólogos 
            qualificados está pronta para acolher você nessa jornada.
          </p>

          <div className="hero__actions">
            <a href="#contato" className="btn btn-primary btn--lg" onClick={handleCTA}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Agendar Consulta
            </a>
            <a href="#sobre" className="btn btn-outline" onClick={handleKnowMore}>
              Saiba Mais
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">+2.500</span>
              <span className="hero__stat-label">Pacientes atendidos</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">12</span>
              <span className="hero__stat-label">Anos de experiência</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">Satisfação dos pacientes</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--1">
            <div className="hero__card-icon">🧠</div>
            <span>Terapia Cognitiva</span>
          </div>
          <div className="hero__card hero__card--2">
            <div className="hero__card-icon">💚</div>
            <span>Acolhimento</span>
          </div>
          <div className="hero__card hero__card--3">
            <div className="hero__card-icon">🌿</div>
            <span>Bem-estar</span>
          </div>
          <div className="hero__illustration">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="180" fill="url(#heroGrad)" opacity="0.15"/>
              <circle cx="200" cy="200" r="130" fill="url(#heroGrad)" opacity="0.1"/>
              <circle cx="200" cy="200" r="80" fill="url(#heroGrad)" opacity="0.08"/>
              <text x="200" y="220" textAnchor="middle" fontFamily="serif" fontSize="120" fontWeight="bold" fill="#7c9a8e" opacity="0.6">Ψ</text>
              <defs>
                <radialGradient id="heroGrad" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(180)">
                  <stop stopColor="#7c9a8e"/>
                  <stop offset="1" stopColor="#9a87bd" stopOpacity="0.3"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Role para explorar</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
