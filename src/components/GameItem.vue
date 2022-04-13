<template>
    <li class="overflow-hidden rounded-md relative border md:border-0 border-solid border-gray-900 shadow-xl md:shadow-none">
        <g-link
          :to="`/${item.slug}`"
          class="item-overlay relative overflow-hidden rounded-md block p-4 border border-gray-600 bg-gray-900 hover:bg-gray-800 hover:text-white duration-300"
        >
          <span class="text-lg lg:text-xl xl:text-2xl font-bold">{{ item.name }}</span>
          <span class="block text-base">{{ item.description }}</span>
          <span class="block font-bold">{{ item.category[0] }}</span>
          <span class="absolute top-4 right-4 text-gray-300 text-sm">{{ item.rating }} Rating</span>
        </g-link>
      </li>
</template>