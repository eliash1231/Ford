import './Footer.styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Logo y contacto */}
                <div className="footer-top">
                    <img
                        src="/assets/images/Logo.jpeg"
                        alt="Muebles OG"
                        className="logo"
                    />
                    <div className="contact-info">
                        <p><strong>Muebleria OG</strong></p>
                        <p>Dirección: San Pedro Tultepec, Lerma, Mexico</p>
                        <p>Teléfono: (729) 276-5866</p>
                        <p>Email: elias2018ortega@gmail.com</p>
                        <p>Horario: Lunes a Viernes 9:00 - 18:00</p>
                    </div>
                </div>

                {/* Redes sociales */}
                <div className="social-icons-container">
                    <a href="https://www.facebook.com/" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.instagram.com/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://twitter.com" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.linkedin.com/feed/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
                </div>

                {/* Mapa del sitio */}
                <ul className="footer-menu-container">
                    <li className="menu-item"><a href="#">Legal</a></li>
                    <li className="menu-item"><a href="#">Cookies</a></li>
                    <li className="menu-item"><a href="#">Privacy</a></li>
                    <li className="menu-item"><a href="#">Shipping</a></li>
                    <li className="menu-item"><a href="#">Refunds</a></li>
                </ul>

                {/* Suscríbete al boletín */}
                <div className="newsletter-section">
                    <h3>Suscríbete a nuestro boletín</h3>
                    <p>Recibe noticias y ofertas exclusivas directamente en tu bandeja de entrada.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Ingresa tu correo" aria-label="Ingresa tu correo electrónico" required />
                        <button type="submit">Suscribirme</button>
                    </form>
                </div>
            </div>

            {/* Separador visual */}
            <hr className="footer-divider" />

            {/* Copyright */}
            <div className="footer-bottom">
                <span className="copyright">&copy; 2024 Muebleria OG, derechos reservados.</span>
            </div>
        </footer>
    );
};

export { Footer };
