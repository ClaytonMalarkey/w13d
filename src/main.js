import Vue from "vue";
import App from "./App.vue";

import SongList from "./components/SongList.vue";
import PlayList from "./components/PlayList.vue";
import NowPlaying from "./components/NowPlaying.vue";

Vue.component("song-list", SongList);
Vue.component("play-list", PlayList);
Vue.component("now-playing", NowPlaying);


new Vue({
  render: (h) => h(App),
}).$mount("#app");
