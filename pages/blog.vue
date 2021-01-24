<template>
  <div>
    <Search />
    <main class="pattern border-top">
      <client-only>
        <div v-if="posts" class="blog cards wrapper">
          <h2>Blog</h2>
          <CardBlog v-for="post in posts" :key="post.slug" type="posts" :post="post"/>
        </div>
      </client-only>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Blog"
    };
  },
  async asyncData({ $content, params }) {
    const posts = await $content("posts")
      .only(["title", "excerpt", "image", "slug", "category", "createdAt", "date"])
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      posts
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
};
</script>

<style lang="scss">
</style>