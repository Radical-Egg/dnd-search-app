<template>
  <div class="classes">
    <p class="card-text"></p>
    <ul style="text-align:left;"></ul>
  </div>
</template>
<script>
export default {
  name: "classes",
  props: ["details"]
};
</script>

<style scoped>
p.card-text {
  font-family: Bitter-Italic;
  font-weight: italic;
}
</style>
