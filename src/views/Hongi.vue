<template>
  <div class="hongi">
    <ArticleVideo :video="video" />
    <ArticleImg
      :title="title"
      :description="description"
      :img="img"
    ></ArticleImg>
    <Muted />
    <button
      class="moreInformationIcon__button moreInformationIcon__button--tatouage btn"
      :class="[active ? activeClass : '']"
      @click="Shown"
    >
      <img
        src="../assets/icon/moreInfoIcon.svg"
        alt=""
        class="moreInformationIcon__iconTaiaha"
      />
    </button>
    <router-link to="/Haka">
      <button v-if="iconVisible" class="moreInformation__button btn">
        <img
          class="moreInformation__img"
          src="../assets/icon/icon-clic.svg"
          alt="icon changer de page"
        />
      </button>
    </router-link>
    <div class="hongi__filter"></div>
    <TimeLine @timeline-hovered="iconDisplay" @timeline-leave="iconUndisplay" />
    <transition name="slide-left">
      <LargeInformations
        @hide-modal="largeInformationIsShown = false"
        v-show="largeInformationIsShown"
        :title="moreInformationsTitle"
        :description="moreInformationsDescription"
        :img="moreInformationsImg"
        :titleLargeInformations="titleLargeInformations"
        :descriptionFirst="descriptionFirstMoreInformations"
        :descriptionSecond="descriptionSecondMoreInformations"
        :descriptionThird="descriptionThirdMoreInformations"
        :descriptionFourth="descriptionFourthMoreInformations"
        background="tatouage"
      />
    </transition>
  </div>
</template>

<script>
import contentServices from "@/services/contentService.js";
export default {
  data() {
    return {
      img: require("../assets/img/backgroundHongi.svg"),
      title: "Hongi",
      description:
        "Le hongi est le salut traditionnel maori, l’origine de ce geste remonterait à la création de l'humanité. À la création de la première femme, Hine ahu one ' femme faite de terre ', par le dieu créateur Tane, celui-ci l'aurait fabriquée avec de la glaise avant de lui insuffler la vie par les narines. D'où cet échange de souffle appelé ' ha ', ou le souffle de la vie.Aujourd’hui, cette pratique est utilisée par des membres du gouvernement ou de la famille royale lors de rencontres officielles.",
      largeInformationIsShown: false,
      active: false,
      iconVisible: true,
      activeClass: "is-visible",
      titleLargeInformations: "le toutouages",
      moreInformationsTitle: "moko",
      moreInformationsDescription:
        "Le moko est le tatouage facial maori, son procédé se nomme Ta Moko. Tous les symboles utilisés ont une signification. C’est un langage visuel qui connecte celui qui le porte à son whakapapa (généalogie).Le visage chez les maoris, était considérée comme la partie du corps la plus sacrée. Toutes les personnes de haut-rangs étaient tatoués, ceux qui ne l’étaient pas, étaient considérés comme n’ayant aucun statut social.",
      moreInformationsImg: require("@/assets/img/moko.svg"),
      descriptionFirstMoreInformations:
        "Dans la culture Maorie, les tatouages représentent une interaction complexe entre une excellence artistique et un langage visuel. Il souligne l'identité et le rôle de chaque individu.",
      descriptionSecondMoreInformations:
        "Les hommes et les femmes ne portent pas les mêmes tatouages. Ceux des femmes se limitent aux extrémités du corps comme les mains, les lèvres et le menton. Seules les femmes de haut rang (femme de chef) pouvaient avoir les cuisses et les fesses tatouées.",
      descriptionThirdMoreInformations:
        "Quant aux hommes, leur corps est entièrement tatoué. Plus il y a de tatouages, plus le prestige est grand. Être tatoué est un signe de force, de pouvoir et de richesse pour l’individu. On peut observer les tatouages les plus élaborés sur les guerriers ou les chefs.",
      descriptionFourthMoreInformations:
        "La méthode de tatouage maori est différente de celle du monde occidental. Elle est basée sur l'utilisation de peignes à dents, de différentes largeurs, appelées uhi. Les peignes sont trempés dans un pigment foncé et frappent la peau à petit coup avec de petits maillets appelés tā. Les dents du peigne transpercent la peau et déposent le pigment. ",
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
      this.largeInformationIsShown = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.moreInformationIcon__button--tatouage {
  top: 42vh;
  right: 26vw;
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
    transform: scale(1.1);
  }
}
</style>
