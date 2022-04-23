<template>
  <Layout>
    <article class="max-w-3xl mx-auto rounded-lg shadow-2xl mt-10 mb-10 p-6 md:p-10">
          <h1 class="text-white leading-none">
            {{ $page.game.name }}
          </h1>
          <p class="text-2xl">
              {{ $page.game.description }}
          </p>
          <div class="lg:flex items-start justify-start gap-10 mt-10">
              <div class="lg:w-2/6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:block mt-6 bg-gray-800 text-gray-200 rounded-md p-4">
                    <div>
                      <h2 class="mb-3 text-2xl">Summary</h2>
                      Category: {{ $page.game.category[0] }}<br />
                      Rating: {{ $page.game.rating }}/10<br />
                      Duration: {{ $page.game.duration }}
                    </div>
                    <div class="lg:mt-5">
                        <h2 class="mb-3 text-2xl">Players</h2>
                        Min: {{ $page.game.minPlayers }}<br />
                        Max: {{ $page.game.maxPlayers }}<br />
                        Recommended: {{ $page.game.recommendedPlayers }}
                    </div>
                </div>
                <div class="lg:w-4/6">
                    
                    <div v-if="$page.game.items.length" class="mt-5">
                        <h2 class="mb-3">Things you'll need</h2>
                        <ul class="list-disc ml-4">
                            <li v-for="item in $page.game.items" :key="item">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <div v-if="$page.game.rules.length" class="mt-5">
                        <h2 class="mb-3">Rules</h2>
                        <div v-html="$page.game.rules" class="whitespace-pre-wrap prose-lg prose-yellow max-w-3xl"></div>
                    </div>
                    <div v-if="$page.game.tips.length" class="mt-5">
                        <h2 class="mb-3">Tips</h2>
                        <div v-html="$page.game.tips" class=""></div>
                    </div>
                </div>
          </div>
          
   
          
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.seoTitle,
    };
  },
  computed: {
    seoTitle() {
      let pageTitle = "";
      let title = this.$page.game.title;
      //let summary = this.$page.game.summary;
      pageTitle = `${title}`;
        return pageTitle;
    },
  },
};
</script>

<page-query>
query Game ($path: String) {
	game (path: $path) {
        name
        description
        duration
        category: categoryText
        rules
        items
        rating
        minPlayers
        maxPlayers
        recommendedPlayers
        tips
	}
}
</page-query>