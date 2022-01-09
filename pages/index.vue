<template>
    <div>
        <Header title="Hola! My name is Mariana." text="This site is about things I like related to design, code, illustration, and SVG."/>
      <main class="pattern border-top">
        <div class="wrapper">
          <div class="articles cards">
            <h2>Articles</h2>
            <a class="card" href="https://css-tricks.com/how-i-made-a-generator-for-svg-loaders-with-sass-and-smil-options/" target="_blank" rel="noopener">
              <img src="./../assets/images/th-css_tricks04.jpg" alt="" loading="lazy">
              <p class="card-subtitle">Article</p>
              <h3>How I Made a Generator for SVG Loaders With Sass and SMIL Options</h3>
              <p class="view read">Read on CSS-tricks</p>
            </a>
            <a class="card" href="https://css-tricks.com/how-to-simplify-svg-code-using-basic-shapes/" target="_blank" rel="noopener">
              <img src="./../assets/images/th-css_tricks03.jpg" alt="" loading="lazy">
              <p class="card-subtitle">Article</p>
              <h3>How to Simplify SVG Code Using Basic Shapes</h3>
              <p class="view read">Read on CSS-tricks</p>
            </a>
            <a class="card" href="https://css-tricks.com/use-and-reuse-everything-in-svg-even-animations/" target="_blank" rel="noopener">
              <img src="./../assets/images/th-css_tricks01.jpg" alt="" loading="lazy">
              <p class="card-subtitle">Article</p>
              <h3>Use and Reuse Everything in SVG… Even Animations!</h3>
              <p class="view read">Read on CSS-tricks</p>
            </a>
            <!-- <a class="card" href="https://css-tricks.com/use-and-reuse-everything-in-svg-even-animations/" target="_blank" rel="noopener">
              <img src="./../assets/images/th-css_tricks01.jpg" alt="" loading="lazy">
              <p class="card-subtitle">Article</p>
              <h3>Use and Reuse Everything in SVG… Even Animations!</h3>
              <p class="view read">Read on CSS-tricks</p>
            </a> -->
          </div>
          <div class="articles cards">
            <h2>Case Studies</h2>
            <!-- <a class="card" href="https://medium.muz.li/adding-value-to-our-clients-platform-and-brand-fdf94856116" target="_blank" rel="noopener">
              <img src="./../assets/images/th-sod-.jpg" alt="" loading="lazy">
              <p class="card-subtitle">Illustration & Brand</p>
              <h3>Adding value to our client's platform and brand</h3>
              <p class="view read">Read on Muzli</p>
            </a> -->
            <a class="card" href="https://medium.muz.li/adding-value-to-our-clients-platform-and-brand-fdf94856116" target="_blank" rel="noopener">
              <img src="./../assets/images/th-sod-.jpg" alt="" loading="lazy">
              <p class="card-subtitle">Illustration & Brand</p>
              <h3>Adding value to our client's platform and brand</h3>
              <p class="view read">Read on Muzli</p>
            </a>
            <a class="card" href="https://medium.muz.li/leniolabs-brand-website-redesign-65d80c7bbb07" target="_blank" rel="noopener">
              <img src="./../assets/images/th-leniolabs.png" alt="" loading="lazy">
              <p class="card-subtitle">Web & Brand redesign</p>
              <h3>Leniolabs</h3>
              <p class="view read">Read on Muzli</p>
            </a>
            <a class="card" href="https://medium.muz.li/comfort-shatter-6f533b83d37e" target="_blank" rel="noopener">
              <img src="./../assets/images/th-comfort.jpg" alt="" loading="lazy">
              <p class="card-subtitle">App prototype</p>
              <h3>Comfort Shatter</h3>
              <p class="view read">Read on Muzli</p>
            </a>
          </div>
        </div>
      </main>
    </div>
</template>

<script>

</script>


<style lang="scss">
.table-simple {
    td, th { border: 1px solid; }
}
.cards {
    position: relative;
}
.cards h2 {
    margin: 0;
}
.card {
    background-color: white;
    border: 1px solid;
    border-bottom: 6px double;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    &:hover {
        box-shadow: inset 0 0 0 4px var(--lightgreen);
        filter: hue-rotate(360deg);
        transition: all ease .5s;
    }
}
.cards h3, .cards p {
    margin: 1rem 0;
    padding: 0 1rem;
}
.cards img {
    border-bottom: 4px solid;
    object-fit: cover;
    max-height: 180px;
    width: 100%;
}
.cards.articles img {
    max-height: 260px;
}

.articles.cards {
    grid-template-columns: 1fr 1fr 1fr;
}
.articles.cards h2, .blog.cards h2 {
    background-color: var(--yellow);
    grid-area: 1 / 1 /  2 / 4;
    padding: .2rem .3rem .2rem .6rem;
}

.img-top {
    object-position: top;
}
.cards h3 {
    font-weight: 700;
    margin-top: 0;
}
.cards .view {
    color: var(--red);
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: auto;
    padding: .7rem 1rem;
    position: relative;
    transition: all ease .2s;
    &:hover {
        background-color: var(--lightgreen);;
        color: var(--darkblue);
        padding-left: 25px;
    }
}

