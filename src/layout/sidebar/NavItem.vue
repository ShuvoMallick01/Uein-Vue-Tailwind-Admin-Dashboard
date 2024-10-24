<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
// CUSTOM COMPONENT
// import Icon from "@/components/Icon.vue";
import NavAccordion from "./NavAccordion.vue";
// CUSTOM STORE
import { useSidebar } from "@/stores/sidebar";
import Icon from "@/components/Icon.vue";
// TYPE
import { NavItem } from "./type";

const route = useRoute();
const { handleCloseSidebar } = useSidebar();

defineProps<{ item: NavItem }>();
</script>

<template>
  <li
    v-if="!item.children"
    @click="handleCloseSidebar()"
    class="px-[14px] transition-all duration-300 ease-in-out cursor-pointer text-gray group border-l-transparent hover:font-medium hover:text-primary hover:bg-hover"
    :class="{
      'bg-hover  !text-primary': route.path === item.route,
    }"
  >
    <RouterLink
      :to="item.route"
      class="flex p-4 text-[13px] font-medium truncate items-center gap-3"
    >
      <Icon :icon="item.icon" height="20" width="20" />

      {{ item.label }}
    </RouterLink>
  </li>

  <li v-else>
    <NavAccordion :item="item" />
  </li>
</template>
