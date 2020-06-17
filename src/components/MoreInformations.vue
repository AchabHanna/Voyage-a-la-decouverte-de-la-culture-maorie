<template>
  <div class="">
    <div class="test">
      <div class="moreInformations">
        <div class="moreInformations__wrapper">
          <div class="moreInformations__containerImg">
            <img :src="img" alt="" class="moreInformations__img" />
          </div>
          <div class="moreInformations__containerText">
            <h1 class="moreInformations__title">{{ title }}</h1>
            <p class="moreInformations__description">{{ description }}</p>
          </div>
        </div>
        <div class="moreInformations__filter"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    filter: String,
    img: String,
    titleLargeInformations: String,
    descriptionFirst: String,
    descriptionSecond: String,
    descriptionThird: String,
    descriptionFourth: String,
    SecondTitle: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.test {
  position: absolute;
  width: 84vw;
  height: 100vh;
  right: 0;
  z-index: 1;
  overflow: auto;
}
.moreInformations {
  width: 84vw;
  height: 100vh;
  background: rgba(2, 2, 2, 0.9);

  &__wrapper {
    @include flexbox(row, initial, center);
    height: 100vh;
    width: 84vw;
    padding-left: 10vw;
  }
  &__containerText {
    @include flexbox(column, initial, flex-start);
    height: 42vh;
    width: 30vw;
    margin-left: 10vw;
  }
  &__title {
    font-size: 24px;
    text-transform: uppercase;
    color: $white;
    font-family: $Cinzel;
    margin-bottom: 50px;
  }

  &__description {
    font-family: $Avenir;
    font-size: 18px;
    color: white;
    line-height: 27px;
    text-align: left;
  }

  &__filter {
    background-color: #353535;
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
}
</style>
