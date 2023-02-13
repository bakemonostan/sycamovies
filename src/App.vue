<template>
  <main>
    <div class="flex h-screen">
      <div class="w-2/12">
        <!-- Left Sidebar -->
        <left-sidebar></left-sidebar>
      </div>

      <div class="w-8/12">
        <!-- Middle Section -->
        <main-section></main-section>
      </div>
      <div class="w-2/12">
        <!-- Right Sidebar -->
        <right-side-bar></right-side-bar>
      </div>
    </div>
  </main>
</template>

<script setup>
import LeftSidebar from "./components/LeftSidebar.vue";
import RightSideBar from "./components/RightSideBar.vue";
import MainSection from "./components/MainSection.vue";
</script>

<style scoped></style>
