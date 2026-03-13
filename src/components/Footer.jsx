import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'equipe', label: 'Equipe' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' },
  ]

  const handleNavClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">Ψ</span>
              <span className="footer__logo-text">Mente Serena</span>
            </div>
            <p className="footer__description">
              Cuidar da mente é o primeiro passo para uma vida plena. 
              Sua jornada de autoconhecimento começa aqui.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook" title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Links Rápidos</h4>
            <ul>
              {quickLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Serviços</h4>
            <ul>
              <li><a href="#servicos" onClick={(e) => handleNavClick(e, 'servicos')}>Terapia Individual</a></li>
              <li><a href="#servicos" onClick={(e) => handleNavClick(e, 'servicos')}>Terapia de Casal</a></li>
              <li><a href="#servicos" onClick={(e) => handleNavClick(e, 'servicos')}>Terapia Infantil</a></li>
              <li><a href="#servicos" onClick={(e) => handleNavClick(e, 'servicos')}>Psicoterapia Online</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Horário</h4>
            <ul className="footer__schedule">
              <li>
                <span>Seg — Sex</span>
                <span>08:00 — 20:00</span>
              </li>
              <li>
                <span>Sábado</span>
                <span>09:00 — 14:00</span>
              </li>
              <li>
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Mente Serena — Psicologia Clínica. Todos os direitos reservados.</p>
          <p className="footer__disclaimer">
            Este é um projeto fictício desenvolvido para fins acadêmicos.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
