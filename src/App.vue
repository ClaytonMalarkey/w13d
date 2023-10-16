<template>
  <div id="app">
    <song-list :songs="songs" @add-to-playlist="addToPlaylist" @play-song="playSong" />
    <play-list :playlist="playlist" @play-song="playSong" />
    <now-playing :current-song="currentSong" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    songsProp: Array,
  },
  methods: {
    addToPlaylist(song) {
      this.playlist.push(song);
    },
    playSong(song) {
      this.currentSong = song;
    },
  },
  setup() {
    const playlist = ref([]);
    const currentSong = ref(null);

    const songs = ref([
      {
        song_id: 1,
        title: 'Song 1',
        artist: 'Artist 1',
        image_url: 'song1.jpg',
      },
      {
        song_id: 2,
        title: 'Song 2',
        artist: 'Artist 2',
        image_url: 'song2.jpg',
      },
      {
        song_id: 3,
        title: 'Song 3',
        artist: 'Artist 3',
        image_url: 'song3.jpg',
      },
      // Add more songs as needed
    ]);

    return {
      songs,
      playlist,
      currentSong,
    };
  },
};
</script>
