<template>
  <div class="classes">
    <div class="card-wrapper">
      <h4 style="text-align:left;">Proficiency Choices</h4>
      <div
        class="prof-choices choice-wrapper"
        v-for="(prof, index) in details.cardData.proficiency_choices"
        :key="`${index}`"
        style="text-align:left;"
      >
        <b-button v-b-toggle="`collapse-` + index" class="btn-light">
          Choose: {{ prof.choose }}
        </b-button>
        <b-collapse :id="`collapse-${index}`">
          <b-card class="detail-collapse">
            <ul style="text-align:left; list-style-type:none; columns:2;">
              <li
                v-for="(choice, index) in prof.from"
                :key="`${choice}-${index}`"
                class="choices choice-wrapper"
              >
                {{ choice.name }}
              </li>
            </ul>
          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "classes",
  props: ["details"]
};
</script>

<style scoped>
.card-wrapper {
  margin-left: 50px;
}
.choice-wrapper {
  margin-left: 25px;
}
p.card-text {
  font-family: Bitter-Italic;
  font-weight: italic;
}
.btn-light {
  color: #393b55;
  background-color: transparent;
  border-color: #393b55;
  border-radius: 33px;
  margin: 10px;
}
.btn-light:hover {
  background-color: #847894;
  border-color: #847894;
}
.btn-light:focus {
  background-color: #847894;
  border-color: #847894;
}
.detail-collapse {
  background-color: transparent;
  border: none;
}
</style>
