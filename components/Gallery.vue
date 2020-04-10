<template>
   <section id="gallery">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>Gallery</h2>
          <hr class="star-primary" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <template v-for="(imgs, i) in entry.portfolio.portfolo_details">
                <li
                  v-if="i === 0"
                  :key="i"
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  v-else
                  :key="i"
                  data-target="#myCarousel"
                  :data-slide-to="i"
                ></li> </template
              >>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
              <template v-for="(gal, i) in entry.gallery">
                <div v-if="i === 0" :key="i" class="item active">
                  <img
                    :src="gal.gallery_data.images.url"
                    :alt="gal.gallery_data.images.filename"
                    style="width:100%;"
                  />
                  <client-only>
                  <div
                    v-for="(galBd, i) in gal.gallery_data.gallery_body"
                    :key="i"
                    style="color:white;"
                    class="carousel-caption d-none d-md-block"
                  >
                    <img
                      :src="galBd.gallery_body.images.url"
                      :alt="galBd.gallery_body.images.filename"
                      style="height:50px"
                    />
                    <p v-html="galBd.gallery_body.description" />
                    <ul
                      v-for="(ctas, ind) in galBd.gallery_body.cta"
                      :key="ind"
                      class="pager"
                    >
                      <li class="btn btn-danger">
                        {{ ctas.links.link.title }}
                      </li>
                    </ul>
                  </div>
                  </client-only>
                </div>
                <div v-else :key="i" class="item">
                  <img
                    :src="gal.gallery_data.images.url"
                    :alt="gal.gallery_data.images.filename"
                    style="width:100%;"
                  />
                  <client-only>
                  <div
                    v-for="(galBd, id) in gal.gallery_data.gallery_body"
                    :key="id"
                    style="color:white;"
                    class="carousel-caption d-none d-md-block"
                  >
                    <img
                      :src="galBd.gallery_body.images.url"
                      :alt="galBd.gallery_body.images.filename"
                      style="height:50px"
                    />
                    <p v-html="galBd.gallery_body.description" />
                    <ul
                      v-for="(cta, ind) in galBd.gallery_body.cta"
                      :key="ind"
                      class="pager"
                    >
                      <li class="btn btn-danger">
                        {{ cta.links.link.title }}
                      </li>
                    </ul>
                  </div>
                  </client-only>
                </div>
              </template>
            </div>

            <!-- Left and right controls -->
            <a
              class="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
props: ["entry"]
}
</script>
