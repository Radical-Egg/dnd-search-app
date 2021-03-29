<template>
  <div class="about">
    <div class="grid-container">
      <div class="Card">
        <Search />
        <Card
          v-for="(item, index) in results"
          :key="`card-${index}`"
          :url="data.url[index]"
        />
      </div>
      <div class="Details"></div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Results",
  components: {
    Card,
    Search
  },
  computed: {
    results: {
      get() {
        return this.$store.state.results;
      }
    }
  },
  created() {
    this.data = {
      url: this.results
    };
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 0.6fr 0.8fr 1.2fr 0.6fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". Card Details ."
    ". Card Details ."
    ". Card Details .";
}

.Card {
  grid-area: Card;
}

.Details {
  grid-area: Details;
}
</style>
