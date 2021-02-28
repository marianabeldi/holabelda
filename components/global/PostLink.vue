<template>
  <div class="footer-links wrapper">
    <div>
      <NuxtLink v-if="prev" :to="{ name: `${type}-slug`, params: { slug: prev.slug } }">
        &larr;
        {{ prev.title }}
      </NuxtLink>
    </div>
    <div>
      <NuxtLink v-if="next" :to="{ name: `${type}-slug`, params: { slug: next.slug } }">
        {{ next.title }}
        &rarr;
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
};
</script>

<style lang="scss" scoped>
.footer-links {
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1rem;
  justify-content: space-between;
  margin: 2rem auto;
  a:hover { color: var(--red); }
  div {
    margin: 1rem;
    + div { text-align: right; }
  }
}
</style>