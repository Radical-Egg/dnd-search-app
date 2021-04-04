<template>
  <div class="home" :key="componentKey">
    <div class="grid-container">
      <div class="Search-Bar">
        <Search v-on:forceRerender="forceRerender()" />
      </div>
      <div class="CD-Wrapper">
        <div class="home-wrapper" v-if="componentKey == 0"><HomeCard /></div>
      </div>
      <div class="Cards Scroll">
        <Card
          v-for="result in results"
          :url="result"
          v-bind:key="result"
          v-on:forceRerender="forceRerender()"
        />
      </div>
      <div class="Detail Detail-Scroll">
        <Details :compKey="componentKey" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";
import Details from "@/components/Details.vue";
import HomeCard from "@/components/HomeCard.vue";

export default {
  name: "Home",
  components: {
    Search,
    Card,
    Details,
    HomeCard
  },
  computed: {
    results: {
      get() {
        return this.$store.state.results;
      }
    }
  },
  data() {
    return {
      componentKey: 0,
      url: []
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
      this.$nextTick();
    }
  },
  created() {
    // access the results computed property when comp gets created
    this.data = {
      url: this.results
    };
  }
};
</script>

<style scoped>
@media screen and (min-width: 1440px) {
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto 1fr 1fr;
    gap: 0px 0px;
    max-height: 100vh;
    max-width: 1625px;
    margin-left: auto;
    margin-right: auto;
  }

  .Search-Bar {
    grid-area: 1 / 2 / 2 / 3;
    display: inline-block;
    max-height: 100px;
    padding: 50px;
  }

  .CD-Wrapper {
    grid-area: 2 / 2 / 4 / 4;
    display: inline-block;
    background-color: #a79bb7;
    border-radius: 33px;
    margin-bottom: 50px;
    min-width: 1250px;
    max-width: 1527px;
    min-height: 600px;
  }

  .Cards {
    grid-area: 2 / 2 / 4 / 3;
    display: inline-block;
    max-height: fit-content;
    margin-bottom: 50px;
    margin-left: 50px;
    padding-top: 50px;
  }

  .Detail {
    grid-area: 2 / 3 / 4 / 4;
    display: inline-block;
    margin-bottom: 50px;
    padding-left: 50px;
    margin-right: 10px;
  }

  div.Scroll {
    width: auto;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }

  div.Detail-Scroll {
    max-width: fit-content;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }
}
</style>
