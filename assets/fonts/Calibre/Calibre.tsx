import { Global } from '@mantine/core';
const heavy = '/fonts/Calibre/CalibreBlack.otf';
const heavyItalic = '/fonts/Calibre/CalibreBlackItalic.otf';
const bold = '/fonts/Calibre/CalibreBold.otf';
const boldItalic = '/fonts/Calibre/CalibreBoldItalic.otf';
const semiBold = '/fonts/Calibre/CalibreSemiBold.otf';
const semiBoldItalic = '/fonts/Calibre/CalibreSemiBoldItalic.otf';
const medium = '/fonts/Calibre/CalibreMedium.otf';
const mediumItalic = '/fonts/Calibre/CalibreMediumItalic.otf';
const regular = '/fonts/Calibre/CalibreRegular.otf';
const regularItalic = '/fonts/Calibre/CalibreRegularItalic.otf';
const light = '/fonts/Calibre/CalibreLight.otf';
const lightItalic = '/fonts/Calibre/CalibreLightItalic.otf';
const thin = '/fonts/Calibre/CalibreThin.otf';
const thinItalic = '/fonts/Calibre/CalibreThinItalic.otf';

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
