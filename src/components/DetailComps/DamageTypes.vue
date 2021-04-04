<template>
  <div class="damage-types">
    <p class="card-text">{{ details.cardData.desc[0] }}</p>
    <ul style="text-align:left;"></ul>
  </div>
</template>
<script>
export default {
  name: "damage-types",
  props: ["details"]
};
</script>

<style scoped>
p.card-text {
  font-family: Bitter-Italic;
  font-weight: italic;
}
</style>
