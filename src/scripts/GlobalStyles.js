import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 300;
        src: local('Prompt Light Italic'), local('Prompt-LightItalic'), url('/fonts/Prompt-LightItalic-Thai.woff2') format('woff2');
        unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 300;
        src: local('Prompt Light Italic'), local('Prompt-LightItalic'), url('/fonts/Prompt-LightItalic-Vietnamese.woff2') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 300;
        src: local('Prompt Light Italic'), local('Prompt-LightItalic'), url('/fonts/Prompt-LightItalic-LatinExt.woff2') format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 300;
        src: local('Prompt Light Italic'), local('Prompt-LightItalic'), url('/fonts/Prompt-LightItalic-Latin.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 400;
        src: local('Prompt Italic'), local('Prompt-Italic'), url('/fonts/Prompt-Italic-Thai.woff2') format('woff2');
        unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 400;
        src: local('Prompt Italic'), local('Prompt-Italic'), url('/fonts/Prompt-Italic-Vietnamese.woff2') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 400;
        src: local('Prompt Italic'), local('Prompt-Italic'), url('/fonts/Prompt-Italic-LatinExt.woff2') format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 400;
        src: local('Prompt Italic'), local('Prompt-Italic'), url('/fonts/Prompt-Italic-Latin.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 700;
        src: local('Prompt Bold Italic'), local('Prompt-BoldItalic'), url('/fonts/Prompt-BoldItalic-Thai.woff2') format('woff2');
        unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 700;
        src: local('Prompt Bold Italic'), local('Prompt-BoldItalic'), url('/fonts/Prompt-BoldItalic-Vietnamese.woff2') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 700;
        src: local('Prompt Bold Italic'), local('Prompt-BoldItalic'), url('/fonts/Prompt-BoldItalic-LatinExt.woff2') format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: italic;
        font-weight: 700;
        src: local('Prompt Bold Italic'), local('Prompt-BoldItalic'), url('/fonts/Prompt-BoldItalic-Latin.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 300;
        src: local('Prompt Light'), local('Prompt-Light'), url('/fonts/Prompt-Light-Thai.woff2') format('woff2');
        unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 300;
        src: local('Prompt Light'), local('Prompt-Light'), url('/fonts/Prompt-Light-Vietnamese.woff2') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 300;
        src: local('Prompt Light'), local('Prompt-Light'), url('/fonts/Prompt-Light-LatinExt.woff2') format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 300;
        src: local('Prompt Light'), local('Prompt-Light'), url('/fonts/Prompt-Light-Latin.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 400;
        src: local('Prompt'), local('Prompt-Regular'), url('/fonts/Prompt-Regular-Thai.woff2') format('woff2');
        unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 400;
        src: local('Prompt'), local('Prompt-Regular'), url('/fonts/Prompt-Regular-Vietnamese.woff2') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 400;
        src: local('Prompt'), local('Prompt-Regular'), url('/fonts/Prompt-Regular-LatinExt.woff2') format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 400;
        src: local('Prompt'), local('Prompt-Regular'), url('/fonts/Prompt-Regular-Latin.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 700;
        src: local('Prompt Bold'), local('Prompt-Bold'), url('/fonts/Prompt-Bold-Thai.woff2') format('woff2');
        unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 700;
        src: local('Prompt Bold'), local('Prompt-Bold'), url('/fonts/Prompt-Bold-Vietnamese.woff2') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 700;
        src: local('Prompt Bold'), local('Prompt-Bold'), url('/fonts/Prompt-Bold-LatinExt.woff2') format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 700;
        src: local('Prompt Bold'), local('Prompt-Bold'), url('/fonts/Prompt-Bold-Latin.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    body {
        font-family: 'Prompt', sans-serif;
    }
`

export default GlobalStyles;