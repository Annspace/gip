import { createGlobalStyle } from 'styled-components';


import MontserratRegularTtf from './fonts/Montserrat-Regular.ttf';
import MontserratBlackTtf from './fonts/Montserrat-Black.ttf';
import MontserratBlackItalicTtf from './fonts/Montserrat-BlackItalic.ttf';
import MontserratBoldTtf from './fonts/Montserrat-Bold.ttf';
import MontserratBoldItalicTtf from './fonts/Montserrat-BoldItalic.ttf';
import MontserratExtraBoldTtf from './fonts/Montserrat-ExtraBold.ttf';
import MontserratExtraBoldItallicTtf from './fonts/Montserrat-ExtraBoldItalic.ttf';
import MontserratExtraLightTtf from './fonts/Montserrat-ExtraLight.ttf';
import MontserratExtraLightItallicTtf from './fonts/Montserrat-ExtraLightItalic.ttf';
import MontserratItallicTtf from './fonts/Montserrat-Italic.ttf';
import MontserratLightTtf from './fonts/Montserrat-Light.ttf';
import MontserratLightItalicTtf from './fonts/Montserrat-LightItalic.ttf';
import MontserratMediumTtf from './fonts/Montserrat-Medium.ttf';
import MontserratMediumItalicTtf from './fonts/Montserrat-MediumItalic.ttf';
import MontserratSemiBoldTtf from './fonts/Montserrat-SemiBold.ttf';
import MontserratSemiBoldItalicTtf from './fonts/Montserrat-SemiBoldItalic.ttf';
import MontserratThinTtf from './fonts/Montserrat-Thin.ttf';
import MontserratThinItalicTtf from './fonts/Montserrat-ThinItalic.ttf';

export default createGlobalStyle`

 @font-face {
    font-family: 'Montserrat';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratRegularTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: normal;
    font-style: italic;
    font-display: swap;
    src: url(${MontserratItallicTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratBoldTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: bold;
    font-style: italic;
    font-display: swap;
    src: url(${MontserratBoldItalicTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 800;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratExtraBoldTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 800;
    font-style: italic;
    font-display: swap;
    src: url(${MontserratExtraBoldItallicTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 900;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratBlackTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 900;
    font-style: italic;
    font-display: swap;
    src: url(${MontserratBlackItalicTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 200;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratExtraLightTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 200;
    font-style: italic;
    font-display: swap;
    src: url(${MontserratExtraLightItallicTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratLightTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 300;
    font-style: italic;
    font-display: swap;
    src: url(${MontserratLightItalicTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratMediumTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: italic;
    font-display: swap;
    src: url(${MontserratMediumItalicTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratSemiBoldTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    font-style: italic;
    font-display: swap;
    src: url(${MontserratSemiBoldItalicTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 100;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratThinTtf}) format('truetype'),
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 100;
    font-style: italic;
    font-display: swap;
    src: url(${MontserratThinItalicTtf}) format('truetype'),
  }
`;
