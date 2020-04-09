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
