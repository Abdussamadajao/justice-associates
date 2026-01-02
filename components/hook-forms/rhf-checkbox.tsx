"use client";
import { Info } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
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
import type { ReactNode } from "react";

// ----------------------------------------------------------------------
// Standalone CheckboxField Component (without react-hook-form)
// ----------------------------------------------------------------------
interface ICheckboxFieldProps {
  id?: string;
  label?: string | ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  error?: string;
  description?: string;
  infoIcon?: boolean;
  infoText?: string;
  variant?: "default" | "inline";
  className?: string;
}

export function CheckboxField({
  id,
  label,
  checked,
  onCheckedChange,
  error,
  variant = "default",
  className,
}: ICheckboxFieldProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex items-center gap-2",
        variant === "default"
          ? " border p-4 cursor-pointer"
          : "space-x-1 space-y-0",
        className
      )}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="w-5 h-5"
      />

      <span className={cn("block text-sm text-gray-700 font-medium")}>
        {label}
      </span>

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </label>
  );
}

// ----------------------------------------------------------------------
// React Hook Form CheckboxField Component
// ----------------------------------------------------------------------
interface IRHFCheckboxProps {
  name: string;
  label?: string | ReactNode;
  description?: string;
  infoIcon?: boolean;
  infoText?: string;
  variant?: "default" | "inline";
  className?: string;
  [otherOptions: string]: unknown;
}

export default function RHFCheckbox({
  name,
  label,
  description,
  infoIcon,
  infoText,
  variant = "default",
  className,
  ...other
}: IRHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(
            "flex items-center",
            variant === "default" ? " border p-4 cursor-pointer" : "",
            className
          )}
        >
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              className={cn(
                variant === "inline" ? "" : "",
                "cursor-pointer size-5"
              )}
            />
          </FormControl>
          <div className=" ">
            <div className="flex items-center gap-1">
              <FormLabel
                onClick={(e) => {
                  e.preventDefault();
                  field.onChange(!field.value);
                }}
                className={cn(
                  "cursor-pointer ",
                  variant === "inline" ? "text-sm font-normal " : ""
                )}
              >
                {label}
              </FormLabel>
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
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </div>
        </FormItem>
      )}
      {...other}
    />
  );
}
