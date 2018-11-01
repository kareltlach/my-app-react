module.exports = {
  siteMetadata: {
    title: 'karel tlach',
    description: 'UI/UX Designer, localizado em São Paulo, Brasil. Mais de 10 anos de experiência.',
    keywords: 'ui, ux, design, interface, arquitetura de informação, experiência do usuário, usuário, empatia, mapa de empatia, user experience'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '08oh62yt4msg',
        accessToken: 'd003990d31d0b7da281809de5102b9e42e7830e0d4e5f92bee2c134b3bf54f82'
      }
    }
  ],
}