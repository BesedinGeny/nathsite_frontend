<template>
  <div class="navDesktop">
    <input type="image" class="logo" :src="require(`@/assets/Vector.svg`)" />
    <div class="navButtonsContainer">
      <div class="navButton">
        <div v-for="item in pathsToPages" :key="item">
          <router-link class="link" :to="item[0]">
          {{ item[1] }}
            </router-link>
        </div>
      </div>
      <input type="image" class="LogIn" :src="require(`@/assets/LogIn.svg`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
  data: () => {
    return {
      pathsToPages: [
        ["/", "Главная"],
        ["/materials", "Материалы"],
        ["/services", "Услуги"],
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
.navDesktop
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
  width: 277px
  @include displayRow
.link
  text-decoration: none
  @include font
</style>