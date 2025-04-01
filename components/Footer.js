import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Meu Projeto. Todos os direitos reservados.</p>
            <nav>
                <ul>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                    <li><a href="/privacidade">Política de Privacidade</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;