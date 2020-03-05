import { createGlobalStyle } from 'styled-components';

import CalligraphrTTF from './Calligraphr-Regular.ttf';
import CalligraphrWOFF from './Calligraphr-Regular.woff';
import CalligraphrWOFF2 from './Calligraphr-Regular.woff2';

export const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Calligraphr';
        src: local('Calligraphr'), local('Calligraphr Regular'), url(${CalligraphrTTF}) format('truetype'),
        url(${CalligraphrWOFF}) format('woff2'),
        url(${CalligraphrWOFF2}) format('woff');
    }
`;
