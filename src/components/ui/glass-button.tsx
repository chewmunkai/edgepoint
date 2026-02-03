import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
  "glass-button relative isolate cursor-pointer rounded-full transition-all",
  {
    variants: {
      size: {
        default: "text-base font-medium",
        sm: "text-sm font-medium",
        lg: "text-lg font-medium",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const glassButtonTextVariants = cva(
  "glass-button-text relative block select-none tracking-tight",
  {
    variants: {
      size: {
        default: "px-6 py-3.5",
        sm: "px-4 py-2.5",
        lg: "px-8 py-4",
        icon: "flex h-10 w-10 items-center justify-center",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  contentClassName?: string;
  asChild?: boolean;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, size, contentClassName, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(glassButtonVariants({ size }), className)}
        {...props}
      >
        <span className="glass-button-highlight" />
        <span className="glass-button-overlay">
          <span className={cn(glassButtonTextVariants({ size }), contentClassName)}>
            {children}
          </span>
        </span>
        <span className="glass-button-glow" />
      </button>
    );
  }
);
GlassButton.displayName = "GlassButton";

// Link variant for anchor elements
export interface GlassButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof glassButtonVariants> {
  contentClassName?: string;
}

const GlassButtonLink = React.forwardRef<HTMLAnchorElement, GlassButtonLinkProps>(
  ({ className, children, size, contentClassName, href, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(glassButtonVariants({ size }), "inline-block", className)}
        {...props}
      >
        <span className="glass-button-highlight" />
        <span className="glass-button-overlay">
          <span className={cn(glassButtonTextVariants({ size }), contentClassName)}>
            {children}
          </span>
        </span>
        <span className="glass-button-glow" />
      </a>
    );
  }
);
GlassButtonLink.displayName = "GlassButtonLink";

export { GlassButton, GlassButtonLink, glassButtonVariants };
