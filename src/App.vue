<template>
  <div id="app">
    <meta name="viewport" content="width=device-width" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      componentKey: 0
    };
  },
  methods: {}
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #393b55;
}
html {
  background-color: #393b55;
}

@font-face {
  font-family: "Bitter";
  src: local("Bitter"),
    url(./assets/Fonts/Bitter/Bitter-VariableFont_wght.ttf) format("truetype");
  font-weight: normal;
}
@font-face {
  font-family: "Bitter-Italic";
  src: local("Bitter"),
    url(./assets/Fonts/Bitter/Bitter-Italic-VariableFont_wght.ttf)
      format("truetype");
  font-weight: italic;
}
@font-face {
  font-family: "Dosis";
  src: local("Dosis"),
    url(./assets/Fonts/Dosis/Dosis-VariableFont_wght.ttf) format("truetype");
}
@font-face {
  font-family: "Josefin_Slab";
  src: local("Josefin_Slab"),
    url(./assets/Fonts/Josefin_Slab/JosefinSlab-VariableFont_wght.ttf)
      format("truetype");
}
* {
  scrollbar-width: thin;
  scrollbar-color: #d6cde2 #847894;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #847894;
  border-radius: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  overflow: scroll;
  height: 400px;
}

*::-webkit-scrollbar-thumb {
  background-color: #d6cde2;
  border-radius: 33px;
  border: 3px solid #847894;
}
</style>
