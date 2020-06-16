<template>
  <div class="sliderContainer">
    <div class="slider">
      <div class="slider__slides">
        <img :src="img1" alt="" class="slider__slide" />
        <img :src="img2" alt="" class="slider__slide" />
        <img :src="img3" alt="" class="slider__slide" />
        <img :src="img4" alt="" class="slider__slide" />
        <img :src="img5" alt="" class="slider__slide" />
        <img :src="img6" alt="" class="slider__slide" />
        <img :src="img7" alt="" class="slider__slide" />
      </div>
    </div>
    <div class="slider__arrow slider__arrow--left">&lt;</div>
    <div class="slider__arrow slider__arrow--right">&gt;</div>
    <h1 class="sliderContainer__title">{{ title }}</h1>
    <p class="sliderContainer__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // img: require("../assets/img/backgroundHangi.svg"),
      img1: require("@/assets/img/1.png"),
      img2: require("@/assets/img/2.png"),
      img3: require("@/assets/img/3.png"),
      img4: require("@/assets/img/4.png"),
      img5: require("@/assets/img/5.png"),
      img6: require("@/assets/img/6.png"),
      img7: require("@/assets/img/7.png"),
      title: "HANGI",
      description:
        " Le hangi traditionnel consiste à envelopper des paniers d’aliments contenant de la viande et des légumes (patate douce, maïs, carotte…) et de les cuire dans un trou creusé dans le sol au fond duquel sont déposées des pierres volcaniques chauffées. On trouve ce plat le plus souvent dans la région de Rotorua au Nord de l’île..",
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.hangi {
  background: black;
  width: 100vw;
  height: 101vh;
}
</style>
