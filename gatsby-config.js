module.exports = {
  siteMetadata: {
    title: `Medio Lleno`,
    description: `Creamos campañas de comunicación a través de la innovación en el diseño, desarrollo y producción de productos y servicios.`,
    author: `@madhurmata`,
    keywords: `comunicación, publicidad, innovación, diseño de producto, diseño de servicio, earend media y PR`,
    siteUrl: 'https://mediolleno.es',

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    {
      resolve: `gatsby-plugin-mailgo`,
      options: {
        mailgoConfig: {
          dark: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `medio-lleno`,
        short_name: `medio-lleno`,
        start_url: `/`,
        background_color: `#13c1b5`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
