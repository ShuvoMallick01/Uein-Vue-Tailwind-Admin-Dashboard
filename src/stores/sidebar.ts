import { ref, onMounted, onUnmounted } from "vue";
import { useWindowSize } from "@vueuse/core";
import { defineStore } from "pinia";

export const useSidebar = defineStore("sidebar", () => {
  const isSidebarOpen = ref(false);
  const { width } = useWindowSize();

  const handleToggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const handleCloseSidebar = () => {
    isSidebarOpen.value = false;
  };

  const handleResize = () => {
    if (width.value > 1023) isSidebarOpen.value = false;
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.addEventListener("resize", handleResize);
  });

  return { isSidebarOpen, handleToggleSidebar, handleCloseSidebar };
});
