<template>
  <div>
    <header>
      <h1>Results for: <span class="result">#{{ $route.params.category }}</span></h1>
    </header>
      <div class="pattern">
        <div v-if="posts" class="blog cards wrapper">
          <h2>#{{ $route.params.category }}</h2>
          <CardBlog v-for="post in posts" :key="post.slug" :type="$route.query.type" :post="post"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      // title: `#${this.posts[0].category}`
    };
  },
  async asyncData({ $content, params, route }) {
    const posts = await $content(route.query.type)
      .where({
        category: {
          $regex: [params.category, "i"]
        }
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      posts
    };
  },
  async mounted() {
    var queryString = window.location.search.replace("?type=","")
    this.posts = await this.$content(queryString)
      .where({
        category: {
          $regex: [this.$route.params.category, "i"]
        }
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();
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
.inner-post-body {
  margin: 0 auto;
  max-width: 80ch;
  padding: 2rem;
}
.result {
  color: var(--lightblue);
}
</style>