import { createGlobalStyle } from 'styled-components';

import CalligraphrTTF from './Calligraphr-Regular.ttf';
import CalligraphrWOFF from './Calligraphr-Regular.woff';
import CalligraphrWOFF2 from './Calligraphr-Regular.woff2';

import FuturamaTTF from './fr-fal1.ttf';
import FuturamaWOFF from './fr-fal1.woff';

export const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Calligraphr';
        src: local('Calligraphr'), local('Calligraphr Regular'), url(${CalligraphrTTF}) format('truetype'),
        url(${CalligraphrWOFF}) format('woff2'),
        url(${CalligraphrWOFF2}) format('woff');
    }

    @font-face {
        font-family:"Futurama Alien";
        src: url(${FuturamaWOFF}) format("woff"),
        url(${FuturamaTTF}) format("truetype");
        font-weight:normal;
        font-style:normal;
    }
`;
