<template>
  <div class="border h-full">
    <div class="text-2xl space-x-8 px-10">
      <button>TV Series</button>
      <button>Movies</button>
      <button>Animes</button>
      <div
        v-for="movie in movies"
        class="bg-cover bg-no-repeat bg-center py-[250px] rounded-3xl mt-3 relative"
        :style="{
          'background-image':
            'url(https://image.tmdb.org/t/p/w500' + movie.backdrop_path + ')',
        }"
      >
        <div class="absolute text-white flex flex-col gap-5 bottom-10 left-10">
          <p class="text-4xl">{{ movie.title }}</p>
          <p>Action, Adventure, Sci fi</p>
          <div>
            <button
              class="bg-red-500 text-white font-semibold rounded-md w-36 p-2"
            >
              Watch
            </button>
            <button
              class="bg-slate-500 opacity-80 text-white font-semibold rounded-md w-14 p-2 ml-3"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const movies = ref([]);

const getPopularMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e3924c315e1d5a5d6498e16609d4a361&language=en-US&page=1"
  );
  const data = await response.json();
  movies.value = data.results.slice(0, 1);
  console.log(movies.value);
};

onMounted(async () => {
  getPopularMovies();
});
</script>

<style lang="scss" scoped></style>
