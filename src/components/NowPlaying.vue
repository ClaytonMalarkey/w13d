<template>
    <div class="now-playing">
      <h2>Now Playing</h2>
      <div v-if="currentSong" class="current-song">
        {{ currentSong.title }} by {{ currentSong.artist }}
      </div>
      <div v-else class="no-song-selected">
        Please pick a song.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentSong: Object,
    },
  };
  </script>
  
  <style scoped>
  .now-playing {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .current-song {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .no-song-selected {
    font-size: 1.2rem;
    color: #777;
  }
  </style>
  