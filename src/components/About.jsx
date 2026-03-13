import './About.css'

function About() {
  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      title: 'Acolhimento',
      description: 'Oferecemos um espaço seguro e livre de julgamentos, onde cada pessoa é ouvida e respeitada em sua individualidade.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      ),
      title: 'Ética Profissional',
      description: 'Atuamos com rigoroso compromisso ético, respeitando o sigilo terapêutico e os princípios do Conselho Federal de Psicologia.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      title: 'Abordagem Integrativa',
      description: 'Combinamos diferentes abordagens psicológicas para oferecer o tratamento mais adequado a cada paciente.'
    }
  ]

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-tag">Sobre Nós</span>
            <h2 className="section-title">
              Sua jornada de autoconhecimento <br />
              <span className="about__title-accent">começa aqui</span>
            </h2>
            <p className="section-subtitle">
              Fundada em 2014, a <strong>Mente Serena</strong> nasceu com o propósito 
              de tornar a psicoterapia acessível e acolhedora. Acreditamos que cuidar 
              da saúde mental é tão importante quanto cuidar da saúde física.
            </p>
            <p className="about__text">
              Nossa equipe é formada por psicólogos especializados em diversas abordagens, 
              como Terapia Cognitivo-Comportamental, Psicanálise, Gestalt-terapia e 
              Psicologia Humanista. Trabalhamos com atendimento presencial e online, 
              garantindo flexibilidade e conforto para nossos pacientes.
            </p>
          </div>

          <div className="about__values">
            {values.map((value, index) => (
              <div className="about__value-card" key={index}>
                <div className="about__value-icon">
                  {value.icon}
                </div>
                <div className="about__value-text">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
