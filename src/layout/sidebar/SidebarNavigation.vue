<script setup lang="ts">
import Scrollbar from "simplebar-vue";
// CUSTOM COMPONENT
import NavItem from "./NavItem.vue";
// MENU LIST
import { navigation } from "@/data/navigation";
// CUSTOM COMPOSABLE
import { useLogo } from "@/hooks/useLogo";

const logo = useLogo();
</script>

<template>
  <div class="px-5 py-6">
    <RouterLink to="/">
      <img
        :src="logo"
        class="w-20 cursor-pointer"
        alt="Uein Admin & Client Dashboard"
      />
    </RouterLink>
  </div>

  <Scrollbar class="h-[calc(100vh-75px)]">
    <nav class="space-y-4 pb-4">
      <div v-for="navGroup in navigation" :key="navGroup.name">
        <h4
          v-if="navGroup.name"
          class="px-5 pb-4 text-sm font-medium text-gray uppercase"
        >
          {{ navGroup.name }}
        </h4>

        <ul class="px-5">
          <NavItem
            v-for="(menuItem, index) in navGroup.menu"
            :item="menuItem"
            :key="index"
          />
        </ul>
      </div>
    </nav>
  </Scrollbar>
</template>
