<template>
  <div class="webox-home">
    <div class="project">
      <div
        :key="item.name"
        :style="'background-color:' + colors[index % 10]"
        class="project-item"
        v-for="(item, index) in projects"
      >
        <router-link :to="item.route">
          <h1>{{ item.name }}</h1>
          <p>{{ item.description }}</p>
        </router-link>
      </div>
    </div>
    <div class="navigation">
      <el-row
        :key="nav.id"
        class="navigation-row"
        justify="start"
        type="flex"
        v-for="nav in navs"
      >
        <el-col
          :key="item.name"
          :span="4"
          class="navigation-row-item"
          v-for="item in nav.sites"
        >
          <a :href="item.url">
            <img :alt="e" :src="item.icon" />
            <span>{{ item.name }}</span>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      navs: this.config.home.navs,
      projects: [
        {
          name: "CloudMusic",
          description:
            "聚合音乐播放器，集成网易云、腾讯、虾米、酷狗、百度等多家资源",
          route: "music"
        },
        {
          name: "NimaVideo",
          description: "视频解析播放器，支持主流视频网站付费视频播放",
          route: "video"
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
a:focus,
a:link,
a:active {
  text-decoration: none;
}
.webox-home {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: #ebf3ef;
  background: linear-gradient(#fa00004d, rgba(0, 250, 0, 0.4));
}
.project-item {
  display: inline-block;
  width: 240px;
  height: 150px;
  margin: 30px;
  overflow: hidden;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  vertical-align: middle;
  border-radius: 15px;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition-duration: 0.3s;
  transition-property: transform;
}
.project-item:hover,
.project-item:focus,
.project-item:active {
  transform: scale(1.1);
}
.project-item h1 {
  margin-top: 30px;
  color: #ebf3ef;
  font-size: 21px;
}
.project-item p {
  margin: 5px 20px;
  color: #ebf3ef;
  font-size: 14px;
}
.navigation {
  width: 800px;
  margin: 20px auto;
}
.navigation-row {
  padding: 15px 0px;
}
.navigation-row-item {
  display: inline-block;
  width: 120px;
  height: 40px;
  padding: 5px;
  margin: 2px;
  text-align: left;
  transition: 0.5s;
  cursor: pointer;
}
.navigation-row-item:hover {
  transform: scale(1.2);
}
.navigation-row-item a {
  color: #343536;
  text-decoration: none;
}
.navigation-row-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.navigation-row-item span {
  padding-left: 8px;
  vertical-align: middle;
}
</style>
