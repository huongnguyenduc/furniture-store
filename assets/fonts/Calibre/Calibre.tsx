import { Global } from '@mantine/core';
import heavy from './CalibreBlack.otf';
import heavyItalic from './CalibreBlackItalic.otf';
import bold from './CalibreBold.otf';
import boldItalic from './CalibreBoldItalic.otf';
import semiBold from './CalibreSemiBold.otf';
import semiBoldItalic from './CalibreSemiBoldItalic.otf';
import medium from './CalibreMedium.otf';
import mediumItalic from './CalibreMediumItalic.otf';
import regular from './CalibreRegular.otf';
import regularItalic from './CalibreRegularItalic.otf';
import light from './CalibreLight.otf';
import lightItalic from './CalibreLightItalic.otf';
import thin from './CalibreThin.otf';
import thinItalic from './CalibreThinItalic.otf';

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
