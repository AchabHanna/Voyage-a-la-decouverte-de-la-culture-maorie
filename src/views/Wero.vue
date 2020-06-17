<template>
  <div class="">
    <Muted />
    <ArticleVideo :video="video" />
    <ArticleImg
      :title="article.title"
      :description="article.description"
    ></ArticleImg>
    <button
      class="moreInformationIcon__button moreInformationIcon__button--taiaha"
      :class="[active ? activeClass : '']"
    >
      >
      <img
        src="../assets/icon/moreInfoIcon.svg"
        alt=""
        class="moreInformationIcon__iconTaiaha"
      />
    </button>
    <button
      class="moreInformationIcon__button moreInformationIcon__button--puipui"
      :class="[active ? activeClass : '']"
    >
      <img
        src="../assets/icon/moreInfoIcon.svg"
        alt=""
        class="moreInformationIcon__iconPuipui"
      />
    </button>
    <button v-if="iconVisible">
      <img
        class="moreInformation__button btn"
        src="../assets/icon/icon-clic.svg"
        alt="icon changer de page"
      />
    </button>

    <TimeLine @timeline-hovered="iconDisplay" @timeline-leave="iconUndisplay" />
  </div>
</template>
<script>
import contentServices from "@/services/contentService.js";
export default {
  data() {
    return {
      active: false,
      iconVisible: true,
      activeClass: "is-visible",
      video: require("@/assets/video/video-wero.mp4"),
      article: {}
    };
  },
  async mounted() {
    contentServices.getArticle(1).then(response => {
      this.article = response.data;
      console.log(response.data);
    });

    await this.isVisible();
  },
  methods: {
    async isVisible() {
      let video = document.getElementById("video");
      console.log(video);
      video.onended = () => {
        this.showButton();
      };
    },
    showButton() {
      this.active = !this.active;
    },
    iconDisplay() {
      this.iconVisible = false;
    },
    iconUndisplay() {
      this.iconVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.moreInformationIcon__button {
  opacity: 1;
  display: none;
  transition: opacity 1s;
  &--taiaha {
    top: 42vh;
    right: 26vw;
  }

  &--puipui {
    top: 64vh;
    right: 16vw;
  }
}
.is-visible {
  display: block;
  opacity: 1;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  transition: 0.2s;
  &:hover {
    transform: scale(1.3);
  }
}
.moreInformation__button {
  position: absolute;
  z-index: 1;
  bottom: 70px;
  //transform: translateX(-50%);
  // &:hover {
  //   transform: scale(0.2);
  // }
}
</style>
