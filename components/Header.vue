<template>
  <header>
    <h1>{{title}}</h1>
    <p>{{text}}</p>
  </header>
</template>

<script>
  export default {
    props: ['title', 'text'],
  };
</script>
