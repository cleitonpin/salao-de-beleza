import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
    {
        id: 1,
        url: '#promotions',
        text: 'Promoções',
    },
    {
        id: 2,
        url: '#sobre-nos',
        text: 'Sobre',
    },
    {
        id: 3,
        url: '#agendamentos',
        text: 'Agendamentos',
    },
    {
        id: 4,
        url: '/registrar',
        text: 'Cadastre-se'
    }
];

export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin />,
    },
];