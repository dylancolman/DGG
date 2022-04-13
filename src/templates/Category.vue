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
              <h2>Games in {{ $page.category.name }}</h2>
              <ul>
                <li v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id">
                    <g-link :to="edge.node.path" class="text-white">
                    {{ edge.node.title }}
                    </g-link>
                </li>
                </ul>
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
      edges {
        node {
          ... on Game {
            id
            name
            path
          }
        }
      }
    }
  }
}
</page-query>