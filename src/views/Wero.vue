<template>
  <div>
    <ArticleVideo :video="video" />
    <ArticleImg
      :title="article.title"
      :description="article.description"
    ></ArticleImg>
    <Muted />
    <button
      class="moreInformationIcon__button moreInformationIcon__button--taiaha"
      :class="[active ? activeClass : '']"
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
      @click="Shown"
    >
      <img
        src="../assets/icon/moreInfoIcon.svg"
        alt=""
        class="moreInformationIcon__iconPuipui"
      />
    </button>
    <button v-if="iconVisible" class="moreInformation__button btn">
      <img
        class="moreInformation__img"
        src="../assets/icon/icon-clic.svg"
        alt="icon changer de page"
      />
    </button>
    <TimeLine @timeline-hovered="iconDisplay" @timeline-leave="iconUndisplay" />
    <LargeInformations
      v-show="isShown"
      :title="moreInformationsTitle"
      :description="moreInformationsDescription"
      :img="moreInformationsImg"
      :titleLargeInformations="titleLargeInformations"
      :descriptionFirst="descriptionFirstMoreInformations"
      :descriptionSecond="descriptionSecondMoreInformations"
      :descriptionThird="descriptionThirdMoreInformations"
      :descriptionFourth="descriptionFourthMoreInformations"
      :SecondTitle="secondTitle"
    />
  </div>
</template>
<script>
import contentServices from "@/services/contentService.js";
export default {
  data() {
    return {
      isShown: false,
      titleLargeInformations: "tatouage",
      moreInformationsTitle: "jupe puipui",
      moreInformationsDescription:
        "Le piupui est une jupe traditionnelle maorie souvent fabriqué à partir de lin. Elle  peut être porté par des  guerriers ou bien par des femmes lorsqu’elle dansent. En effet celle-ci à l’avantage d’être fluide et de suivre facilement le mouvement corporel.",
      moreInformationsImg: require("@/assets/img/jupePuipui.svg"),
      titleMoreInformations: "title",
      descriptionFirstMoreInformations:
        "Dans la culture Maorie, les tatouages représentent une interaction complexe entre une excellence artistique et un langage visuel. Il souligne l'identité et le rôle de chaque individu.",
      descriptionSecondMoreInformations:
        "Les hommes et les femmes ne portent pas les mêmes tatouages. Ceux des femmes se limitent aux extrémités du corps comme les mains, les lèvres et le menton. Seules les femmes de haut rang (femme de chef) pouvaient avoir les cuisses et les fesses tatouées. Quant aux hommes, eux ont le corps entièrement tatoué. ",
      descriptionThirdMoreInformations:
        "Plus l’homme est tatoué, plus son prestige est grand. Être tatoué est un signe de force, de pouvoir et de richesse pour l’individu. On peut observer les tatouages les plus élaborés sur les guerriers ou les chefs. ",
      descriptionFourthMoreInformations:
        "La méthode de tatouage maori est différente de celle du monde occidental. Elle est basée sur l'utilisation de peignes à dents, de différentes largeurs, appelées uhi. Les peignes sont trempés dans un pigment foncé et frappent la peau à petit coup avec de petits maillets appelés tā. Les dents du peigne transpercent la peau et déposent le pigment. ",
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
    },
    Shown() {
      this.isShown = true;
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
  bottom: 60px;
  transition: 0.6s;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
