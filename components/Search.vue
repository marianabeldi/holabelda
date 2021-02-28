<template>
  <div class="wrapper search">
      <input v-model="query" type="text" autocomplete="off" placeholder="Search.." />
      <ul v-if="query.length">
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.slug } }">{{ post.title }}</NuxtLink>
        </li>
        <li v-if="! posts.length">¯\_( ͡❛ ͜ʖ ͡❛)_/¯</li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      posts: [],
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.posts = []
        return
      }
      this.posts = await this.$content('posts').limit(6).search(query).fetch()
    },
  },
}
</script>

<style lang="scss">

.wrapper.search {
  margin-top: 6.5rem;
  max-width: 32rem;
  position: relative;
  input {
    border: 1px solid #e0e0e0;
    color: var(--darkblue);
    font-family: 'Aleo', serif;
    font-size: 1.2rem;
    margin: 0;
    min-height: 2rem;
    padding: 1rem;
    width: 100%;
    &:hover, &:focus {
      box-shadow: 0 0 0 1px var(--green);
      outline: 0;
    }
  }
  ul {
    background-color: white;
    box-shadow: 0 0 0 1px var(--yellow);
    font-size: 1.2rem;
    list-style-type: none;
    padding: 1rem;
    position: absolute;
    width: 100%;
    a:hover {
      color: var(--darkblue);
    }
  }
}

</style>
