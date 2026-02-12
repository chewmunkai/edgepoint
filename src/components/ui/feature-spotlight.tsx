import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

interface AnimatedFeatureSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  preheaderIcon?: React.ReactNode;
  preheaderText: string;
  heading: React.ReactNode;
  description: string;
  buttonText: string;
  buttonProps?: ButtonProps;
  imageUrl: string;
  imageAlt?: string;
}

const AnimatedFeatureSpotlight = React.forwardRef<HTMLDivElement, AnimatedFeatureSpotlightProps>(
  (
    {
      className,
      preheaderIcon,
      preheaderText,
      heading,
      description,
      buttonText,
      buttonProps,
      imageUrl,
      imageAlt = 'Feature illustration',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('w-full overflow-hidden', className)}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-white/50">
                {preheaderIcon}
                {preheaderText}
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                {heading}
              </h2>

              <p className="font-body text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
                {description}
              </p>

              <div>
                <Button
                  size="lg"
                  {...buttonProps}
                  className={cn(
                    'font-heading text-sm',
                    buttonProps?.className
                  )}
                >
                  {buttonText}
                </Button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-auto rounded-xl shadow-2xl shadow-black/30 animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
AnimatedFeatureSpotlight.displayName = 'AnimatedFeatureSpotlight';

export { AnimatedFeatureSpotlight };
