<template>
  <div class="webox-video">
    <div class="main">
      <el-input
        @keyup.native.enter="search"
        placeholder="请输入视频链接..."
        suffix-icon="iconfont icon-search"
        v-model="vipLink"
      ></el-input>
      <div class="main-view">
        <iframe
          :src="url"
          allowfullscreen
          frameborder="0"
          height="400px"
          id="video-iframe"
          scrolling="no"
          width="600px"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      vipLink: this.config.video.vipLink,
      url: ""
    };
  },
  methods: {
    search() {
      this.url = this.config.video.api + this.vipLink;
    }
  }
};
</script>

<style scoped>
.webox-video {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: linear-gradient(to top, #000000, #393939);
}
.main {
  width: 610px;
  padding: 30px;
  margin: auto;
}
.main-view {
  width: 610px;
  height: 410px;
  margin-top: 30px;
  background-color: #232323;
  border-radius: 5px;
}
#video-iframe {
  margin-top: 5px;
}
</style>
