<template>
  <div class="navContainerForDesktop">
    <input class="logo" type="image"  :src="require(`@/assets/Vector.svg`)" />
    <div class="navButtonsContainer">
          <router-link class="navButton" v-for="item in pathsToPages" :key="item" :to="item.url">
            {{ item.lable }}
          </router-link>
      <input class="LogInButton" type="image"  :src="require(`@/assets/LogIn.svg`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
  data: () => {
    return {
      pathsToPages: [
        {url: "/", lable: "Главная"},
        {url: "/materials", lable: "Материалы"},
        {url: "/services", lable: "Услуги"},
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@mixin  displayRow($justifyContentPar:space-between)
  display: flex
  align-items: center
  flex-direction: row
  justify-content: $justifyContentPar
@mixin font
  font-family: Inter, sans-serif
  font-style: normal
  color: black
  font-size: 18px
  line-height: 19.36px
  font-weight: 400

.navContainerForDesktop
  width: 100vw
  padding-left: 30px
  height: 70px
  position: fixed
  z-index: 1
  background-color: white
  @include displayRow
.navButtonsContainer
  width: 375px
  margin-right: 60px
  @include displayRow
.navButton
  text-decoration: none
  @include font
</style>