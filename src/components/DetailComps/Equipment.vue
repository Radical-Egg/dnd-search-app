<template>
  <div class="equipment">
    <p class="card-text">{{ details.cardData.desc[0] }}</p>
    <ul style="text-align:left;">
      <li>
        Cost: {{ details.cardData.cost.quantity }}
        {{ details.cardData.cost.unit }}
      </li>
      <li>Weight: {{ details.cardData.weight }}</li>
      <li v-if="details.cardData.equipment_category !== undefined">
        Equipment Category: {{ details.cardData.equipment_category.name }}
      </li>
      <li v-if="details.cardData.gear_category !== undefined">
        Gear Category: {{ details.cardData.gear_category.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "equipment",
  props: ["details"]
};
</script>

<style scoped>
p.card-text {
  font-family: Bitter-Italic;
  font-weight: italic;
}
</style>
