import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  RiMovie2Line,
  RiHomeFill,
  RiCommunityLine,
  RiCompass3Line,
  RiTimerFlashLine,
  RiUser3Line,
  RiUserHeartFill,
  RiStopCircleLine,
  RiSettings4Line,
  RiLogoutBoxRLine,
} from "oh-vue-icons/icons";

addIcons(
  RiMovie2Line,
  RiHomeFill,
  RiCommunityLine,
  RiCompass3Line,
  RiTimerFlashLine,
  RiUser3Line,
  RiUserHeartFill,
  RiStopCircleLine,
  RiSettings4Line,
  RiLogoutBoxRLine
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
