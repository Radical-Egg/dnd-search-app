<template>
  <div class="card-comp">
    <div class="card" style="width: 23rem;">
      <div class="card-body">
        <h2
          v-if="cardData.name !== undefined"
          class="card-title"
          style="text-align:left;"
        >
          {{ cardData.name }}
        </h2>
        <h2 v-else class="card-title" style="text-align:left;">
          {{ cardData.index }}
        </h2>
        <h6 class="card-subtitle mb-2 " style="text-align:left;">
          {{ category }}
        </h6>
        <p class="card-text"></p>
        <a class="stretched-link" @click.prevent="processDetailData()"> </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Card",
  props: ["url"],
  data() {
    return {
      cardData: "",
      category: "",
      isActive: false
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://www.dnd5eapi.co" + this.data.request)
        .then(response => {
          this.category = this.data.request.split("/")[2];

          this.cardData = response.data;
        });
    },
    // send detail information to the store for detail comp to pick up
    sendDataToDetail() {
      let detail = {};
      return new Promise((resolve, reject) => {
        try {
          detail = {
            category: this.category,
            cardData: this.cardData
          };

          this.$store.commit("updateDetail", detail);
          resolve(true);
        } catch (error) {
          console.log(error);
          reject(false);
        }
      });
    },
    processDetailData: async function() {
      await this.sendDataToDetail();
    }
  },
  created() {
    this.data = {
      request: this.url
    };
  }
};
</script>

<style scoped>
.card-title {
  font-family: "Dosis";
  color: #2c3e50;
}
.card {
  background-color: #d6cde2;
  color: #393b55;
  margin-bottom: 50px;
  border-radius: 25px;
  box-shadow: 10px 10px 15px #847894;
}
.card-link {
  color: #393b55;
  border-color: #393b55;
  border: solid;
  border-radius: 33px;
  border-width: 2px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
  font-family: "Josefin_Slab";
  margin-bottom: 5px;
}
.card-text {
  font-size: 16px;
  margin-bottom: 15px;
  font-family: "Bitter";
}
.card-subtitle {
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
