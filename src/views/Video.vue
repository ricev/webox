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
  width: 100vw;
  height: 100vh;
  background-color: #0f1414;
}
.webox-video-main {
  width: 610px;
  margin: auto;
  padding: 30px;
}
#webox-iframe {
  margin-top: 5px;
}
.webox-video-main-view {
  width: 610px;
  height: 410px;
  margin-top: 30px;
  border-radius: 5px;
  background-color: #232323;
}
</style>
