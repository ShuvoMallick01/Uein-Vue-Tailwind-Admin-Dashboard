<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// CUSTOM COMPONENT
import Icon from "@/components/Icon.vue";
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Avatar size="xs" class="border border-white cursor-pointer">
        <AvatarImage src="/images/users/07.jpg" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </PopoverTrigger>

    <PopoverContent class="w-[200px] py-2 px-0 rounded-lg">
      <ul class="text-sm cursor-pointer">
        <li
          class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
        >
          <Icon name="User" :size="18" class="text-muted" /> Profile
        </li>

        <li
          class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
        >
          <Icon name="Settings" :size="18" class="text-muted" /> Account
        </li>

        <li
          class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
        >
          <Icon name="Users" :size="18" class="text-muted" /> Manage Team
        </li>

        <li class="py-1">
          <hr
            class="border-0 border-b border-b-gray-200 dark:border-b-gray-700"
          />
        </li>

        <li
          class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
        >
          <Icon name="LogOut" :size="18" class="text-muted" /> Log Out
        </li>
      </ul>
    </PopoverContent>
  </Popover>
</template>
