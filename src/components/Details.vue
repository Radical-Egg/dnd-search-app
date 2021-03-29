<template>
  <div class="detail-comp">
    <div
      class="card"
      style="width: 23rem;"
      v-if="details.cardData !== undefined"
    >
      <div class="card-body">
        <h2 v-if="details.cardData.name !== undefined" class="card-title">
          {{ details.cardData.name }}
        </h2>
        <h2 v-else class="card-title">
          {{ details.cardData.index }}
        </h2>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <div class="basic-info" v-if="details.category === 'spells'">
          <Spell :details="details" />
        </div>
        <div class="basic-info" v-else-if="details.category === 'features'">
          <Feature :details="details" />
        </div>
        <div
          class="basic-info"
          v-else-if="details.category === 'equipment-categories'"
        >
          <EquipmentCategories :details="details" />
        </div>
        <div
          class="basic-info"
          v-else-if="details.category === 'ability-scores'"
        >
          <AbilityScores :details="details" />
        </div>
      </div>
    </div>
    <div class="card" v-else>
      <div class="card-body">
        <div class="basic-info"><GenericDetail /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Spell from "./DetailComps/Spell.vue";
import Feature from "./DetailComps/Feature.vue";
import EquipmentCategories from "./DetailComps/EquipmentCategories.vue";
import AbilityScores from "./DetailComps/AbilityScores.vue";
import GenericDetail from "./DetailComps/GenericDetail.vue";

export default {
  name: "detail",
  components: {
    Spell,
    Feature,
    EquipmentCategories,
    AbilityScores,
    GenericDetail
  },
  props: {
    title: {
      type: String
    },
    compKey: {
      type: Number,
      value: 0
    }
  },
  computed: {
    details: {
      get() {
        return this.$store.state.detail;
      }
    }
  },
  mounted() {
    console.log(this.details);
  }
};
</script>

<style scoped>
.card-title {
  font-family: "Dosis";
  color: #393b55;
}
.card {
  background-color: #d6cde2;
  color: #393b55;
  margin-top: 50px;
  border-radius: 25px;
  min-width: 800px;
  box-shadow: 10px 10px 15px #847894;
}
.card-link {
  color: #393b55;
  border-color: #393b55;
  border: solid;
  border-radius: 15px;
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
</style>
