<template>
  <div class="testBody">
    <div class="testBlock">
      <div class="testItem" v-for="item in arrOfLinks" :key="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => {
    return {
      arrOfLinks: ["Главная", "Материалы", "Услуги"],
    };
  },
}
</script>

<style lang="scss" scoped>
  .testBlock {
    height: 2000px;
    background-color: red;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .testItem {
    background-color: aqua;
    width: 500px;
    height: 500px;
  }
  .testBody{
    display: flex;
    justify-content: center;
  }
</style>