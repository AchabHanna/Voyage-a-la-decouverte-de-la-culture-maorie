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
    <Muted />
    <button
      class="moreInformationIcon__button moreInformationIcon__button--sculture btn"
      :class="[active ? activeClass : '']"
      @click="showWindow"
    >
      <img
        src="../assets/icon/moreInfoIcon.svg"
        alt=""
        class="moreInformationIcon__iconculture"
      />
    </button>
    <router-link to="/Hongi">
      <button v-if="iconVisible" class="moreInformation__button btn">
        <img
          class="moreInformation__img"
          src="../assets/icon/icon-clic.svg"
          alt="icon changer de page"
        />
      </button>
    </router-link>
    <TimeLine @timeline-hovered="iconDisplay" @timeline-leave="iconUndisplay" />
    <transition name="slide-left">
      <MoreInformations
        @hide-window="moreInformationsIsShown = false"
        v-show="moreInformationsIsShown"
        :title="amuletteTitle"
        :description="amuletteDescription"
        :img="amuletteImg"
        position="absolute"
        view="classic"
      />
    </transition>
    <transition name="slide-left">
      <MoreInformations
        @hide-window="moreInformationsIsShown = false"
        v-show="moreInformationsIsShown"
        :title="scultureTitle"
        :description="scultureDescription"
        :img="scultureImg"
        position="secondView"
        view="reverse"
      />
    </transition>
  </div>
</template>

<script>
import contentServices from "@/services/contentService.js";
export default {
  data() {
    return {
      visible: true,
      moreInformationsIsShown: false,
      active: false,
      iconVisible: true,
      activeClass: "is-visible",
      title: "karanga",
      description:
        "Le Karanga, qui signifie appeler, invoquer, est une des étapes de la cérémonie du powhiri. C'est un échange d'appels chantés presque exclusivement par les femmes dans la langue maorie, le Reo Maori. Il a lieu lorsqu'un groupe de visiteurs se déplace sur le marae ou dans la zone de réunion officielle, dans le but de rendre hommage aux morts et de se référer à la raison de la réunion des groupes.",
      video: require("@/assets/video/video-karanga.mp4"),
      scultureTitle: "tikki",
      scultureDescription:
        "Les Tikis sont des statues omniprésentes dans la culture maori. Ces représentants des dieux ou de génies sont là pour protéger les habitants Selon les sorciers polynésiens, le Tiki est le créateur de l’homme. Il serait l’héritier du mana, c’est-à-dire une énergie et un rayonnement qui relient l’univers et les êtres.Chaque Tiki a sa propre personnalité, il peut être neutre mais aussi bénéfique pour certains et maléfique pour d’autres. Ils sont présents dans beaucoup de maisons.",
      scultureImg: require("@/assets/img/scultureTikki-2.jpg"),
      amuletteTitle: "tikki",
      amuletteDescription:
        "Outres les statuettes, vous pouvez également le trouver en pendentif en os, en nacre, en jade ou en corail. Il a une valeur rituelle comme une amulette. Selon la coutume maorie, il doit se transmettre de génération en génération. Représentant un humain, il évoque les ancêtres et peut ainsi symboliser la fertilité et éloignes les énergies négatifs.",
      amuletteImg: require("@/assets/img/amuletteTiki-2.jpg"),
      article: {}
    };
  },
  async mounted() {
    contentServices.getArticle(2).then(response => {
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
    showWindow() {
      this.moreInformationsIsShown = true;
    },
    vidIsVisible() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.moreInformationIcon__button--sculture {
  top: 8vh;
  right: 14vw;
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
