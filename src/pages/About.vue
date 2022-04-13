<template>
  <Layout>
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return this.$seo({
      title: 'About the app', // Uses the titleTemplate in Gridsome config
      description: '',
      keywords: 'drinking games,games',
      openGraph: {
        title: 'DrinkingGames.guide',
        type: 'website'
      },
      twitter: {
        title: 'DrinkingGames.guide',
        type: 'summary'
      },
      link: [],   // any links
      script: []  // any scripts
    })
  }
}
</script>
