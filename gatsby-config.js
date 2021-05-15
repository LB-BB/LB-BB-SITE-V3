module.exports = {
  siteMetadata: {
    title: 'LB-BB.COM',
    author: 'LB Bradburn',
    description: "LB Bradburn's website, built with HTML5 UP",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/LB.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
