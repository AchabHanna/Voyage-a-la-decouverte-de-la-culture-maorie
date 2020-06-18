<template>
  <div :class="containerStyle" @click="hideWindow">
    <div class="moreInformation__containt">
      <div class="moreInformation__wrapper">
        <div class="moreInformation__containerImg">
          <img :src="img" alt="" class="moreInformation__img" />
        </div>
        <div :class="viewStyle">
          <h1 class="moreInformation__title">{{ title }}</h1>
          <p class="moreInformation__description">{{ description }}</p>
        </div>
      </div>
      <div class="moreInformations__filter"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    img: String,
    position: String,
    view: String
  },
  methods: {
    hideWindow() {
      this.$emit("hide-window");
    }
  },

  computed: {
    containerStyle() {
      if (this.position == "absolute") {
        return "moreInformation";
      } else {
        return "moreInformation--secondView";
      }
    },
    viewStyle() {
      if (this.view == "reverse") {
        return "moreInformation__containerText--secondView";
      } else {
        return "moreInformation__containerText";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.moreInformation {
  position: absolute;
  width: 84vw;
  height: 100vh;
  right: 0;
  z-index: 1;
  overflow: auto;

  &__containt {
    height: 100vh;
    background-color: #030303;
  }
  &__wrapper {
    @include flexbox(column, initial, center);
    padding: 10px;
    height: 80vh;
    @include medium {
      padding: 30px;
    }

    @include large {
      @include flexbox(row, space-around, center);
      width: 84vw;
      height: 80vh;
      padding: 0;
    }
    @include extraLarge {
      padding-right: 40px;
      padding-left: 40px;
    }
  }
  &__containerImg {
    width: 120px;
    @include medium {
      width: 290px;
    }
    @include large {
      width: 330px;
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
      padding: 10;
      margin: 20px;
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

    @include medium {
      font-size: 18px;
      line-height: 27px;
      margin: 0;
    }
  }
}
.moreInformation--secondView {
  position: absolute;
  width: 84vw;
  height: 100vh;
  right: 0;
  z-index: 1;
  overflow: auto;
  top: 100vh;
}

.moreInformation__containerText--secondView {
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
    order: -1;
  }
  @include extraLarge {
    padding-top: 48px;
  }
}
</style>
