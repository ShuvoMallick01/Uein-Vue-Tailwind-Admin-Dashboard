<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <th
    :class="
      cn(
        'pb-3 px-4 font-medium xl:px-5 text-left align-middle [&:has([role=checkbox])]:pr-0 [&:last-child]:text-center',
        props.class
      )
    ">
    <slot />
  </th>
</template>
