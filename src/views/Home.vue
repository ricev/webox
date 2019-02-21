<template>
  <div class="webox-home">
    <div
      class="webox-home-item"
      v-for="(item, index) in appList"
      :key="item.name"
      :style="'background-color:' + colors[index % 10]"
    >
      <router-link :to="item.url">
        <div style="width:100%;height:100%;">
          <h1>{{ item.name }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      appList: [
        {
          name: "CloudMusic",
          description:
            "聚合音乐播放器，集成网易云、腾讯、虾米、酷狗、百度等多家资源",
          url: "music"
        },
        {
          name: "NimaVideo",
          description: "视频解析播放器，支持主流视频网站付费视频播放",
          url: "video"
        }
      ],
      colors: [
        "#d08c8c",
        "#4478a2",
        "#7961b5",
        "#618fb5",
        "#61b5a8",
        "#b57f61",
        "#aab53c",
        "#607d8b"
      ]
    };
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}
.webox-home {
  background: linear-gradient(to top, #e0eafc, #cfdef3);
  color: #61819e;
  height: 100vh;
  width: 100vw;
}
.webox-home-item {
  width: 20%;
  height: 150px;
  margin: 15px;
  display: inline-block;
  text-align: center;
  color: #ebf3ef;
  box-shadow: 0 26px 40px -24px #88a2cf;
  border-radius: 5px;
  overflow: hidden;
}

.webox-home-item :hover {
  transform: scale(1.2);
}

.webox-home-item h1:hover,
.webox-home-item p:hover {
  transform: none;
}

.webox-home-item h1 {
  margin-top: 30px;
  color: #ebf3ef;
  font-size: 20px;
  cursor: pointer;
}

.webox-home-item p {
  margin: 5px 20px;
  font-size: 13px;
  color: #ebf3ef;
}
@media screen and (max-width: 700px) {
  .webox-home-item {
    width: 90%;
  }
}
</style>
