<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  defaultValue?: string | number;
  modelValue?: string | number;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <textarea
    v-model="modelValue"
    :class="
      cn(
        'flex min-h-20 font-medium w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-0  focus:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0  placeholder:text-small placeholder:text-sm placeholder:text-muted  disabled:cursor-not-allowed disabled:opacity-50   dark:border-gray-600 dark:focus:border-primary dark:placeholder:text-muted dark:bg-card',
        props.class
      )
    "
  />
</template>
