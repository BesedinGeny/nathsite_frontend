<template>
  <nav-component />
  <router-view />
</template>

<script>
import NavComponent from "@/components/NavComponent";
export default {
  components: { NavComponent },
};
</script>

<style lang="sass">
body
  margin: 0
</style>
