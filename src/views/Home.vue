<template>
  <div class="home">
    <ReferenceItem v-if="isPickedPhotoState" :pickPhoto = "isPickedPhotoState" />
    <Navigation/>
    <Slider/>
    <Information/>
    <Offer />
    <Realization ref="realization" />
    <Relationship />
    <Reference />
    <Contact />
    <Footer />

  </div>
</template>

<script>
import Navigation from '../components/Navbar.vue'
import Slider from '../components/Slideshow.vue'
import Information from '../components/Information.vue'
import Offer from '../components/Offer.vue'
import Realization from '../components/Realization.vue'
import Relationship from "../components/Relationship";
import Reference from '../components/Reference'
import ReferenceItem from "../components/ReferenceItem";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default {
  name: 'Home',
  components: {
    Footer,
    Navigation,
    Slider,
    Information,
    Offer,
    Realization,
    Relationship,
    Reference,
    ReferenceItem,
    Contact
  },
  computed: {
      isPickedPhotoState(){
        return this.$store.state.pickPhoto
      }
  },
  watch: {
      isPickedPhotoState(oldVal, val){
        if (oldVal !== val) {
          return this.$store.state.pickPhoto
        }
      }
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass">

  .home
    width: 100%
    height: 100%
    overflow-x: hidden
    position: relative
    /*background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(121, 151,254,1) 100%)*/



</style>
