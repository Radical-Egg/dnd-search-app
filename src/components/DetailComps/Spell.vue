<template>
  <div class="spell-detail">
    <p class="card-text" style="text-align: center;">
      {{ details.cardData.desc[0] }}
    </p>
    <ul class="attr-list" style="text-align:left;">
      <li>Level - {{ details.cardData.level }}</li>
      <li v-if="details.cardData.attack_type !== undefined">
        Attack Type - {{ details.cardData.attack_type }}
      </li>
      <li>Casting Time - {{ details.cardData.casting_time }}</li>
      <li>Duration - {{ details.cardData.duration }}</li>
      <div class="dmg-wrapper" v-if="details.cardData.damage !== undefined">
        <li v-if="details.cardData.damage !== undefined">
          Damage Type - {{ details.cardData.damage.damage_type.name }}
        </li>
        <li
          v-for="(damage, index) in details.cardData.damage
            .damage_at_slot_level"
          :key="`slot-${index}`"
        >
          Level: {{ index }} Damage Roll: {{ damage }}
        </li>
        <li
          v-for="(damage, index) in details.cardData.damage
            .damage_at_character_level"
          :key="`slot-${index}`"
        >
          Level: {{ index }} Damage Roll: {{ damage }}
        </li>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "spell-detail",
  props: ["details"]
};
</script>
