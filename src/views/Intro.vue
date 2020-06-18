<template>
  <div class="intro">
    <div v-on:click="myMenu" id="menu">
      <h1>MENU</h1>
    </div>
    <div id="mySubMenu" style="visibility: hidden;">
      <div id="test" class="sub1">
        <router-link to="/Intro">
          <a>INTRO</a>
        </router-link>
      </div>
      <div class="sub2">
        <router-link to="/wero">
          <a>POWHIRI</a>
        </router-link>
      </div>
      <div class="sub3">
        <router-link to="/">
          <a>VISITE</a>
        </router-link>
      </div>
    </div>
    <Muted />
    <ArticleVideo :video="video" />
    <div class="intro__wrapper">
      <h1 class="intro__title">{{ title }} {{ name }}</h1>
      <p class="intro__subtitle">{{ subtitle }} {{ name }}</p>
      <p class="intro__message">
        À travers la cérémonie d’accueil du powihiri tu pourras découvrir la
        culture maori.
      </p>
      <div class="intro__container">
        <img
          src="@/assets/icon/moreInfoIcon.svg"
          alt="symbôle maori"
          class="intro__moreInformationsIcon"
        />
        <p class="intro__explain">
          Clique sur ce symbole pour avoir plus d’informations
        </p>
      </div>
      <router-link to="/wero">
        <button class="intro__button">decouvrir la ceremonie</button>
      </router-link>
    </div>
    <div class="intro__filter"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: require("@/assets/video/video-intro.mp4"),
      name: this.$route.params.name,
      title: "Haero mai",
      subtitle: "Bienvenue",
    };
  },
  methods: {
    myMenu: function() {
      var myStyle = document.getElementById("mySubMenu").style.visibility;

      if (myStyle == "hidden") {
        document.getElementById("mySubMenu").style.visibility = "visible";
      } else {
        document.getElementById("mySubMenu").style.visibility = "hidden";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.intro {
  #menu {
    position: absolute;
    left: -100px;
    top: 20%;
    width: 200px;
    height: 200px;
    color: #bb8233;
    background: #000000a8;
    border-radius: 0 50% 50% 0;
    cursor: pointer;
  }
  #menu h1 {
    position: relative;
    display: flex;
    height: 200px;
    width: 200px;
    align-items: center;
    justify-content: flex-end;
    right: 30px;
  }
  .mySubMenu {
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.659);
  }

  .sub1 {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 5%;
    left: 150px;
  }

  .sub1 a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    text-decoration: none;
    color: #bb8233;
    background: #000000a8;
    border-radius: 100%;
    transition-delay: 0.5s;
    transition: all 0.5s ease-in-out;
  }

  .sub1 a:hover {
    background: #ffffff24;
  }

  .sub2 {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 25%;
    left: 250px;
  }

  .sub2 a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    text-decoration: none;
    color: #bb8233;
    background: #000000a8;
    border-radius: 100%;
    transition-delay: 0.5s;
    transition: all 0.5s ease-in-out;
  }

  .sub2 a:hover {
    background: #ffffff24;
  }

  .sub3 {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 45%;
    left: 150px;
  }

  .sub3 a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    text-decoration: none;
    color: #bb8233;
    background: #000000a8;
    border-radius: 100%;
    transition-delay: 0.5s;
    transition: all 0.5s ease-in-out;
  }

  .sub3 a:hover {
    background: #ffffff24;
  }

  &__wrapper {
    height: 80vh;
    @include flexbox(column, center, center);
    font-family: "robotto";
    font-size: 16px;
    color: $white;
    margin: 10px;
    text-align: center;
    line-height: 24px;
    @include medium {
      font-size: 18px;
    }
    @include large {
      font-size: 22px;
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: $CinzelDecorative;
    @include extraLarge {
      font-size: 24px;
    }
  }

  &__subtitle {
    font-size: 8px;
    @include medium {
      font-size: 8px;
    }
    @include large {
      font-size: 14px;
    }
    @include extraLarge {
      font-size: 16px;
    }
  }

  &__message {
    margin-top: 60px;
  }

  &__container {
    @include flexbox(column, center, center);
    margin-top: 50px;

    @include medium {
      @include flexbox(row, center, center);
    }
    @include large {
      margin-top: 60px;
    }
  }

  &__explain {
    @include medium {
      margin-left: 10px;
    }
  }

  &__button {
    background-color: #feedcc;
    border: none;
    text-transform: uppercase;
    font-size: 10px;
    width: 180px;
    height: 36px;
    margin-top: 50px;

    @include medium {
      width: 198px;
      height: 40px;
      margin-top: 48px;
      font-size: 12px;
    }

    @include extraLarge {
      width: 230px;
      height: 50px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__filter {
    background-color: $filterColor;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
  }
}
</style>
