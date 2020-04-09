<template>
<div v-if="entry">
  <myHeader :header="entry.header[0]"/>
   <nuxt/>
  <myFooter :footer="entry.footer[0]" />
  </div>
</template>

<script>
import {mapState } from 'vuex' 
import myHeader from "../components/Header"
import myFooter from "../components/Footer"
export default {
components:{
    myHeader,
    myFooter
},
   computed:  mapState(['entry'])
}
</script>