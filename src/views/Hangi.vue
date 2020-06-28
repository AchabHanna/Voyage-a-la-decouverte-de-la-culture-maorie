<template>
  <div>
    <ArticleVideo :video="video" />
    <transition name="opacity">
      <ArticleImg
        @is-visible="vidIsVisible"
        v-show="visible"
        :title="title"
        :description="description"
      ></ArticleImg>
    </transition>
    <TimeLine />
    <Muted />
    <router-link to="/wero">
      <button v-if="iconVisible" class="moreInformation__button btn">
        <img
          class="moreInformation__img"
          src="../assets/icon/icon-clic.svg"
          alt="icon changer de page"
        />
      </button>
    </router-link>
    <TimeLine @timeline-hovered="iconDisplay" @timeline-leave="iconUndisplay" />
  </div>
</template>

<script>
import contentServices from "@/services/contentService.js";
export default {
  data() {
    return {
      visible: true,
      active: false,
      iconVisible: true,
      activeClass: "is-visible",
      video: require("@/assets/video/video-hangi.mp4"),
      title: "hangi",
      description:
        " Le hangi traditionnel consiste à envelopper des paniers d’aliments contenant de la viande et des légumes (patate douce, maïs, carotte…) et de les cuire dans un trou creusé dans le sol au fond duquel sont déposées des pierres volcaniques chauffées. On trouve ce plat le plus souvent dans la région de Rotorua au Nord de l’île.",
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
    },
    vidIsVisible() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
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
    transform: scale(1.1);
  }
}
</style>
