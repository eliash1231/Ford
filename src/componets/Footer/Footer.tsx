import React from 'react';
import './Footer.styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/020/500/779/non_2x/ford-brand-logo-car-symbol-white-design-usa-automobile-illustration-with-black-background-free-vector.jpg"
                    alt="Ford Logo"
                    className="logo"
                />
                <div className="contact-info">
                    <p><strong>Agencia Ford</strong></p>
                    <p>Dirección: San Pedro Tultepec, Lerma, Mexico</p>
                    <p>Teléfono: (729) 276-5866</p>
                    <p>Email: elias2018ortega@gmail.com</p>
                    <p>Horario: Lunes a Viernes 9:00 - 18:00</p>
                </div>
                <div className="social-icons-container">
                    <a href="https://www.facebook.com/" className="social-icon" aria-label="Facebook"></a>
                    <a href="https://www.instagram.com/" className="social-icon" aria-label="Instagram"></a>
                    <a href="https://twitter.com" className="social-icon" aria-label="Twitter"></a>
                    <a href="https://www.linkedin.com/feed/" className="social-icon" aria-label="LinkedIn"></a>
                </div>
                <ul className="footer-menu-container">
                    <li className="menu-item"><a href="#">Legal</a></li>
                    <li className="menu-item"><a href="#">Cookies</a></li>
                    <li className="menu-item"><a href="#">Privacy</a></li>
                    <li className="menu-item"><a href="#">Shipping</a></li>
                    <li className="menu-item"><a href="#">Refunds</a></li>
                </ul>
            </div>
            <span className="copyright">&copy; 2024 Agencia Ford. Todos los derechos reservados.</span>
        </footer>
    );
};

export { Footer };

