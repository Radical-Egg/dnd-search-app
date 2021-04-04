<template>
  <div class="alignments">
    <h5 class="abbrev">{{ details.cardData.abbreviation }}</h5>
    <p class="card-text">{{ details.cardData.desc }}</p>
  </div>
</template>
<script>
export default {
  name: "alignments",
  props: ["details"]
};
</script>

<style scoped>
p.card-text {
  font-family: Bitter-Italic;
  font-weight: italic;
}
</style>
