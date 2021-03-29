<template>
  <div class="feature-detail">
    <p class="card-text">
      {{ details.cardData.desc[0] }}
    </p>
    <ul class="attr-list" style="text-align:left;">
      <li>Class - {{ details.cardData.class.name }}</li>
      <li>Level - {{ details.cardData.level }}</li>
    </ul>
    <div
      class="choice-wrapper"
      style="text-align:left;"
      v-if="details.cardData.choice !== undefined"
    >
      <h3 class="choices">Choices:</h3>
      <ul>
        <li
          v-for="(choice, index) in details.cardData.choice.from"
          :key="`${index}-${choice}`"
        >
          {{ choice.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "feature-detail",
  props: ["details"]
};
</script>
