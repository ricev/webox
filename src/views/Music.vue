<template>
  <el-container class="webox-music">
    <el-header class="webox-music-search">
      <el-row align="middle" type="flex">
        <el-col :lg="4" :xs="0">
          <img height="80px" src="@/assets/images/logo.png" />
        </el-col>
        <el-col :lg="{ span: 8, offset: 3 }" :xs="{ span: 22, offset: 1 }">
          <el-col :lg="15" :xs="18">
            <el-input
              @keyup.native.enter="search"
              placeholder="请输入歌名..."
              suffix-icon="iconfont icon-search"
              v-model="keyword"
            ></el-input>
          </el-col>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="webox-music-view">
      <el-col
        :lg="{ span: 13, offset: 2 }"
        :xs="{ span: 24 }"
        class="webox-music-table"
      >
        <el-row align="middle" class="webox-music-table-header" type="flex">
          <el-col :span="2"></el-col>
          <el-col :span="10">歌曲</el-col>
          <el-col :span="8">歌手</el-col>
        </el-row>
        <el-row
          :key="item.id"
          align="middle"
          class="webox-music-table-item"
          type="flex"
          v-for="item in musicList"
        >
          <el-col :span="2">{{ item.id + 1 }}</el-col>
          <el-col :span="10">{{ item.name }}</el-col>
          <el-col :span="8">{{ item.artist }}</el-col>
          <el-col :lg="1" :xs="2">
            <i class="el-icon-loading" v-if="music.url == item.url"></i>
          </el-col>
          <el-col :lg="1" :xs="2">
            <i @click="musicPlay(item.id)" class="el-icon-service"></i>
          </el-col>
          <el-col :span="1">
            <i @click="musicDownload(item.id)" class="el-icon-download"></i>
          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="{ span: 4, offset: 2 }" :xs="{ span: 0 }">
        <img :src="music.cover" width="300px" />
      </el-col>
    </el-main>
    <el-footer class="webox-music-panel" height="80px">
      <el-col :lg="{ span: 22, offset: 2 }" :xs="{ span: 24 }">
        <div class="vaudio">
          <el-col :lg="22" :xs="24">
            <el-row :gutter="10" align="middle">
              <el-col :lg="1" :xs="8">
                <i @click="preSong" class="iconfont icon-left-circle"></i>
              </el-col>
              <el-col :lg="1" :xs="8">
                <i
                  @click="playSong"
                  class="iconfont icon-play-circle"
                  v-if="!isPlay"
                ></i>
                <i
                  @click="pauseSong"
                  class="iconfont icon-pause-circle"
                  v-if="isPlay"
                ></i>
              </el-col>
              <el-col :lg="1" :xs="8">
                <i @click="nextSong" class="iconfont icon-right-circle"></i>
              </el-col>
              <el-col :lg="16" :xs="20">
                <div>
                  <el-slider
                    :format-tooltip="formatTimeBar"
                    @change="setTimer"
                    v-model="timePer"
                  ></el-slider>
                </div>
              </el-col>
              <el-col :lg="1" :xs="0" style="margin-top:3px">
                <i
                  :scale="3"
                  @click="setMuted"
                  class="iconfont icon-sound"
                  v-if="!isMuted"
                ></i>
                <i
                  :scale="3"
                  @click="cancelMuted"
                  class="iconfont icon-muted"
                  v-if="isMuted"
                ></i>
              </el-col>
              <el-col :lg="2" :xs="0">
                <el-slider
                  @change="setVolume"
                  v-model="volumeValue"
                ></el-slider>
              </el-col>
            </el-row>
          </el-col>
          <audio
            :src="music.url"
            @playing="setPlaying"
            @timeupdate="timeUpdate"
            autoplay
            id="vaudio"
            ref="vaudio"
          ></audio>
        </div>
      </el-col>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      keyword: "",
      isPlay: false,
      isMuted: false,
      timePer: 0,
      volumeValue: 100,
      music: {},
      musicList: []
    };
  },
  created: function() {
    // 根据config配置默认播放歌曲
    this.$axios
      .get(this.config.music.api, {
        params: {
          server: "netease",
          id: this.config.music.initId,
          r: 233
        }
      })
      .then(res => {
        let _music = res.data[0];
        _music.id = 0;
        this.music = _music;
        this.musicList = [_music];
      });
  },
  methods: {
    search() {
      let serverArray = ["netease", "xiami", "tencent", "kugou", "baidu"];
      let keyword = this.keyword;
      this.musicList = [];
      // 拼接多个平台搜索结果
      for (let ser of serverArray) {
        this.$axios
          .get(this.config.music.api, {
            params: {
              server: ser,
              type: "parse",
              id: keyword,
              r: 233
            }
          })
          .then(res => {
            let _musicList = res.data;
            for (let i = 0; i < _musicList.length; i++) {
              _musicList[i].id = this.musicList.length;
              this.musicList.push(_musicList[i]);
            }
          });
      }
    },
    musicPlay(i) {
      this.music = this.musicList[i];
      this.$refs.vaudio.play();
    },
    musicDownload(i) {
      let url = this.musicList[i].url;
      this.$axios.get(url).then(res => {
        fetch(res.request.responseURL).then(res =>
          res.blob().then(blob => {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = this.musicList[i].name + ".mp3";
            a.click();
            window.URL.revokeObjectURL(url);
          })
        );
      });
    },
    playSong() {
      if (this.music.url) {
        this.$refs.vaudio.play();
      }
    },
    pauseSong() {
      this.$refs.vaudio.pause();
      this.isPlay = false;
    },
    preSong() {
      let index = this.music.id;
      if (index > 0) {
        index--;
        this.music = this.musicList[index];
        this.$refs.vaudio.play();
      }
    },
    nextSong() {
      let index = this.music.id;
      if (index < this.musicList.length - 1) {
        index++;
        this.music = this.musicList[index];
        this.$refs.vaudio.play();
      }
    },
    setPlaying() {
      this.isPlay = true;
    },
    formatTimeBar(val) {
      let vaudio = this.$refs.vaudio;
      if (vaudio) {
        let current = (val * vaudio.duration) / 100;
        let minute = parseInt(current / 60);
        let second = parseInt(current % 60);
        let result = minute + ":" + second;
        return result;
      }
    },
    timeUpdate() {
      let vaudio = this.$refs.vaudio;
      if (vaudio) this.timePer = (100 * vaudio.currentTime) / vaudio.duration;
      if (this.timePer > 99.9) this.nextSong();
    },
    setVolume() {
      this.$refs.vaudio.volume = this.volumeValue / 100;
    },
    setTimer() {
      let vaudio = this.$refs.vaudio;
      this.$refs.vaudio.currentTime = (this.timePer / 100) * vaudio.duration;
    },
    setMuted() {
      this.$refs.vaudio.muted = true;
      this.isMuted = true;
    },
    cancelMuted() {
      this.$refs.vaudio.muted = false;
      this.isMuted = false;
    }
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.iconfont {
  fill: currentColor;
  overflow: hidden;
  font-size: 30px;
}
.webox-music {
  background-color: #142639;
  height: 100vh;
  width: 100vw;
  color: rgb(97, 129, 158);
}
.webox-music-search {
  font-size: 16px;
}
.webox-music-view {
  margin-top: 30px;
  min-height: calc(100vh - 200px);
  text-align: left;
}
.webox-music-table {
  height: calc(100vh - 240px);
  overflow: auto;
}
.webox-music-table-header {
  font-size: 20px;
}
.webox-music-table-item {
  padding: 10px 0;
  font-size: 16px;
  border-top: 1px solid #40648541;
}
.webox-music-panel {
  margin-top: 10px;
}
</style>
