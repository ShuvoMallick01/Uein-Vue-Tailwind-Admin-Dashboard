import { type VariantProps, cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        outline: "border border-border bg-transparent",
        link: "text-primary underline-offset-4 hover:underline",
        // destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-5 rounded-md",
        xs: "h-7 px-2 rounded",
        sm: "h-9 px-3 rounded-md",
        lg: "h-12 px-8 rounded-md",
        icon: "h-10 w-10",
      },
      color: {
        default: "bg-primary text-white hover:bg-primary/90",
        error: "bg-error text-white hover:bg-error/90",
        success: "bg-success text-white hover:bg-success/90",
        warning: "bg-warning text-white hover:bg-warning/90",
        info: "bg-info text-white hover:bg-info/90",
      },
    },

    compoundVariants: [
      // Outline Buttons
      {
        variant: "outline",
        color: "default",
        class:
          "text-primary bg-transparent border-primary outline-none hover:bg-primary/10",
      },
      {
        variant: "outline",
        color: "info",
        class:
          "text-info bg-transparent border-info outline-none hover:bg-info/10",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "text-success bg-transparent border-success outline-none hover:bg-success/10",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "text-warning bg-transparent border-warning outline-none hover:bg-warning/10",
      },
      {
        variant: "outline",
        color: "error",
        class:
          "text-error bg-transparent border-error outline-none hover:bg-error/10",
      },

      // Translucent Buttons
      // {
      //   variant: "translucent",
      //   color: "primary",
      //   class:
      //     "text-primary bg-primary/15 border-transparent hover:text-primary-darker hover:bg-primary/40 dark:text-primary"
      // },
      // {
      //   variant: "translucent",
      //   color: "secondary",
      //   class:
      //     "text-slate-400 bg-secondary border-transparent hover:text-black hover:bg-text-400/20  dark:text-gray-500 dark:hover:bg-white dark:hover:text-gray-500"
      // },
      // {
      //   variant: "translucent",
      //   color: "info",
      //   class:
      //     "text-info bg-info/15 border-transparent hover:text-info-darker hover:bg-info/40 dark:hover:text-info"
      // },
      // {
      //   variant: "translucent",
      //   color: "success",
      //   class:
      //     "text-success bg-success/15 border-transparent hover:text-success-darker hover:bg-success/40 dark:hover:text-success"
      // },
      // {
      //   variant: "translucent",
      //   color: "warning",
      //   class:
      //     "text-warning bg-warning/15 border-transparent hover:text-warning-darker hover:bg-warning/40 dark:hover:text-warning"
      // },
      // {
      //   variant: "translucent",
      //   color: "error",
      //   class:
      //     "text-error bg-error/15 border-transparent hover:text-error-darker hover:bg-error/40 dark:hover:text-error"
      // },

      // Links
      {
        variant: "link",
        color: "default",
        class: "text-primary bg-transparent h-auto px-0 hover:bg-transparent",
      },
      {
        variant: "link",
        color: "error",
        class: "text-error bg-transparent h-auto px-0 hover:bg-transparent",
      },
      {
        variant: "link",
        color: "success",
        class: "text-success bg-transparent h-auto px-0 hover:bg-transparent",
      },
      {
        variant: "link",
        color: "info",
        class: "text-info bg-transparent h-auto px-0 hover:bg-transparent",
      },
      {
        variant: "link",
        color: "warning",
        class: "text-warning bg-transparent h-auto hover:bg-transparent",
      },
    ],

    defaultVariants: { variant: "default", size: "default", color: "default" },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;