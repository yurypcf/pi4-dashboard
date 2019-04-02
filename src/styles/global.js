import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
}

body, html, h1, h2, p, ul, li, a {
    background: #000;
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    color: #222222;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
}

/* Flex Global Styles */

.flex {
    display: flex;
}

.f-wrap {
    flex-wrap: wrap;
}

.f-item-1 {
    flex: 1;
}

.row {
    flex-direction: row;
}

.column {
    flex-direction: column;
}

/* FONT NUNITO 
Regular 400
Bold
*/




`