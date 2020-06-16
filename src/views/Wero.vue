<template>
  <div class="moreInformation">
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

    <TimeLine />
  </div>
</template>
<script>
import contentServices from "@/services/contentService.js";
export default {
  data() {
    return {
      active: false,
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
    }
  }
};
</script>

<style lang="scss" scoped>
.moreInformationIcon__button {
  opacity: 1;
  display: none;
  transition: opacity 1s;
  &--taiaha {
    top: 42vh;
    right: 28vw;
  }

  &--puipui {
    top: 60vh;
    right: 28vw;
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
</style>
