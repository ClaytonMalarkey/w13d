<template>
    <div class="song-list">
      <h2>Song List</h2>
      <ul>
        <li v-for="song in songs" :key="song.song_id">
          <button @click="addToPlaylist(song)">Add to Playlist</button>
          <button @click="playSong(song)">Play</button>
          {{ song.title }} by {{ song.artist }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      songs: Array,
    },
    methods: {
      addToPlaylist(song) {
        this.$emit('add-to-playlist', song);
      },
      playSong(song) {
        this.$emit('play-song', song);
      },
    },
  };
  </script>
  