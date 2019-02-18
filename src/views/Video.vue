<template>
  <div class="webox-video">
    <div class="webox-video-main">
      <el-input
        placeholder="请输入视频链接..."
        suffix-icon="iconfont icon-search"
        v-model="vipLink"
        @keyup.native.enter="search"
      ></el-input>
      <div class="webox-video-main-view">
        <iframe
          id="webox-iframe"
          :src="url"
          height="400px"
          width="600px"
          frameborder="0"
          scrolling="no"
          allowfullscreen
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
  height: 100vh;
  width: 100vw;
  background-color: #0f1414;
}
.webox-video-main {
  padding: 30px;
  width: 610px;
  margin: auto;
}
#webox-iframe {
  margin-top: 5px;
}
.webox-video-main-view {
  margin-top: 30px;
  width: 610px;
  height: 410px;
  background-color: #232323;
  border-radius: 5px;
}
</style>
