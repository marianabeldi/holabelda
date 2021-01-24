<template>
    <div class="card">
      <NuxtLink :to="{ name: `${type}-slug`, params: { slug: post.slug } }" >
        <img :src="post.image">
        <span class="card-date">{{ post.date }}</span>
       <h3 class="card-title">{{ post.title }}</h3>
        <div class="card-categories" v-if="post.category">
            <NuxtLink v-for="(category, i) in post.category" :key="i" :to="{ path: `/categories/${category}`, query: { type: type } }" class="card-category"><span>#{{ category }}</span></NuxtLink>
        </div>
        <p class="view read">Go to Link</p>
      </NuxtLink>
    </div>
</template>

<script>
  export default {
    props: ['post', 'type']
  };
</script>

