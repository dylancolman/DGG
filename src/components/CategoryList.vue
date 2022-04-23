<template>
  <div>
    <h2 class="section-title text-white text-center text-xl font-bold mt-10 mb-10 uppercase">
      <span>Browse by Game Type</span>
    </h2>
    <ul
      v-if="data.length"
      class="categories list-none grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-5 mb-15"
    >
      <li
        v-for="edge in data"
        :key="edge.node.id"
        class="overflow-hidden rounded-md relative border md:border-0 border-solid border-gray-900 shadow-xl md:shadow-none"
      >
        <g-link
          :to="`/${edge.node.slug}`"
          class="category flex flex-wrap flex-col items-center justify-center relative overflow-hidden rounded-md block px-4 py-10 text-center border border-gray-600 hover:bg-gray-900 hover:text-white duration-300"
        >
             <div v-for="(file, index) in edge.node.attachments" :key="file.id">
                <g-image :src="file.url" :alt="edge.node.name" class="w-10 h-10" />
            </div>
          <span class="text-lg font-bold mt-4">{{ edge.node.name }}</span>
          <span class="block">{{ edge.node.summary }}</span>
        </g-link>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  props: {
    data: {
      required: true,
      type: [Object, Array],
    },
  }
};
</script>
