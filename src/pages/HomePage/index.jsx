import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Body from '../../components/Body';
import './index.css';


export default function HomePage(){
    return (
        <div className='HomePage'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};