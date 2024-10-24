<script setup lang="ts">
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
// SHADCN COMPONENTS
import Button from "../button/Button.vue";
import Input from "../input/Input.vue";
// CUSTOM COMPONENTS
import Icon from "@/components/Icon.vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  variant: { type: String },
  color: { type: String },
  shape: { type: String },
  size: { type: String },

  title: String,
  shadow: String,
});

// Button Classes
const classNames = cva(["leading-normal transition-300 "], {
  variants: {
    variant: {
      outline: "border",
      filled: "bg-black",
    },
    shape: {
      rounded: "rounded-lg",
      pill: "rounded-full",
    },

    size: {
      medium: "p-[6px]",
    },
  },

  compoundVariants: [
    {
      variant: "outline",
      color: "gray",
      class: "border-gray300",
    },
    {
      variant: "filled",
      color: "gray",
      class: "bg-active",
    },
  ],

  defaultVariants: {
    variant: "outline",
    color: "gray",
    shape: "rounded",
    size: "medium",
  },
});
</script>

<!-- === TEMPLATE ===  -->
<template>
  <div>
    <div
      class="flex border p-1.5 rounded-md bg-white items-center justify-center transition-all hover:bg-white dark:bg-card dark:border-active"
    >
      <Button
        class="bg-gray-300 text-gray-700 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600"
        size="xs"
      >
        <Icon name="Minus" :size="18" :stroke-width="2" />
      </Button>
      <Input
        type="number"
        placeholder="0"
        class="w-10 px-1 py-1 text-center border-0 focus:ring-0 bg-transparent dark:bg-transparent"
      />
      <Button
        class="bg-gray-300 text-gray-700 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600"
        size="xs"
      >
        <Icon name="Plus" :size="18" :stroke-width="2" />
      </Button>
    </div>
  </div>
</template>
