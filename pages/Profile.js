import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Profile = () => {
    return (
        <div>
            <Header />
            <h1>Nova Página</h1>
            <Card 
                title="Título do Cartão" 
                description="Descrição do cartão que fornece informações relevantes." 
                image="url-da-imagem.jpg" 
            />
            <Footer />
        </div>
    );
};

export default Profile;