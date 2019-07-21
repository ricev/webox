<template>
  <div class="webox-home">
    <div class="project">
      <div
        :key="item.name"
        :style="'background-color:' + colors[index]"
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
            <i class="el-icon-s-help"></i>
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
          description: "聚合音乐播放器，听首歌？",
          route: "music"
        },
        {
          name: "NimaVideo",
          description: "视频解析播放器，看个片？",
          route: "video"
        }
      ],
      colors: ["#61909e", "#252525"]
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
  background-image: linear-gradient(-20deg, #f8f3ff 0%, #fffff0 100%);
}
.project-item {
  display: inline-block;
  width: 240px;
  height: 150px;
  margin: 30px;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  border-radius: 15px;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition-duration: 0.3s;
  transition-property: transform;
}
.project-item:hover {
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
.navigation-row-item span {
  padding-left: 8px;
}
</style>
