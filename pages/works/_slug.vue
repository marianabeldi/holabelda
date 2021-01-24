<template>
  <div class="work-article">
      <!-- <header class=""> -->
        <!-- <span class="post-date">{{ work.date}}</span> -->
        <!-- <h1>{{ work.title }}</h1> -->
        <!-- <template v-if="work.category">
          <NuxtLink v-for="(category, i) in work.category" :key="i"  :to="{ path: `/categories/${category}`, query: { type: 'works' } }" class="post-category"><span>#{{ category }}</span></NuxtLink>
        </template> -->
      <!-- </header> -->

      <!-- <img v-if="work.image" :src="work.image" :alt="work.excerpt" /> -->

      <main class="pattern">
        <NuxtLink to="/work" class="arrow-back">&larr;</NuxtLink>
        <article>
          <nuxt-content :document="work" />
        </article>
      </main>

      <post-link :prev="prev" :next="next" type="works" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.work.title,
      meta: [
        { hid: "description", name: "description", content: this.work.excerpt }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const work = await $content("works", params.slug).fetch();
    const [prev, next] = await $content("works")
      .only(["title", "slug"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();
    return {
      work,
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
.work-article {
  position: relative;
  .arrow-back {
    font-size: 2rem;
    position: absolute;
    top: 10px;
    left: 36px;
    z-index: 1;
    &:hover {
      color: var(--red);
    }
  }
}
.content {
    padding: 50px 40px;
    position: relative;
    .content-date {
      font-size: 1rem;
      margin: 0 0 5px;
    }
    h1 {
      margin-top: 0;
      margin-bottom: 1.5rem;
    }
    h2 {
      background-color: var(--yellow);
      font-size: 1.8rem;
      margin-top: 3rem;
    }
    a:hover {
      color: var(--red);
  }
  p {
    font-size: 1.2rem;
  }
}

ul.tags {
    position: absolute;
    top: 0;
    right: 30px;
    li {
      background-color: var(--red);
      border-radius: 0 0 4px 4px;
      color: white;
      display: inline-block;
      font-size: .8rem;
      margin: 4px 5px;
      padding: 8px 8px 5px;
  }
}
ul.music-list {
    margin-bottom: 30px;
    li a {
      display: inline-block;
      margin-bottom: 10px;
      transition: transform .2s ease-in;
      &:hover {
        margin-bottom: 10px;
        transform: translateX(5px);
      }
      &::before {
        background: url('data:image/svg+xml, <svg fill="%23f36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415.963 415.963"><path d="M328.712 264.539c12.928-21.632 21.504-48.992 23.168-76.064 1.056-17.376-2.816-35.616-11.2-52.768-13.152-26.944-35.744-42.08-57.568-56.704-16.288-10.912-31.68-21.216-42.56-35.936l-1.952-2.624c-6.432-8.64-13.696-18.432-14.848-26.656-1.152-8.32-8.704-14.24-16.96-13.76a15.957 15.957 0 0 0-14.88 15.936v285.12c-13.408-8.128-29.92-13.12-48-13.12-44.096 0-80 28.704-80 64s35.904 64 80 64 80-28.704 80-64V165.467c24.032 9.184 63.36 32.576 74.176 87.2-2.016 2.976-3.936 6.176-6.176 8.736-5.856 6.624-5.216 16.736 1.44 22.56 6.592 5.888 16.704 5.184 22.56-1.44 4.288-4.864 8.096-10.56 11.744-16.512.384-.448.737-.928 1.056-1.472z"/></svg>') no-repeat;
        content:''; 
        display: inline-block;
        height: 1rem;
        padding-left: 1.5em; 
    }
  } 
}
ul.ul-list { 
  padding-left: 1em; 
  li  {
    color:rgba(29, 29, 70, 0.7);
    margin-bottom: 10px;
    &::before {
      content:'●'; 
      color: var(--red);
      display: inline-block;
      margin-right: .5em;
      margin-left: -1em;
    }
  } 
}

.gallery {
    column-count: 1;
    column-gap: 5px;
    margin-top: var(--navH);
}
.single {
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--navH);
  li {
    flex: 2 0 64%;
    margin: 0 3%;
  }
  .content {
    flex: 0 0 30%;
  }
}

.heart {
    position: relative;
    padding-right: 1em;
    transition: all ease-in .2s;
}
.heart:hover::after {
    content: "♥";
    position: absolute;
    top: -3px;
    right: 0;
    height: 10px;
    width: 10px;
}
@media screen and (max-width: 56.25em) {
  .single .content {
    flex-grow: 1;
  }
}
@media screen and (min-width: 37.5em) {
  .gallery {
    column-count: 2;
  }
}
@media screen and (min-width: 56.25em) {
  .gallery {
    column-count: 3;
  }
}
</style>