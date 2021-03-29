<template>
  <div class="generic-detail">
    <p class="card-text" style="text-align: center;">
      {{ msg }}
    </p>
  </div>
</template>
<script>
export default {
  name: "generic-detail",
  props: ["msg"]
};
</script>
