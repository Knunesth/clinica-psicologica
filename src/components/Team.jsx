import './Team.css'

function Team() {
  const professionals = [
    {
      name: 'Dra. Camila Rodrigues',
      specialty: 'Psicóloga Clínica — TCC',
      crp: 'CRP 06/123456',
      bio: 'Especialista em Terapia Cognitivo-Comportamental com foco em transtornos de ansiedade e depressão. Mais de 10 anos de experiência clínica.',
      color: '#7c9a8e',
      initials: 'CR'
    },
    {
      name: 'Dr. Rafael Mendes',
      specialty: 'Psicólogo — Psicanálise',
      crp: 'CRP 06/234567',
      bio: 'Psicanalista com formação no Instituto de Psicanálise. Atua com adultos em questões de autoconhecimento, relacionamentos e luto.',
      color: '#9a87bd',
      initials: 'RM'
    },
    {
      name: 'Dra. Isabela Santos',
      specialty: 'Neuropsicóloga',
      crp: 'CRP 06/345678',
      bio: 'Especialista em avaliação neuropsicológica e reabilitação cognitiva. Experiência com crianças, adolescentes e idosos.',
      color: '#d4a574',
      initials: 'IS'
    },
    {
      name: 'Dr. Lucas Oliveira',
      specialty: 'Psicólogo — Gestalt-terapia',
      crp: 'CRP 06/456789',
      bio: 'Gestalt-terapeuta com foco em terapia de casal e familiar. Trabalha com abordagem fenomenológica e relacionamento terapêutico.',
      color: '#7c8e9a',
      initials: 'LO'
    }
  ]

  return (
    <section id="equipe" className="team">
      <div className="container">
        <div className="team__header">
          <span className="section-tag">Nossa Equipe</span>
          <h2 className="section-title">Profissionais dedicados <br />ao seu cuidado</h2>
          <p className="section-subtitle">
            Conheça os psicólogos que fazem da Mente Serena um espaço de 
            transformação e acolhimento.
          </p>
        </div>

        <div className="team__grid">
          {professionals.map((pro, index) => (
            <div className="team__card" key={index}>
              <div className="team__card-avatar" style={{ background: pro.color }}>
                <span>{pro.initials}</span>
              </div>
              <div className="team__card-info">
                <h3 className="team__card-name">{pro.name}</h3>
                <p className="team__card-specialty">{pro.specialty}</p>
                <span className="team__card-crp">{pro.crp}</span>
                <p className="team__card-bio">{pro.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
