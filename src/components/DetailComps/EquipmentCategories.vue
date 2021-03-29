<template>
  <div class="equipment-categories">
    <p class="card-text" style="text-align: left;">
      Types of Equipment:
    </p>
    <ul style="text-align:left;">
      <li
        class="equipment-list"
        v-for="(equipment, index) in details.cardData.equipment"
        :key="`${index}-${equipment}`"
      >
        {{ equipment.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "equipment-categories",
  props: ["details"]
};
</script>
