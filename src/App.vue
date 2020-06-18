<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
@import "@/assets/css/vendors/reset.scss";
@import "@/assets/css/global/mixin.scss";
@import "@/assets/css/styles.scss";
p {
  font-family: $Avenir;
}

.btn {
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  transition: scale 1s;
  &:hover {
    transform: scale(1.1);
  }
}

.slide-left-enter {
  transform: translateX(150px);
  opacity: 0;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-out;
}

.slide-left-leave-to {
  transform: translateX(150px);
  opacity: 0;
}

.opacity-enter {
  opacity: 0;
}
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.6s ease-out;
}

.opacity-leave-to {
  opacity: 0;
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

.moreInformationIcon__button {
  opacity: 1;
  display: none;
  transition: opacity 1s;
}

.moreInformation__button {
  position: absolute;
  z-index: 1;
  bottom: 60px;
  transition: 0.4s;
  left: 50vw;
}
</style>
