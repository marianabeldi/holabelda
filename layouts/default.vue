<template>
  <div>
    <Nav/>
    <Nuxt />
    <Contact/>
    <Footer/>
  </div>
</template>


<style lang="scss">
:root {
    --darkblue: #1d1d46;
    --blue: #47509b;
    --red: #f36;
    --green: #00b6c6;
    --lightgreen: #79e3e8;
    --yellow: #fee7a3;
    --navH: 50px;
    --lightblue: #9a9ab9;
}

* { box-sizing: border-box; }
:before, :after { box-sizing: inherit; }
:focus { outline: auto 5px black; }
::selection {
    color: #FFF;
    background: var(--red);
}
html { scroll-behavior: smooth; }
body {
    color: var(--darkblue);
    font-family: 'Aleo', serif;
    margin: 0 auto;
    overflow-x: hidden; 
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 2.2rem;
}
h3 {
  font-size: 1.5rem;
}
p {
  line-height: 1.4;
}
ul {
  list-style-type: none;
  margin: 0;
  padding-left: 0; 
}
img {
  max-width: 100%;
}
a {
  color: var(--green);
  text-decoration: none;
}
a:hover { cursor: pointer; }
.border-top {
  border-top: 6px double #dbdbe4;
  margin-top: 3rem;
}
.red {
  color: var(--red);
}
header {
  margin: 0 auto;
  max-width: 90%;
  padding-top: 5em;
}
.wrapper {
  margin: 0 auto;
  max-width: 74rem;
  width: 100%;
}
.pattern {
  background-image: linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .1) 25%, rgba(0, 0, 0, .1) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .1) 75%, rgba(0, 0, 0, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .1) 25%, rgba(0, 0, 0, .1) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .1) 75%, rgba(0, 0, 0, .1) 76%, transparent 77%, transparent);
  background-size: 18px 18px;
  height: 100%;
}
@media screen and (min-width: 56.25em) {
    h1 {
        font-size: 3rem;
    }
    header {
        margin-bottom: 4em;
        max-width: 60%;
    }
    .wrapper {
        margin: 3em auto;
    }
}

</style>
