<template>
  <Layout>
    <CategoryList :data="$page.categories.edges" />
    <div>
      <h2 class="mb-5">Search our database of {{$page.games.edges.length}} drinking games!</h2>
      <div class="flex flex-row md:space-x-5 md:items-stretch bg-yellow-400 p-4 rounded-md">
        <form class="flex-grow rounded-md overflow-hidden leading-none">
          <input
            name="search"
            aria-label="Search"
            v-model="gameSearch"
            autocomplete="off"
            class="block bg-none appearance-none rounded-md focus:outline-none focus:text-black w-full px-5 py-3 h-full text-xl"
            type="search"
            placeholder="Type a game name or items you have available..."
            autofocus
          />
        </form>
      </div>
    </div>
    <div v-if="filteredGames">
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
          items
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
      title: 'Drinking Games',
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
      link: [],
      script: []
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
    gamesList() {
        return this.$page.games.edges;
    },
    filteredGames() {
      const query = this.gameSearch.toLowerCase().trim();
      if (query === '') {
        return this.gamesList;
      } else {
        return this.gamesList.filter(edge => {
          const nameMatch = edge.node.name.toLowerCase().includes(query);
          const itemsMatch = edge.node.items.some(item => item.toLowerCase().includes(query));
          return nameMatch || itemsMatch;
        });
      }
    }
  }
}
</script>