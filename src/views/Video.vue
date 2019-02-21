<template>
  <div class="webox-video">
    <div class="webox-video-main">
      <el-input
        @keyup.native.enter="search"
        placeholder="请输入视频链接..."
        suffix-icon="iconfont icon-search"
        v-model="vipLink"
      ></el-input>
      <div class="webox-video-main-view">
        <iframe
          :src="url"
          allowfullscreen
          frameborder="0"
          height="400px"
          id="webox-iframe"
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
      vipLink: "https://www.iqiyi.com/v_19rr7p5sag.html",
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
  background: linear-gradient(to top, #000000, #393939);
  height: 100vh;
  width: 100vw;
}
.webox-video-main {
  margin: auto;
  padding: 30px;
  width: 610px;
}
#webox-iframe {
  margin-top: 5px;
}
.webox-video-main-view {
  background-color: #232323;
  border-radius: 5px;
  height: 410px;
  margin-top: 30px;
  width: 610px;
}
</style>
