import './Services.css'

function Services() {
  const services = [
    {
      icon: '🧠',
      title: 'Terapia Individual',
      description: 'Sessões personalizadas para adultos, focadas no autoconhecimento, manejo de emoções e desenvolvimento pessoal.',
      color: '#7c9a8e'
    },
    {
      icon: '💑',
      title: 'Terapia de Casal',
      description: 'Atendimento voltado para a melhoria da comunicação, resolução de conflitos e fortalecimento do vínculo afetivo.',
      color: '#9a87bd'
    },
    {
      icon: '🧒',
      title: 'Terapia Infantil',
      description: 'Acompanhamento psicológico especializado para crianças, utilizando técnicas lúdicas e adequadas à faixa etária.',
      color: '#d4a574'
    },
    {
      icon: '📋',
      title: 'Avaliação Psicológica',
      description: 'Avaliação abrangente com aplicação de testes psicológicos validados para diagnóstico e orientação terapêutica.',
      color: '#7ca09a'
    },
    {
      icon: '🎯',
      title: 'Orientação Profissional',
      description: 'Processo de autoconhecimento para auxiliar na escolha ou transição de carreira, identificando habilidades e interesses.',
      color: '#8e7ca0'
    },
    {
      icon: '💻',
      title: 'Psicoterapia Online',
      description: 'Atendimento à distância com a mesma qualidade do presencial, oferecendo conforto e flexibilidade na sua rotina.',
      color: '#7c8e9a'
    }
  ]

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-tag">Nossos Serviços</span>
          <h2 className="section-title">Cuidados especializados para <br />o seu bem-estar</h2>
          <p className="section-subtitle">
            Oferecemos uma variedade de serviços psicológicos, sempre com abordagem 
            humanizada e foco nas necessidades individuais de cada paciente.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div className="services__card" key={index}>
              <div className="services__card-accent" style={{ background: service.color }}></div>
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
              <div className="services__card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
