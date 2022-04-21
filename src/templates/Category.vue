<template>
  <Layout>
    <article class="max-w-4xl mr-auto rounded-lg shadow-2xl mt-10 mb-10">
        <div class="flex items-center justify-center gap-5 mx-auto">
            <div v-for="(file, index) in $page.category.attachments" :key="file.id">
                <g-image :src="file.url" :alt="$page.category.name" class="w-18 h-18" />
            </div>
            <div>
                <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-none">
                    {{ $page.category.name }}
                </h1>
                <h2 class="text-xl">
                    {{ $page.category.description }}
                </h2>
            </div>
        </div>
                  
        <div class="mt-5">
              <h2 class="text-center"><strong>{{$page.category.belongsTo.totalCount}}</strong> Games in <mark>{{ $page.category.name }}</mark></h2>
              <div v-if="$page.category.belongsTo.edges">
                <IndexGrid :data="$page.category.belongsTo.edges" />
              </div>
        </div>
    </article>
  </Layout>
</template>

<script>
import IndexGrid from "~/components/IndexGrid.vue";

export default {
  metaInfo() {
    return {
      title: this.seoTitle,
    };
  },
  components: {
    IndexGrid
  },
  computed: {
    seoTitle() {
      let pageTitle = "";
      let title = this.$page.category.name;
      //let summary = this.$page.game.summary;
      pageTitle = `${title}`;
        return pageTitle;
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
  category(id: $id) {
    name
    belongsTo {
      totalCount
      edges {
        node {
          ... on Game {
            id
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
    }
  }
}
</page-query>