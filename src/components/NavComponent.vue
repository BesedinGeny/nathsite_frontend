<template>
  <div class="navDesktop">
    <input type="image" class="logo" :src="require(`@/assets/Vector.png`)" />
    <div class="linksAndEnter">
      <div class="links">
        <div class="link" v-for="item in arrOfLinks" :key="item">
          {{ item }}
        </div>
      </div>
      <input type="image" class="Enter" :src="require(`@/assets/Enter.png`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
  data: () => {
    return {
      arrOfLinks: ["Главная", "Материалы", "Услуги"],
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
.linksAndEnter
  width: 375px
  margin-right: 60px
  @include displayRow
.links
  width: 277px
  @include displayRow
</style>