.card-subtitle {
    color: var(--darkblue);
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: .5rem;
    text-transform: uppercase;
}
.view:before {
    background: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 30"><path d="M.1 0L0 22.4l6.2-5.2 7.3 10.7.3-22.7-6.2 5.2L.1 0z"/></svg>') no-repeat;
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    top: -160px;
    right: 1rem;
    opacity: 0;
    pointer-events: none;
    transition: all ease .2s;
}
.view:hover:before {
    opacity: 1;
    top: 8px;
}
.read:before {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M59 28h-2.18c-.951-5.666-5.85-10-11.748-10-5.822 0-10.696 4.119-11.825 9.579-.971-.814-2.079-1.246-3.247-1.246-1.167 0-2.274.432-3.245 1.245C25.639 22.118 20.825 18 15.072 18 8.756 18 3.565 22.851 3.051 29H1a1 1 0 1 0 0 2h2.051c.514 6.149 5.705 11 12.021 11 6.467 0 11.736-5.207 11.911-11.671.853-1.285 1.915-1.996 3.017-1.996 1.102 0 2.164.712 3.017 1.996C33.195 36.793 38.528 42 45.072 42 51.649 42 57 36.617 57 30h2a1 1 0 1 0 0-2zM15.072 40C9.519 40 5 35.514 5 30s4.519-10 10.072-10C20.64 20 25 24.393 25 30s-4.36 10-9.928 10zm30 0C39.519 40 35 35.514 35 30s4.519-10 10.072-10C50.64 20 55 24.393 55 30s-4.36 10-9.928 10z"/></svg>') no-repeat;
    height: 45px;
    width: 45px;
    pointer-events: none;
}
.read:hover:before {
    top: 0;
}
.card-date {
    color: var(--green);
    display: block;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1rem;    
}
.card-categories {
    font-size: 1rem;
    margin: 1rem 0 1.5rem;
    padding: 0 .8rem;
}
.card-category {
  color: var(--darkblue);
  display: inline-block;
  margin: .5rem 0;
  span {
    background-color: var(--yellow);
    border: 2px solid var(--yellow);
    border-radius: 4px;
    margin: .2rem;
    padding: .2rem .5rem;
    &:hover {
        background-color: white;
        transition: .2s linear background;
    }
  }
}

.work.cards {
    margin-bottom: 2em;
}
.work.cards h2 {
    background-color: var(--red);
    padding: 12px 6px 0 5px;
}

// Blog 

.blog {
    .card {
        text-align: center;
        .card-title {
            color: var(--darkblue);
            font-size: 1.8rem;
            padding: 0 .8rem;
        }
        img { min-height: 180px; }

    }
}
.img-shape-house {
    .st0{fill:#fff;stroke:#2e3897;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}
    .st1{fill:#f1848a}
    .st2{fill:none;stroke:#2e3897;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}
    .st3,.st4{fill:#f1848a}
    .st3{stroke:#2e3897;stroke-miterlimit:10}
    .st4{enable-background:new}
    .st5{fill:#fff9e1}
    .st6,.st7{fill:none;stroke:#2e3897;stroke-miterlimit:10}
    .st7{fill:#b3d6e9;stroke-linecap:round;stroke-linejoin:round}
    .st8{fill:#fff}
    .st9{fill:#d4efe9;stroke-linecap:round;stroke-linejoin:round}
    .st10,.st11,.st12,.st9{stroke:#2e3897;stroke-miterlimit:10}
    .st10{stroke-linecap:round;stroke-linejoin:round;fill:#f1848a}
    .st11,.st12{fill:#e8444e}
    .st12{fill:#fff}
}
.img-shape-tree {
    .st0{fill:#d4efe9;stroke:#2e3897;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;}
}
.img-shape-stop {   
    .st1{fill:#fff;stroke:#2e3897;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;}
    .st4{fill:#f1848a}
    .st5{fill:none;stroke-linecap:round;stroke-linejoin:round}
    .st5,.st8,.st9{stroke:#2e3897;stroke-width:.5;}
    .st8{stroke-linecap:round;stroke-linejoin:round;fill:#d4efe9}
    .st9{fill:none}   
}

@media screen and (min-width: 37.5em) {
    .cards {
        display: flex;
        flex-wrap: wrap;
    }
    .card {
        flex: 1 1 50%;
    }
    .cards h2 {
        writing-mode: vertical-lr;
    }
    .img-shape-stop {
        float: left;
        padding: .5em 1em .5em 0;
        shape-outside: polygon(64px 0px, 98px 34px, 100px 78px, 115px 105px, 0px 105px);
        margin-left: -1.5em;
    }
    .img-shape-house {
        float: left;
        padding: .5em 1em .5em 0;
        shape-outside: polygon(44px 0px, 88px 58px, 145px 58px, 145px 145px, 8px 145px);
        width: 132px;
        margin-left: -1.5em;
    }
    .img-shape-tree {
        float: right;
        padding: 1.5em 0 0 1em;
        shape-outside: polygon(45px 0px, 18px 55px, 12px 86px, 26px 120px, 60px 120px);
        margin-right: -2em;
    }
}
@media screen and (min-width: 56.25em) {
    .cards {
        display: grid;
        grid-gap: 1.5em;
        margin-bottom: 4em;
    }
    .work.cards {
        grid-template-columns: 50px 3fr 3fr 3fr;
        grid-template-rows: repeat(3, 22rem);
    }
    .cards h2 {
        margin: 0;
        grid-area: 1 / 1 /  4 / 2;
        writing-mode: vertical-lr;
    }
    .articles.cards h2, .blog.cards h2 {
        writing-mode: initial;
    }
    .blog .card img { height: 180px; }
    .blog .card .card-title { min-height: 110px;}
    .inner-post-body figure.full-w {
        margin: auto -6rem;
    }
}

@media screen and (prefers-reduced-motion: reduce) {
  .card {
    &:hover { filter: none; }
  } 
}
</style>
