import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
    const cardsData = [
        {
            title: 'Paisagem',
            description: 'Uma bela paisagem de fim de tarde com montanhas.',
            image: 'https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg?class=ogImageRectangle'
        },
    ];

    return (
        <div>
            <Header />
            <main>
                {cardsData.map((card, index) => (
                    <Card 
                        key={index} 
                        title={card.title} 
                        description={card.description} 
                        image={card.image} 
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Home;