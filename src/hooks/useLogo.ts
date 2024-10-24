import { useDark } from "@vueuse/core";
import { onMounted, ref, watch } from "vue";

export function useLogo() {
  const isDark = useDark();
  const logo = ref("/logos/uein-dark-version.svg");

  watch(isDark, (newValue) => {
    if (isDark.value) logo.value = "/logos/uein-light-version.svg";
    else logo.value = "/logos/uein-dark-version.svg";
  });

  onMounted(() => {
    if (isDark.value) logo.value = "/logos/uein-light-version.svg";
    else logo.value = "/logos/uein-dark-version.svg";
  });

  return logo;
}
