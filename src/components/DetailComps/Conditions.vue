<template>
  <div class="conditions">
    <div class="desc-wrapper" v-if="details.cardData.desc !== undefined">
      <p
        class="desc-item card-text"
        v-for="(desc, index) in details.cardData.desc"
        :key="`desc-${index}`"
      >
        {{ desc }}
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
