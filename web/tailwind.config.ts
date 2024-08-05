import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
        manrope: ['var(--font-manrope)']
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const hoverDelay = theme('transitionDuration.300', '300ms');

      addUtilities({
        '.bg': {
          backgroundColor: '#191D1F',
          // display: 'flex',
          // flexDirection: 'column',
        },
        '.btn-submit': {
          width: '105px',
          height: '40px',
          borderWidth: '1px',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          color: '#000000',
          fontSize: '14px',
          fontWeight: '700',
          transition: `background-color ${hoverDelay} ease, border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            backgroundColor: '#F27777',
            borderColor: '#F27777',
            color: '#FFFFFF',
          },
        },
        '.btn-close': {
          width: '105px',
          height: '40px',
          borderWidth: '1px',
          borderRadius: '8px',
          backgroundColor: 'transparent',
          borderColor: '#A3A3A3',
          color: '#A3A3A3',
          fontSize: '14px',
          fontWeight: '700',
          transition: `border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            borderColor: '#D4D4D4',
            color: '#D4D4D4',
          },
        },
        '.btn-cancel': {
          width: '160px',
          height: '40px',
          borderWidth: '1px',
          borderRadius: '8px',
          backgroundColor: 'transparent',
          borderColor: '#F27777',
          color: '#F27777',
          fontSize: '14px',
          fontWeight: '700',
          transition: `border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#E53939',
            color: '#E53939',
          },
        },
        '.btn-tryAgain': {
          width: '181px',
          height: '40px',
          borderWidth: '1px',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          color: '#000000',
          fontSize: '14px',
          fontWeight: '700',
          transition: `background-color ${hoverDelay} ease, border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            backgroundColor: '#F27777',
            borderColor: '#F27777',
            color: '#D4D4D4',
          },
        },
        '.btn-topBar': {
          width: '132px',
          height: '48px',
          borderWidth: '1px',
          borderRadius: '50px',
          backgroundColor: 'transparent',
          borderColor: '#E53939',
          color: '#FFFFFF',
          fontSize: '18px',
          fontWeight: '600',
          transition: `background-color ${hoverDelay} ease, border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            backgroundColor: '#E53939',
            borderColor: '#E53939',
            color: '#D4D4D4',
          },
        },
        '.heroSection': {
          display: 'flex',
          flexDirection: 'column-reverse',
          // height: '584px',
          padding: '64px 16px',
          alignItems: 'center',
          alignSelf: 'stretch',
          justifyContent: 'center',
        },
        '.containerText': {
          display: 'flex',
          maxWidth: '1024px',
          // maxWidth: '646px',
          padding: '32px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          // alignSelf: 'stretch',
        },
        '.title-heroSection': {
          // flex: '1 0 0',
          width: '334px',
          maxWidth: '646px',
          fontFamily: 'var(--font-manrope)',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '48px', /* 112.5% */
          letterSpacing: '-2.56px',
          // color: '#FFF',
        },
        '.description-heroSection': {
          // flex:' 1 0 0',
          width: '334px',
          fontFamily: 'var(--font-manrope)',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.6px',
          color: '#E5E5E5',
        },
        '.description-heroSection .potencial': {
          color: '##FFF',
        },
        '.description-heroSection .ilimitado': {
          color: '##FFF',
          fontWeight: '700',
        },
        '.description-heroSection .constante': {
          fontWeight: '700',
        },
        '.containerButtons': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap : '16px',
            padding: '16px 0',
        },
        '.btn-participe': {
          display: 'flex',
          padding: '8px 32px',
          alignItems: 'center',
          borderRadius: '50px',
          border:' 1px solid var(--Grad-stroke, rgba(255, 255, 255, 0.40))',
          background:' var(--Primitive-500, #E53939)',
          fontFamily: 'var(--font-manrope)',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.54px;',
          color: '#FFF',
        },
        '.btn-saibaMais': {
          display: 'flex',
          padding: '8px 32px',
          alignItems: 'center',
          borderRadius: '50px',
          border:' 1px solid var(--Grad-stroke, rgba(255, 255, 255, 0.40))',
          fontFamily: 'var(--font-manrope)',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.54px;',
          color: '#FFF',
        },
        '.comunidade': {
          alignItems: 'center',
          display: 'flex',
          color: '#D4D4D4',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          gap: '8px',

        },
        '.img-mapaMundi': {
            width: '398px',
            // height: '326px',
            flex: '1 0 0',
        },
        '.beneficios': {
          fontFamily: 'var(--font-roboto)'
        },
      });
    }),
  ],
};

export default config;