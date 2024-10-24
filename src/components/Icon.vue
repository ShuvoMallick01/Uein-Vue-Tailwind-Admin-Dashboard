<script setup lang="ts">
import { Icon } from "@iconify/vue";

// =========================
interface IconProps {
  icon: string;
  inline?: boolean;
  width?: string | number;
  height?: string | number;
  horizontalFlip?: boolean;
  verticalFlip?: boolean;
  flip?: string;
  rotate?: string | number;
  color?: string;
}
// =========================

withDefaults(defineProps<IconProps>(), {});
</script>

<template>
  <Icon
    :icon="icon"
    :inline="inline"
    :width="width"
    :height="height"
    :horizontalFlip="horizontalFlip"
    :verticalFlip="verticalFlip"
    :flip="flip"
    :rotate="rotate"
    :color="color"
  />
  <!-- <Icon icon="material-symbols:dashboard-outline" /> -->

  <!-- <Icon icon="material-symbols:dashboard-outline" class="small-icon" />
-->
  <!-- <Icon
    icon="material-symbols:dashboard-outline"
    :style="{ fontSize: '36px' }"
  /> -->
</template>
