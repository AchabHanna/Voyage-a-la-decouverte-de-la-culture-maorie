<template>
  <div class="informations" @click="hideModal">
    <div class="moreInformations">
      <div class="moreInformations__wrapper">
        <div class="moreInformations__containerImg">
          <img :src="img" alt="jupe puipui" class="moreInformations__img" />
        </div>
        <div class="moreInformations__containerText">
          <h1 class="moreInformations__title">{{ title }}</h1>
          <p class="moreInformations__description">{{ description }}</p>
        </div>
      </div>
      <div class="moreInformations__filter"></div>
    </div>

    <div class="largeInformations">
      <div class="filter">
        <div class="largeInformations__container">
          <h1 class="largeInformations__title">
            {{ titleLargeInformations }}
          </h1>

          <div class="">
            <p
              class="largeInformations__description largeInformations__description--first"
            >
              {{ descriptionFirst }}
            </p>
          </div>

          <div class="largeInformations__position">
            <p
              class="largeInformations__description largeInformations__description--second"
            >
              {{ descriptionSecond }}
            </p>
          </div>
          <div class="">
            <p
              class="largeInformations__description largeInformations__description--tirdh"
            >
              {{ descriptionThird }}
            </p>
          </div>

          <div class="largeInformations__position">
            <p
              class="largeInformations__description largeInformations__description--fourth"
            >
              {{ descriptionFourth }}
            </p>
          </div>
        </div>
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
    descriptionFourth: String
    // imgLargeInformations: String
  },
  methods: {
    hideModal() {
      this.$emit("hide-modal");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.informations {
  position: absolute;
  height: 100vh;
  right: 0;
  z-index: 1;
  overflow: auto;
  max-width: 100vw;
}
.moreInformations {
  height: 90vh;
  background: rgba(2, 2, 2, 0.9);

  &__wrapper {
    @include flexbox(column, initial, center);
    padding: 10px;
    height: 80vh;
    @include medium {
      padding: 30px;
    }
    @include large {
      height: 80vh;
      width: 84vw;
    }

    @include large {
      @include flexbox(row, space-around, center);
      width: 84vw;
      padding: 0;
    }
    @include extraLarge {
      padding-right: 40px;
      padding-left: 40px;
    }
  }
  &__img {
    padding-top: 30px;
    @include large {
      padding: 30px;
    }
  }
  &__containerText {
    margin-top: 30px;
    @include large {
      @include flexbox(column, initial, flex-start);
      padding-top: 20px;
      height: 42vh;
      width: 40vw;
      margin-left: 0;
      padding: 10;
      margin-left: 0;
      margin-top: 0;
    }
    @include extraLarge {
      padding-top: 48px;
    }
  }
  &__title {
    font-size: 18px;
    text-transform: uppercase;
    color: $white;
    font-family: $Cinzel;
    margin-bottom: 14px;
    @include medium {
      margin-bottom: 24px;
      font-size: 22px;
    }
    @include large {
      margin-bottom: 40px;
      font-size: 24px;
    }
  }

  &__description {
    font-size: 16px;
    line-height: 24px;
    font-family: $Avenir;
    color: white;
    text-align: left;
    margin: 20px;

    @include medium {
      font-size: 18px;
      line-height: 27px;
      margin: 0;
    }
  }
}

.largeInformations {
  background-image: url("../assets/img/BackgroundTissage.svg");
  @include backgroundImg(no-repeat, cover, top center);
  height: auto;

  &__title,
  &__titleSecond {
    text-align: center;
    font-size: 28px;
    color: $white;
    font-family: $Cinzel;
    margin-bottom: 20px;
    text-transform: uppercase;
    @include medium {
      font-size: 32px;
    }
    @include large {
      font-size: 34px;
      margin-bottom: 80px;
    }
  }

  &__description {
    max-width: 562px;
    margin-left: 20px;
    margin-right: 20px;
    font-family: $Avenir;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    color: $white;
    @include medium {
      font-size: 18px;
      line-height: 27px;
    }
    @include large {
      font-size: 22px;
      line-height: 33px;
    }

    &--second,
    &--tirdh,
    &--fourth {
      margin-top: 80px;
      margin-bottom: 40px;
      @include large {
        margin-top: 200px;
      }
    }
  }
}

.largeInformations__position {
  display: flex;
  justify-content: flex-end;
}

.filter {
  background: linear-gradient(
    179.94deg,
    rgba(2, 2, 2, 0.48) 0.03%,
    rgba(11, 10, 10, 0.48) 2.78%,
    rgba(22, 21, 17, 0.48) 21.74%,
    rgba(24, 20, 16, 0.48) 37.11%,
    rgba(20, 17, 11, 0) 99.03%
  );
  height: auto;
}
</style>
