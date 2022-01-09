<template>
  <div>
    <Header title="Talks" text=""/>
    <main class="pattern border-top">
      <client-only>
        <div class="work cards wrapper">
          <h2>Talks</h2>
          <div class="card">
            <iframe width="100%" height="240" src="https://www.youtube.com/embed/zf924WV1kZk" title="Nerdearla Workshop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span class="card-date">23 October 2021</span>
            <h3 class="card-title">Nerdearla Workshop: Visualización de la Deforestación del Amazonas</h3>
          </div>
          <div class="card">
            <iframe width="100%" height="240" src="https://www.youtube.com/embed/qPG1veWTx30" title="SVG + CSS Animations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span class="card-date">8 August 2019</span>
            <h3 class="card-title">SVG + CSS Animations</h3>
          </div>
          <div class="card">
            <iframe width="100%" height="240" src="https://www.youtube.com/embed/fUTEryzf6ag" title="An SVG virtual stand" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span class="card-date">29 December 2020</span>
            <h3 class="card-title">Nerdearla - An SVG virtual stand</h3>
          </div>
          <div class="card">
            <iframe width="100%" height="240" src="https://www.youtube.com/embed/PygkxCv7EQE" title="Dataviz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span class="card-date">6 May 2021</span>
            <h3 class="card-title">Exploring data and visual possibilities</h3>
          </div>
          <div class="card">
            <iframe width="100%" height="240" src="https://www.youtube.com/embed/QxvsjQikCQw" title="Nerdearla event" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span class="card-date">10 December 2021</span>
            <h3 class="card-title">Leniolabs - Nerdearla 2021</h3>
          </div>
          <div class="card">
            <iframe width="100%" height="240" src="https://www.youtube.com/embed/Nnxix-JGn0A" title="GameJam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span class="card-date">4 February 2021</span>
            <h3 class="card-title">Deepest Ocean - Building a video game in 48hs</h3>
          </div>
          <div class="card">
            <iframe width="100%" height="240" src="https://www.youtube.com/embed/PyfgoqiiyLE" title="CSS workshop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span class="card-date">19 May 2020</span>
            <h3 class="card-title">CSS Workshop: The Box Model</h3>
          </div>
        </div>
      </client-only>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Talks"
    };
  },
};
</script>

<style lang="scss">
</style>