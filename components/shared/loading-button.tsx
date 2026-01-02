"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LoadingButtonProps {
  loading?: boolean;
  text: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  [otherOptions: string]: unknown;
}

export function LoadingButton({
  loading,
  text,
  type = "submit",
  disabled,
  icon,
  onClick,
  className,
  ...other
}: LoadingButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      className={cn(
        "cursor-pointer bg-primary hover:bg-primary/90 shadow-md transition-all duration-300 ",
        className,
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      )}
      disabled={disabled || loading}
      {...other}
    >
      <div className="flex items-center justify-center gap-2">
        {loading ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <>
            {icon}
            {text}
          </>
        )}
      </div>
    </Button>
  );
}
