import { Global } from '@mantine/core';
import heavy from '/assets/fonts/Calibre/CalibreBlack.otf';
import heavyItalic from '/assets/fonts/Calibre/CalibreBlackItalic.otf';
import bold from '/assets/fonts/Calibre/CalibreBold.otf';
import boldItalic from '/assets/fonts/Calibre/CalibreBoldItalic.otf';
import semiBold from '/assets/fonts/Calibre/CalibreSemiBold.otf';
import semiBoldItalic from '/assets/fonts/Calibre/CalibreSemiBoldItalic.otf';
import medium from '/assets/fonts/Calibre/CalibreMedium.otf';
import mediumItalic from '/assets/fonts/Calibre/CalibreMediumItalic.otf';
import regular from '/assets/fonts/Calibre/CalibreRegular.otf';
import regularItalic from '/assets/fonts/Calibre/CalibreRegularItalic.otf';
import light from '/assets/fonts/Calibre/CalibreLight.otf';
import lightItalic from '/assets/fonts/Calibre/CalibreLightItalic.otf';
import thin from '/assets/fonts/Calibre/CalibreThin.otf';
import thinItalic from '/assets/fonts/Calibre/CalibreThinItalic.otf';

export function Calibre() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${heavy}') format("truetype")`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${heavyItalic}') format("truetype")`,
            fontWeight: 900,
            fontStyle: 'italic',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${bold}') format("truetype")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${boldItalic}') format("truetype")`,
            fontWeight: 700,
            fontStyle: 'italic',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${semiBold}') format("truetype")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${semiBoldItalic}') format("truetype")`,
            fontWeight: 600,
            fontStyle: 'italic',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${medium}') format("truetype")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${mediumItalic}') format("truetype")`,
            fontWeight: 500,
            fontStyle: 'italic',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${regular}') format("truetype")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${regularItalic}') format("truetype")`,
            fontWeight: 400,
            fontStyle: 'italic',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${light}') format("truetype")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${lightItalic}') format("truetype")`,
            fontWeight: 300,
            fontStyle: 'italic',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${thin}') format("truetype")`,
            fontWeight: 100,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Calibre',
            src: `url('${thinItalic}') format("truetype")`,
            fontWeight: 100,
            fontStyle: 'italic',
          },
        },
      ]}
    />
  );
}
