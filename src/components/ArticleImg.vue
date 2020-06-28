<template>
  <div class="articleImg">
    <div class="articleImg__container">
      <h1 class="articleImg__title">{{ title }}</h1>
      <p class="articleImg__description">{{ description }}</p>

      <button @click="videoIsVisible" class="moreInformation__buttonIcon btn">
        <svg
          class="articleImg__nextIcon"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44 22.5C44 34.3741 34.3741 44 22.5 44C10.6259 44 1 34.3741 1 22.5C1 10.6259 10.6259 1 22.5 1C34.3741 1 44 10.6259 44 22.5ZM45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5ZM13.5728 19.1883L22.5728 27.3701L22.9171 27.6831L23.254 27.3622L31.8449 19.1804L31.1553 18.4563L22.9013 26.3172L14.2455 18.4484L13.5728 19.1883Z"
            fill="white"
          />
        </svg>
      </button>
    </div>

    <div class="articleImg__filter"></div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    description: String
  },
  data() {
    return {};
  },

  methods: {
    videoIsVisible() {
      this.$emit("is-visible");
      let video = document.getElementById("video");
      video.play();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.articleImg {
  &__container {
    @include flexbox(column, center, center);
    background-color: black;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 2;
  }
  &__title {
    color: $white;
    font-family: $Cinzel;

    margin-bottom: 100px;
    font-size: 24px;
    text-transform: uppercase;

    @include large {
      font-size: 28px;
    }

    @include extraLarge {
      font-size: 38px;
    }
  }
  &__description {
    font-family: $Avenir;
    font-size: 16px;
    color: $white;
    line-height: 24px;
    text-align: center;
    padding-right: 10px;
    padding-left: 10px;

    @include medium {
      font-size: 18px;
      line-height: 27px;
      padding-right: 48px;
      padding-left: 48px;
    }
    @include large {
      font-size: 20px;
      line-height: 33px;
      padding-right: 110px;
      padding-left: 110px;
      padding-right: 80px;
      padding-left: 80px;
    }
    @include extraLarge {
      font-size: 24px;
      line-height: 36px;
      padding-right: 190px;
      padding-left: 190px;
    }
  }
}
</style>
