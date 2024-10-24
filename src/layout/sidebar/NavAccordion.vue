<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, RouterLink, useRouter } from "vue-router";
// SHADCDN COMPONENTS
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
// CUSTOM COMPONENT
import Icon from "@/components/Icon.vue";
// CUSTOM STORE
import { useSidebar } from "@/stores/sidebar";
// TYPE
import { NavItem } from "./type";

const props = defineProps<{ item: NavItem }>();

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);
const { handleCloseSidebar } = useSidebar();

const isActive = (path: string) => {
  const find = props.item.children?.find((item) => item.route === path);
  if (find) isOpen.value = true;
  else isOpen.value = false;
};

onMounted(async () => {
  await router.isReady();
  isActive(route.path);
});

watch(
  () => route.path,
  (newValue) => isActive(newValue)
);
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger class="w-full">
      <div
        class="transition-all duration-300 rounded-lg ease-in-out cursor-pointer text-gray hover:font-medium hover:text-primary hover:bg-hover"
        :class="{ ' !text-primary bg-hover': isOpen }"
      >
        <div class="flex items-center justify-between px-4 py-2 mb-1">
          <div class="flex text-sm font-medium truncate items-center gap-2">
            <Icon :icon="item.icon" height="20" />
            {{ item.label }}
          </div>

          <Icon
            :height="14"
            icon="material-symbols:keyboard-arrow-down"
            class="transition-all duration-300 ease-in-out"
            :class="{ 'rotate-180': isOpen }"
          />
        </div>
      </div>
    </CollapsibleTrigger>

    <CollapsibleContent class="space-y-1 mb-4">
      <RouterLink
        :to="child.route"
        v-for="child in item.children"
        @click="handleCloseSidebar()"
        class="flex items-center gap-2 ps-[22px] pe-4 py-2 duration-300 ease-in-out group text-[14px] font-medium rounded-lg hover:font-medium hover:text-primary hover:bg-hover"
        :class="{
          'bg-hover text-primary dark:text-primary-light':
            route.path === child.route,
        }"
      >
        <Icon
          icon="icon-park-outline:dot"
          style="font-size: 14px; transition: font-size 0.3s"
          class="hover:text-xl"
        />

        <!-- <Icon
          icon="icon-park-outline:dot"
          style="font-size: 14px; transition: font-size 0.3s"
          onmouseover="this.style.fontSize='24px'"
          onmouseout="this.style.fontSize='14px'"
        /> -->
        {{ child.label }}
      </RouterLink>
    </CollapsibleContent>
  </Collapsible>
</template>
