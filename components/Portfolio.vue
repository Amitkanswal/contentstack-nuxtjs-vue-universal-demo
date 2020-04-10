<template>
  <section id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>{{ entry.portfolio.title}}</h2>
          <hr class="star-primary" />
        </div>
        <div class="row col-lg-8 text-left">
          <div class="dropdown" style="margin-top:-95px; margin-left:15px">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              Filter By <span class="caret"></span>
            </button>
            <ul class="dropdown-menu ">
              <li
                v-for="(val, i) in entry.select"
                :key="i"
                class="dropdown-list"
                :value="val"
                @click="handleClick"
              >
                {{ val }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <span>{{ filter }}</span> -->
      <div class="row">
        <div
          v-for="(folio, i) in portfolios"
          :key="i"
          class="col-sm-4 portfolio-item"
        >
          <a
            :href="('#' + folio.hash_link)"
            class="portfolio-link"
            data-toggle="modal"
          >
            <div class="caption">
              <div class="caption-content">
                <i class="fa fa-search-plus fa-3x"></i>
              </div>
            </div>
            <div v-if="folio.image">
              <img
                :src="folio.image.url"
                class="img-responsive"
                :alt="folio.image.filename"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from "lodash"
export default {
  props: ["entry"],
  data() {
    return {
      portfolios: this.entry.portfolio.portfolo_details,
      // filter:""
    }
  },
  computed:{
    // filter:()=>{

    // }
  },
  methods:{
    
    handleClick(e){
                 switch (e.target.innerText) {
      case 'A-Z':
        this.portfolios = this.portfolios.sort()
        break
      case 'Z-A':
         this.portfolios = this.portfolios.reverse()
        break
        default:
      this.portfolios = entry.portfolio.portfolo_details
          }
    }
    }
}
</script>

<style>
.dropdown-list:hover{
  background-color: coral;
}
.dropdown-list:active{
  background-color: coral;
  opacity: 0.7;
}
</style>