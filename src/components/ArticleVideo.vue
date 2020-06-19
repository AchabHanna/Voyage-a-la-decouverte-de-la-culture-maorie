<template>
  <div class="articleVideo">
    <video muted class="articleVideo__video" id="video">
      <source :src="video" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    video: String
  }
};
</script>

<style lang="scss" scoped>
.test {
  width: 100vw;
  height: 100vh;
}
.articleVideo__video {
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
