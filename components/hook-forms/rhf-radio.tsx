"use client";
import { Info } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

// ----------------------------------------------------------------------
// Standalone RadioField Component (without react-hook-form)
// ----------------------------------------------------------------------
interface IRadioFieldProps {
  label?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  error?: string;
  description?: string;
  options: RadioOption[];
  infoIcon?: boolean;
  infoText?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function RadioField({
  label,
  value,
  onValueChange,
  error,
  description,
  options,
  infoIcon,
  infoText,
  orientation = "vertical",
  className,
}: IRadioFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="flex items-center gap-1">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
          {infoIcon && infoText && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{infoText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      )}
      <RadioGroup
        value={value}
        onValueChange={onValueChange}
        className={cn(
          orientation === "horizontal"
            ? "flex flex-row gap-4"
            : "flex flex-col gap-3",
          error && "border-destructive"
        )}
      >
        {options.map((option) => (
          <label
            key={option.value}
            htmlFor={`radio-${option.value}`}
            className="flex items-start space-x-2 border p-4 cursor-pointer hover:bg-accent/50 transition-colors"
          >
            <RadioGroupItem value={option.value} id={`radio-${option.value}`} />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-normal">{option.label}</span>
              {option.description && (
                <p className="text-xs text-muted-foreground">
                  {option.description}
                </p>
              )}
            </div>
          </label>
        ))}
      </RadioGroup>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}

// ----------------------------------------------------------------------
// React Hook Form RadioField Component
// ----------------------------------------------------------------------
interface IRHFRadioProps {
  name: string;
  label?: string;
  description?: string;
  options: RadioOption[];
  infoIcon?: boolean;
  infoText?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
  [otherOptions: string]: unknown;
}

export default function RHFRadio({
  name,
  label,
  description,
  options,
  infoIcon,
  infoText,
  orientation = "vertical",
  className,
  ...other
}: IRHFRadioProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <div className="flex items-center gap-1">
            <FormLabel>{label}</FormLabel>
            {infoIcon && infoText && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{infoText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <FormControl>
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className={cn(
                orientation === "horizontal"
                  ? "flex flex-row gap-4"
                  : "flex flex-col gap-3"
              )}
            >
              {options.map((option) => (
                <div key={option.value} className="flex items-start space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`${name}-${option.value}`}
                  />
                  <div className="flex flex-col gap-1">
                    <Label
                      htmlFor={`${name}-${option.value}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {option.label}
                    </Label>
                    {option.description && (
                      <p className="text-xs text-muted-foreground">
                        {option.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      {...other}
    />
  );
}
