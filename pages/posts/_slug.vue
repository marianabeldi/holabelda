<template>
  <div class="inner-post">
      <header class="inner-post-head">
        <NuxtLink to="/blog" class="arrow-back">&larr;</NuxtLink>
        <span class="card-date">{{ post.date}}</span>
        <h1>{{ post.title }}</h1>
        <p class="inner-post-subtitle">{{ post.subtitle }}</p>
        <template v-if="post.category">
          <NuxtLink v-for="(category, i) in post.category" :key="i"  :to="{ path: `/categories/${category}`, query: { type: 'posts' } }" class="card-category"><span>#{{ category }}</span></NuxtLink>
        </template>
      </header>

      <img v-if="post.image" :src="post.image" :alt="post.excerpt" />

      <div class="pattern">
        <article class="inner-post-body">
          <nuxt-content :document="post" />
        </article>
      </div>

      <post-link :prev="prev" :next="next" type="posts" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: "description", name: "description", content: this.post.excerpt }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const post = await $content("posts", params.slug).fetch();
    const [prev, next] = await $content("posts")
      // .only(["title", "slug", "excerpt"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
      console.log(post)
    return {
      post,
      prev,
      next
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>


<style lang="scss">
.arrow-back {
  font-size: 2rem;
  &:hover {
    color: var(--red);
  }
}
.inner-post-head {
  text-align: center;
  h1 { margin: 1rem 0 0; }
  .inner-post-subtitle {
    color: var(--darkblue);
    display: block;
    font-size: 2rem;
    margin: 0 0 2.5rem;
    opacity: .4;
  }
}
.inner-post-body {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 75ch;
  padding: 2rem;
  h2, h3 {
    font-weight: normal;
    margin: 2.5rem 0 1rem;
    opacity: .4;
  }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 1.7rem; }
  figure {
    margin: 2rem 0;
  }
  figcaption {
    color: var(--darkblue);
    font-size: 1rem;
    opacity: .4;
    text-align: center;
  }
  .flex-imgs {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    figcaption {
      flex: 1 1 100%;
      margin-top: 5px;
    }
  }
}
blockquote {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.8;
}
.vimeo {
  max-height: 80vh;
}
</style>