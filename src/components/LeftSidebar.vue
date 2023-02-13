<template>
  <aside class="h-screen overflow-hidden">
    <div class="flex flex-col h-full space-y-11 border pl-10 pt-12">
      <!-- logo -->
      <div class="flex gap-1 text-2xl items-center">
        <v-icon name="ri-movie-2-line" scale="1.8" fill="red" />
        <h1>Exxmon<span class="text-red-500">.</span></h1>
      </div>
      <!-- menu -->
      <div class="flex flex-col gap-4">
        <h2 class="text-[#E2E1E6] text-2xl">Menu</h2>
        <button
          class="flex gap-1 text-xl items-center border-r-4 w-full cursor-pointer border-red-500"
        >
          <span><v-icon name="ri-home-fill" scale="1.8" fill="red" /></span>
          Home
        </button>
        <p class="flex gap-1 text-xl items-center text-gray-300">
          <span
            ><v-icon
              name="ri-community-line"
              scale="1.8"
              fill="lightgray" /></span
          >Community
        </p>
        <p class="flex gap-1 text-xl items-center text-gray-300">
          <span
            ><v-icon
              name="ri-compass-3-line"
              scale="1.8"
              fill="lightgray" /></span
          >Discovery
        </p>
        <p class="flex gap-1 text-xl items-center text-gray-300">
          <span
            ><v-icon
              name="ri-timer-flash-line"
              scale="1.8"
              fill="lightgray" /></span
          >Coming Soon
        </p>
      </div>
      <!-- social -->
      <div class="flex flex-col gap-4">
        <h2 class="text-[#E2E1E6] text-2xl">Socials</h2>
        <p class="flex gap-1 text-xl items-center text-gray-300">
          <span
            ><v-icon name="ri-user-3-line" scale="1.8" fill="lightgray" /></span
          >Friends
        </p>
        <p class="flex gap-1 text-xl items-center text-gray-300">
          <span
            ><v-icon
              name="ri-user-heart-fill"
              scale="1.8"
              fill="lightgray" /></span
          >Parties
        </p>
        <p class="flex gap-1 text-xl items-center text-gray-300">
          <span
            ><v-icon
              name="ri-stop-circle-line"
              scale="1.8"
              fill="lightgray" /></span
          >Media
        </p>
      </div>

      <!-- general -->
      <div class="flex flex-col gap-4">
        <h2 class="text-[#E2E1E6] text-2xl">General</h2>
        <p class="flex gap-1 text-xl items-center text-gray-300">
          <span
            ><v-icon
              name="ri-settings-4-line"
              scale="1.8"
              fill="lightgray" /></span
          >Settings
        </p>
        <p class="flex gap-1 text-xl items-center text-gray-300">
          <span
            ><v-icon
              name="ri-logout-box-r-line"
              scale="1.8"
              fill="lightgray" /></span
          >Log out
        </p>
      </div>
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped></style>
