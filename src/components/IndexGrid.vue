<template>
  <div>
    <ul
      v-if="data.length"
      class="games list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-10 mb-10"
    >
      <li
        v-for="edge in data"
        :key="edge.node.id"
        class="overflow-hidden rounded-md relative border md:border-0 border-solid border-gray-900 shadow-xl md:shadow-none"
      >
        <g-link
          :to="`/${edge.node.slug}`"
          :class="edge.node.category[0].toLowerCase().trim()" 
          class="item h-full relative overflow-hidden rounded-md block p-5 lg:p-10 border border-gray-600 hover:bg-gray-900 hover:text-white duration-300"
        >
          <span class="text-lg lg:text-xl xl:text-2xl font-bold block">{{ edge.node.name }}</span>
          <span class="text-base block mb-5">{{ edge.node.description }}</span>
          <span class="font-bold">{{ edge.node.category[0] }}</span> &middot; 
          <span class="text-gray-300 text-sm">Rating: {{ edge.node.rating / 2 }}/5</span>
          <!-- <div
            class="flex flex-col items-center justify-center mt-4 md:flex-row md:justify-start"
            v-if="edge.node.rating > null">
                    <span>
                        <Star
                            v-for="i in 5"
                            :width="24"
                            starClass="rating"
                            class="inline"
                            :key="i+'edge.node.rating'"
                        />
                    </span>
                </div> -->
        </g-link>
      </li>
    </ul>
    <NoGames v-else />
  </div>
</template>
<script>
import NoGames from "./NoGames";
import Star from "./Star";

export default {
  props: {
    data: {
      required: true,
      type: [Object, Array],
    },
  },
  // methods: {
  //   setRating() {
  //           const stars = [...document.querySelectorAll(".rating")];
  //           stars.map((star, i) => {
  //               if (i < Math.round(this.$page.product.averageRating)) {
  //                   star.style.fill = "gold";
  //                   star.style.stroke = "gold";
  //               }
  //           });
  //       },
  // },
  components: {
    NoGames,
    Star
  },
};
</script>

<style>
.item {
  border-top: 5px solid;
}
.mini {
    border-top-color: orange;
}
.quick {
    border-top-color: #aa87e2;
}
.long {
    border-top-color: #ff380b;
}
.outdoor {
    border-top-color: #44c3c3;
}
.event {
    border-top-color: #b354b3;
}
.continuous {
    border-top-color: #ffd104;
}
</style>