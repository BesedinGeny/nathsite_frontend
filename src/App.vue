<template>
  <nav-component></nav-component>
  <router-view />
</template>

<script>
import NavComponent from "@/components/NavComponent";
export default {
  components: { NavComponent },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
