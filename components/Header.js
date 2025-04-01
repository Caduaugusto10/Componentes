import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Meu Projeto</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/new-page">Nova Página</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;