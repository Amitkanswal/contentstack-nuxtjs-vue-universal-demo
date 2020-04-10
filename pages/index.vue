<template>
<div v-if="data">
   <header>
      <div id="maincontent" class="container" tabindex="-1">
        <div class="row">
          <div class="col-lg-12">
            <div v-if="data.banner.image">
              <img
                :src="data.banner.image.url"
                :alt="data.banner.image.filename"
                class="img-responsive"
              />
            </div>
            <div class="intro-text">
              <h1 class="name">{{ data.banner.title }}</h1>
              <hr class="star-light" />
              <span class="skills">{{ data.banner.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
<Portfolio :entry="data"/>
<Gallery :entry="data"/>
<About :entry="data.about"/>
<Contact :entry="data.contact" />
 <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
      <a class="btn btn-primary" href="#page-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
    <!-- Portfolio Modals -->
    <div v-for="(folio, i) in data.portfolio.portfolo_details" :key="i">
      <div
        :id="folio.hash_link"
        class="portfolio-modal modal fade"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-lg-offset-2">
                <div class="modal-body">
                  <h2>{{ folio.title }}</h2>
                  <hr class="star-primary" />
                  <div v-if="folio.image">
                    <img
                      :src="folio.image.url"
                      class="img-responsive img-centered"
                      alt=""
                      @click="filter = changing"
                    />
                  </div>
                  <div v-html="folio.description"></div>
                  <ul class="list-inline item-details">
                    <li>
                      Client:
                      <strong
                        ><a :href="folio.client_link">{{
                          folio.client
                        }}</a>
                      </strong>
                    </li>
                    <li>
                      Date:
                      <strong
                        ><a :href="folio.date_link">{{
                          folio.date
                        }}</a>
                      </strong>
                    </li>
                    <li>
                      Service:
                      <strong
                        ><a :href="folio.service_link">{{
                          folio.service 
                        }}</a>
                      </strong>
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    <i class="fa fa-times"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="/javascript/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="/javascript/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="/javascript/jqBootstrapValidation.js"></script>
    <script src="/javascript/contact_me.js"></script>
    <!-- <script src="/javascript/portfolio.js"></script> -->
    <!-- Theme JavaScript -->
    <script src="/javascript/freelancer.min.js"></script>
</div>
</template>

<script>
import Stack from '../plugins/entry'
import About from "../components/About"
import Contact from "../components/Contact"
import Gallery from "../components/Gallery"
import Portfolio from "../components/Portfolio"
export default {
   
 async asyncData({store}){
   const res =await Stack.getEntry("sample_home")
  store.commit('setEntries',res)
  return{data : res}
 },
layout:'Layout',
components:{
  About,
  Contact,
  Gallery,
  Portfolio
}
}
</script>
