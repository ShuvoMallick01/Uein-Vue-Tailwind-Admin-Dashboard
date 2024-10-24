<script setup lang="ts">
import { useWindowScroll, useDark, useToggle } from "@vueuse/core";
// CUSTOM STORE
import { useSidebar } from "@/stores/sidebar";
// SHADCN COMPONENTS
import { Input } from "@/components/ui/input";
// CUSTOM COMPONENTS
import Icon from "@/components/Icon.vue";
// import SearchPopover from "./popovers/SearchPopover.vue";
import ProfilePopover from "./popovers/ProfilePopover.vue";
import NotificationPopover from "./popovers/NotificationPopover.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { y } = useWindowScroll({ behavior: "smooth" });

const sidebarStore = useSidebar();
</script>

<template>
  <header
    class="sticky top-0 z-[12] w-full my-5 px-4 transition-all"
    :class="{ 'backdrop-blur-sm ': y > 0 }"
  >
    <div class="max-w-screen-2xl mx-auto sm:px-7 2xl:px-20">
      <div
        class="flex items-center justify-between py-4 px-7 bg-card rounded-xl shadow-md"
      >
        <div class="flex items-center gap-4">
          <button class="lg:hidden" @click="sidebarStore.handleSidebarToggle()">
            <Icon icon="iconamoon:menu-burger-horizontal" height="24" />
          </button>

          <div class="relative flex">
            <Input
              placeholder="Search here..."
              class="w-[280px] h-10 pl-5 bg-gray-50 rounded-md"
            ></Input>
            <button>
              <Icon
                icon="ri:search-line"
                height="18"
                class="absolute top-1/2 end-0 me-3 transform -translate-y-1/2 text-gray"
              />
            </button>
          </div>
        </div>

        <div class="flex items-center gap-[20px]">
          <NotificationPopover />

          <button>
            <Icon icon="basil:chat-outline" height="24" />
          </button>

          <button @click="toggleDark()">
            <Icon
              icon="ci:sun"
              height="20"
              v-if="isDark"
              class="text-warning"
            />
            <Icon
              icon="solar:moon-line-duotone"
              height="20"
              v-else
              class="text-gray"
            />
          </button>

          <ProfilePopover />
        </div>
      </div>
    </div>
  </header>
</template>
