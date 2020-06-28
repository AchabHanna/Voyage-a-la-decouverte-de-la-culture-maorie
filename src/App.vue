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
  transition: scale 0.4s;
  &:hover {
    transform: scale(1.1);
  }
}

.slide-left-enter {
  transform: translateX(50vw);
  opacity: 0;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-out;
}

.slide-left-leave-to {
  transform: translateX(50vw);
  opacity: 0;
}

.opacity-enter {
  opacity: 0;
}
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.4s ease-out;
}

.opacity-leave-to {
  opacity: 0;
}
.moreInformationIcon__button {
  opacity: 1;
  display: none;
  transition: opacity 0.4s;
}

.moreInformation__button {
  position: absolute;
  z-index: 1;
  bottom: 60px;
  transition: 0.4s;
  left: 48vw;
}

.moreInformation__buttonIcon {
  position: absolute;
  z-index: 1;
  bottom: 60px;
  transition: 0.4s;
}
</style>
