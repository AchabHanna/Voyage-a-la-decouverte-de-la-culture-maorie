<template>
  <div>
    <ArticleVideo :video="video" />
    <transition name="opacity">
      <ArticleImg
        @is-visible="vidIsVisible"
        v-show="visible"
        :title="hakaTitle"
        :description="hakaDescription"
      />
    </transition>
    <Muted />
    <router-link to="/Hangi">
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
      iconVisible: true,
      video: require("@/assets/video/video-haka-rugby.mp4"),
      hakaTitle: "haka",
      hakaDescription:
        "Le haka est une danse chantée, il s’agit d’un rituel pratiqué par les Maoris lors de conflits, visant à impressionner les adversaires. cette danse complexe est une expression de la passion, de la vigueur et de l'identité de ce peuple. Les Maoris l'ont rendu mondialement célèbre par l'intermédiaire de l'équipe de rugby à XV de Nouvelle-Zélande, les All Blacks, qui l'interprètent avant leurs matchs depuis 1905.",
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
