<template>
  <div>
    <Header title="Work" text=""/>
    <main class="pattern border-top">
      <client-only>
        <div v-if="works" class="work cards wrapper">
          <h2>Work</h2>
          <CardWork v-for="work in works" :key="work.slug" type="works" :post="work"/>
        </div> 
      </client-only>
    </main>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: "Work"
    };
  },
  async asyncData({ $content, params }) {
    const works = await $content("works")
      .only(["title", "excerpt", "image", "slug", "category", "createdAt", "date", "subtitle"])
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      works
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