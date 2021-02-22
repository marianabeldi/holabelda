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

<style lang="scss">
header {
  h1 { margin-bottom: 0;}
  p {
    font-size: 1.8rem;
    margin-top: .5rem;
  }
}
</style>
