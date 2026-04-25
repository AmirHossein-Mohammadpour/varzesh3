import IranSans from 'next/font/local';

export const iranSans = IranSans({
  src: [
    {path: '../../public/fonts/IRANSansXFaNum-Bold.ttf', weight: '700'},
    {path: '../../public/fonts/IRANSansXFaNum-Light.ttf', weight: '300'},
    {path: '../../public/fonts/IRANSansXFaNum-Medium.ttf', weight: '500'},
    {path: '../../public/fonts/IRANSansXFaNum-Regular.ttf', weight: '400'},
  ],
  variable: '--font-iranSans'
})