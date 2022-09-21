<template>
  <nav-component></nav-component>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
}
</style>
<script>
import NavComponent from "@/components/NavComponent";
export default {
  components: { NavComponent },
};
</script>
