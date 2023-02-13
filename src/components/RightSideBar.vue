<template>
  <div class="border h-screen pt-5 px-4">
    <div class="flex justify-center">
      <input
        type="text"
        placeholder="Search"
        class="border py-2 px-4 rounded-full outline-none w-[75%]"
      />
    </div>
    <!-- Popular Movies -->
    <h2 class="font-bold text-gray-500 pl-3 text-lg py-1">Popular Movies</h2>
    <div v-for="movie in movies" :key="movie.id" class="mx-2 my-3 mb-5">
      <div class="flex gap-4">
        <div>
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
            alt="movie backdrop image"
            class="h-24 rounded-xl object-cover w-16"
          />
        </div>
        <div class="flex flex-col flex-1 justify-between">
          <aside class="flex flex-col">
            <p class="text-sm font-semibold">{{ movie.title }}</p>
            <p class="text-sm text-gray-500">
              {{
                genres
                  .filter((genre) =>
                    movie.genre_ids.slice(0, 2).includes(genre.id)
                  )
                  .map((genre) => genre.name)
                  .join(", ")
              }}
            </p>
          </aside>
          <aside class="flex gap-3">
            <p
              class="bg-yellow-500 px-1 rounded-md font-bold text-sm flex items-center"
            >
              IMDb
            </p>
            <p class="font-bold text-gray-500">
              {{ movie.vote_average }}
            </p>
          </aside>
        </div>
      </div>
    </div>
    <button
      class="bg-red-500 text-white font-semibold rounded-md w-60 p-2 ml-2"
    >
      See More
    </button>

    <!-- Favorite -->
    <h2 class="font-bold text-gray-500 pl-3 text-lg py-1">Favorites</h2>
    <div v-for="show in shows" :key="show.id" class="mx-2 my-3 mb-5">
      <div class="flex gap-4">
        <div>
          <img
            :src="'https://image.tmdb.org/t/p/w500' + show.poster_path"
            alt="movie backdrop image"
            class="h-24 rounded-xl object-cover w-16"
          />
        </div>
        <div class="flex flex-col flex-1 justify-between">
          <aside class="flex flex-col">
            <p class="text-sm font-semibold">{{ show.name }}</p>
            <p class="text-sm text-gray-500">
              {{
                genres
                  .filter((genre) =>
                    show.genre_ids.slice(0, 2).includes(genre.id)
                  )
                  .map((genre) => genre.name)
                  .join(", ")
              }}
            </p>
          </aside>
          <aside class="flex gap-3">
            <p
              class="bg-yellow-500 px-1 rounded-md font-bold text-sm flex items-center"
            >
              IMDb
            </p>
            <p class="font-bold text-gray-500">
              {{ show.vote_average }}
            </p>
          </aside>
        </div>
      </div>
    </div>
    <button
      class="bg-red-500 text-white font-semibold rounded-md w-60 p-2 ml-2"
    >
      See More
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const movies = ref([]);
const genres = ref([]);
const shows = ref([]);

const getPopularMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e3924c315e1d5a5d6498e16609d4a361&language=en-US&page=1"
  );
  const data = await response.json();
  movies.value = data.results.slice(0, 3);
};
const getPopularTv = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=e3924c315e1d5a5d6498e16609d4a361&language=en-US&page=1"
  );
  const data = await response.json();
  shows.value = data.results.slice(0, 3);
};

const getGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=e3924c315e1d5a5d6498e16609d4a361&language=en-US"
  );
  const data = await response.json();
  genres.value = data.genres;
};

onMounted(async () => {
  getPopularMovies();
  getGenres();
  getPopularTv();
});
</script>

<style lang="scss" scoped></style>
