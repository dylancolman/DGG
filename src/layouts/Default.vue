<template>
  <div class="layout">
    <header class="text-center mt-20">
      <g-link to="/">
        <g-image src="/logo.png" :alt="$static.metadata.siteName" class="w-50 mx-auto"></g-image>
      </g-link>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: #000;
  color: #fff;
}

.layout {
  max-width: 960px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

h1 {
  @apply text-6xl font-bold;
}
h2 {
  @apply text-4xl font-bold;
}
.section-title {
    position: relative;
    color: #ccc;
}
.section-title span {
    background: #000;
    padding: 5px;
    position: relative;
    z-index: 2;
}
.section-title:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    display: block;
    border-bottom: 1px solid #666;
}
mark {
  background: #f6dc00;
  padding: 0 5px;
  border-radius: 4px;
}
</style>
