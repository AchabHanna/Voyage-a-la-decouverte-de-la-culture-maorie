<template>
  <div>
    <ArticleVideo :video="video" />
    <ArticleImg
      :title="article.title"
      :description="article.description"
    ></ArticleImg>
    <Muted />
    <button
      class="moreInformationIcon__button moreInformationIcon__button--taiaha btn"
      :class="[active ? activeClass : '']"
      @click="showWindow"
    >
      <img
        src="../assets/icon/moreInfoIcon.svg"
        alt=""
        class="moreInformationIcon__iconTaiaha"
      />
    </button>
    <button
      class="moreInformationIcon__button moreInformationIcon__button--puipui btn"
      :class="[active ? activeClass : '']"
      @click="Shown"
    >
      <img
        src="../assets/icon/moreInfoIcon.svg"
        alt=""
        class="moreInformationIcon__iconPuipui"
      />
    </button>
    <router-link to="/Karanga">
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
      />
    </transition>
    <transition name="slide-left">
      <MoreInformations
        @hide-window="moreInformationsIsShown = false"
        v-show="moreInformationsIsShown"
        :title="taiahaTitle"
        :description="taiahaDescription"
        :img="taiahaImg"
      />
    </transition>
  </div>
</template>
<script>
import contentServices from "@/services/contentService.js";
export default {
  data() {
    return {
      largeInformationIsShown: false,
      moreInformationsIsShown: false,
      active: false,
      iconVisible: true,
      activeClass: "is-visible",
      titleLargeInformations: "Tissage",
      moreInformationsTitle: "jupe puipui",
      moreInformationsDescription:
        "Le piupui est une jupe traditionnelle maorie souvent fabriqué à partir de lin. Elle  peut être porté par des guerriers ou bien par des femmes lorsqu’elle dansent. En effet celle-ci à l’avantage d’être fluide et de suivre facilement le mouvement corporel.",
      moreInformationsImg: require("@/assets/img/jupeGuerrierPuipui.svg"),
      titleMoreInformations: "title",
      descriptionFirstMoreInformations:
        "Le tissage est un des elèments fort de la culture maori. L’expression créative des maoris n’a cessé d’evoluer et de se développer à travers cet art.",
      descriptionSecondMoreInformations:
        "Les maoris confectionnaient principalement leurs vetements à partir de lin, de coton et de peaux de bête.",
      descriptionThirdMoreInformations:
        "Hineteiwaiwa est la principale déesse de la maison du tissage whare pora, elle représente les arts pratiqués par les femmes.Pour les maoris le tissage est un état d’être.",
      descriptionFourthMoreInformations:
        "Hineteiwaiwa est la principale déesse de la maison du tissage whare pora, elle représente les arts pratiqués par les femmes.Pour les maoris le tissage est un état d’être.",
      video: require("@/assets/video/video-wero.mp4"),
      taiahaTitle: "taiaha",
      taiahaDescription:
        "Le Taiaha est une arme traditionnelle maorie taillée dans un morceau de bois ou dans un os de baleine. Il est orné sur la partie haute d'un tiki au regard à la fois bienveillant et menacant suivant qu’il etait utilisé au cours de combat ou de ceremonie. La pointe est souvent ornée d'un beau decor d'entrelacs sur chaque face.",
      taiahaImg: require("@/assets/img/taiaha.svg"),
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
    },
    showWindow() {
      this.moreInformationsIsShown = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.moreInformationIcon__button--taiaha {
  top: 42vh;
  right: 26vw;
}

.moreInformationIcon__button--puipui {
  top: 64vh;
  right: 16vw;
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
