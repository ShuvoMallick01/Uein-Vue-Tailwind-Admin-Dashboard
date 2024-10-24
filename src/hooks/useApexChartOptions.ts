import { onMounted, ref, reactive, watch } from "vue";
import { useDark } from "@vueuse/core";
import merge from "lodash/merge";
import type { ApexOptions } from "apexcharts";
import { themeColors } from "@/data/chartColors";

// DEFAULT & COMMON APEX CHART OPTIONS
const baseOptions = {
  theme: { mode: "light" },
  dataLabels: { enabled: false },
  grid: {
    show: false,
    strokeDashArray: 3,
    borderColor: themeColors.light.gridBorder,
  },
  chart: {
    foreColor: themeColors.light.chartFore,
    toolbar: { show: false },
    background: "rgba(0, 0, 0, 0)",
    fontFamily: "Montserrat, sans-serif",
  },
  states: {
    active: { filter: { type: "none" } },
    hover: { filter: { type: "none" } },
  },
  xaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  markers: { strokeWidth: 5 },
};

export const useApexChartOptions = (options: ApexOptions = {}) => {
  const isDark = useDark();
  const chartOptions = ref(merge({}, baseOptions, options));

  const updateColors = (theme: string) => {
    if (theme === "dark") {
      chartOptions.value.theme.mode = "dark";
      chartOptions.value.chart.foreColor = themeColors.dark.chartFore;
      chartOptions.value.grid.borderColor = themeColors.dark.gridBorder;
    } else if (theme === "light") {
      chartOptions.value.theme.mode = "light";
      chartOptions.value.chart.foreColor = themeColors.light.chartFore;
      chartOptions.value.grid.borderColor = themeColors.light.gridBorder;
    }
  };

  onMounted(() => {
    updateColors(isDark.value ? "dark" : "light");
  });

  watch(isDark, (newValue) => {
    if (newValue) {
      chartOptions.value = {
        ...chartOptions.value,
        theme: { mode: "dark" },
        chart: {
          ...chartOptions.value.chart,
          foreColor: themeColors.dark.chartFore,
        },
        grid: {
          ...chartOptions.value.grid,
          borderColor: themeColors.dark.gridBorder,
        },
      };
    } else {
      chartOptions.value = merge({}, baseOptions, options);
    }
  });

  return chartOptions;
};
