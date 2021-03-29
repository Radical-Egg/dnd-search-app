<template>
  <div class="ability-scores">
    <p class="card-text" style="text-align: center;">
      {{ details.cardData.full_name }}
    </p>
    <p class="card-desc card-text">
      {{ details.cardData.desc[0] }}
    </p>
    <p class="general-info" v-if="details.cardData.desc[1] !== undefined">
      {{ details.cardData.desc[1] }}
    </p>
  </div>
</template>
<script>
export default {
  name: "ability-scores",
  props: ["details"]
};
</script>

<style scoped>
.card-text {
  font-family: Bitter-Italic;
  font-weight: italic;
}
.general-info {
  font-family: Bitter;
  font-weight: normal;
  text-align: left;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 25px;
}
.card-desc {
  padding-left: 70px;
  padding-right: 70px;
}
</style>
