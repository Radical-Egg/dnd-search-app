<template>
  <div class="search">
    <form class="form-inline my-2 my-lg-0" @submit.prevent="processResults">
      <input
        class="form-control mr-sm-2 input-search-bar"
        type="search"
        placeholder="Acid Arrow"
        aria-label="Search"
        v-model="search"
      />
      <button class="btn btn-light my-2 my-sm-0 search-btn" type="submit">
        Search
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  computed: {
    search: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.$store.commit("UpdateSearch", value);
      }
    }
  },
  methods: {
    // search for results
    // slug search and search through all caregories
    // resolve a list of the results
    getResults: function(categories) {
      let searchRes;
      this.$store.dispatch("Slug");

      return new Promise((resolve, reject) => {
        for (const category of Object.entries(categories)) {
          axios
            .get(
              `${this.$store.state.api}${category[1]}?name=${this.$store.state.searchQuery}`
            )
            .then(response => {
              if (response.data.count > 0) {
                for (let j = 0; j < response.data.count; j++) {
                  this.$store.commit(
                    "UpdateResults",
                    response.data.results[j].url
                  );
                }
              }
            })
            .then(() => {
              // return true if we were able to reach API
              searchRes = true;
              resolve(searchRes);
            })
            .catch(error => {
              // return false if we couldn't
              searchRes = false;
              reject(error);
            });
        }
      });
    },
    // get all the categories from the api
    // resolve an object of categories
    getCategories: function() {
      let categories = {};
      return new Promise((resolve, reject) => {
        axios
          .get(this.$store.state.api)
          .then(response => {
            for (let category in response.data) {
              if (category !== "starting-equipment") {
                categories[category] = `${category}/`;
              }
            }
            resolve(categories);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },
    // async call to get all the api categories and search for a result
    processResults: async function() {
      this.$store.commit("ClearResults");
      try {
        const categories = await this.getCategories();
        const results = await this.getResults(categories);
        if (results) {
          this.$emit("forceRerender");
          this.search = "";
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-light {
  color: #393b55;
  background-color: #d6cde2;
  border-color: #d6cde2;
  border-radius: 33px;
}
.btn-light:hover {
  background-color: #847894;
  border-color: #847894;
}
.input-search-bar {
  background-color: transparent;
  border-color: #d6cde2;
  border-radius: 33px;
  color: #d6cde2 !important;
}
.input-search-bar:focus {
  background-color: transparent;
  border-color: #d6cde2;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #d6cde2;
}
.input-search-bar::placeholder {
  color: #d6cde2;
}
.input-search-bar::placeholder:focus {
  color: rgba(214, 205, 226, 0.9);
}
</style>
