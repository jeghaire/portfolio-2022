/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io']
  },
  env: {
    SANITY_PROJECT_ID: '1028r3iq',
    SANITY_TOKEN: 'skoSG3r8wTt340mX5S8v0JrV1Xr51cOaBZUMTs5Zrcamwp2Og3zioGbg3ufvxW06pyNwx96fPVObAwzLkd4pymMZw22wquzHaGy1LgkQvPc7mXCt3LxYw77vhMIbkY2OycfjVxLGta0EuHdh5MQMkUV7ctw2sdgYSXU3p1NRmH5nx8ttdKwO'
  }
}

module.exports = nextConfig
