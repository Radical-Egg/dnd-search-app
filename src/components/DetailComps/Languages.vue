<template>
  <div class="conditions">
    <div class="desc-wrapper" v-if="details.cardData.type !== undefined">
      <p class="card-text">
        {{ details.cardData.type }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "conditions",
  props: ["details"]
};
</script>

<style scoped>
p.card-text {
  font-family: Bitter-Italic;
  font-weight: italic;
}
</style>
