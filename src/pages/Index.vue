<template>
  <Layout>
    <CategoryList :data="$page.categories.edges" />
    <div>
      <div class="flex flex-row md:space-x-5 md:items-stretch bg-yellow-400 p-4 rounded-md">
        <form
          class="flex-grow rounded-md overflow-hidden leading-none"
        >
          <input
            name="search"
            aria-label="Search"
            v-model="gameSearch"
            autocomplete="off"
            class="hidden md:block bg-none appearance-none rounded-md focus:outline-none focus:text-black w-full px-5 py-3 h-full text-xl"
            type="search"
            :placeholder="`Search our growing database of ${$page.games.edges.length} drinking games`"
            autofocus
          />
          <input
            name="search"
            aria-label="Search"
            v-model="gameSearch"
            autocomplete="off"
            class="block md:hidden bg-none appearance-none rounded-md focus:outline-none focus:text-black w-full px-5 pb-0 h-12 md:h-16 text-xl"
            type="search"
            :placeholder="`Search ${$page.games.edges.length} games`"
          />
        </form>
      </div>
    </div>
    <div v-if="$page.games.edges">
      <IndexGrid :data="filteredGames" />
    </div>
    <footer>
      <nav class="nav block text-center mt-10 flex gap-4 justify-center">
        <g-link class="nav__link" to="/">Games</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </footer>
  </Layout>
</template>

<page-query>
  query Games {
    games: allGame(sort: { by: "path", order: ASC }) {
      edges {
        node{
          name
          slug
          category: categoryText
          rating
          description
          duration
          rules
          minPlayers
          maxPlayers
          recommendedPlayers
        }
      }
    }
    categories: allCategory(sort: { by: "path", order: ASC }) {
      edges {
        node{
          name
          description
          slug
          attachments {
            url
            filename
          }
        }
      }
    }
  }
</page-query>

<script>
import lowerCase from "@/filters/LowerCase";
import IndexGrid from "~/components/IndexGrid.vue";
import CategoryList from "~/components/CategoryList.vue";

export default {
  metaInfo () {
    return this.$seo({
      title: 'Drinking Games', // Uses the titleTemplate in Gridsome config
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
  },
  components: {
    IndexGrid,
    CategoryList
  },
  data() {
    return {
      values: {},
      gameSearch: '',
      games: null,
      submitSuccess: false,
      loading: false
    };
  },
  filters: {
    lowerCase,
  },
  computed: {
    gameList() {
      return this.$page.games.edges;
    },
    filteredGames() {
      const gameSearch = this.gameSearch.toLowerCase().trim();
      let result = this.gameList.filter((edge) => {
        return (
          edge.node.name.toLowerCase().trim().includes(gameSearch)
        );
      });

      return result;
    }
  }
}
</script>