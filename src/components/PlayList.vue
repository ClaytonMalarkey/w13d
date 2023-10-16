<template>
    <div class="play-list">
      <h2>PlayList</h2>
      <ul>
        <li v-for="song in playlist" :key="song.song_id" @click="playSong(song)">
          {{ song.title }} by {{ song.artist }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      playlist: Array,
    },
    methods: {
      playSong(song) {
        this.$emit('play-song', song);
      },
    },
  };
  </script>
  
  <style scoped>
  .play-list {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
  }
  
  li {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #eaeaea;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  li:hover {
    background-color: #dcdcdc;
  }
  </style>
  