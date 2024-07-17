const url = 'https://api.gamble.social';
const webUrl = 'https://gamble.social/';
const tubeUrl = 'https://tube.gamble.social/'

// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.gamble.social',
  siteKey: '0x4AAAAAAAZb3-rSJh_tgrr6',
  secretKey: '0x4AAAAAAAZb32TXQYB-rz_VhXxeFiJvGb8',
  EncryptIV: 8625401029409790,
  EncryptKey: 8625401029409790,
  qrLink: `${webUrl}settings/edit-profile/`,
  stripe_key: 'pk_test_51MwOHTSJJZB3pTDyqpZk5NJDaWkbuGiruTp79We9CcR2oODObX93TleYFTJj2qLowRuRL1DRTSIl8Vb1YiFyW7e900BYWlZKSM',
};
