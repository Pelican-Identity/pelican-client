import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  containerClassName?: string;
  inputContainerClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorText?: string;
  label?: string;
}

const inputVariants = cva(
  "flex h-14 w-full rounded-[12px] border-none focus-visible:outline-none focus-visible:ring-0 ring-none outline-none bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-gray-400 disabled:cursor-not-allowed  ",
  {
    variants: {
      isError: {
        true: "border-red-500 focus-visible:ring-red-500 border",
        false: "focus:border-primary",
      },
    },
    defaultVariants: {
      isError: false,
    },
  }
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputContainerClassName,
      containerClassName,
      type = "text",
      error,
      errorText,
      leftIcon,
      rightIcon,
      label,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative w-full space-y-1", containerClassName)}>
        {label && (
          <label htmlFor={props.name} className="text-xs font-bold block ml-3">
            {label}{" "}
            <span className="text-red-500">{props.required && "*"}</span>
          </label>
        )}

        <div
          className={cn(
            "bg-(--muted)/30 border border-input rounded-3xl py-2 flex items-center",
            props.disabled ? "cursor-not-allowed opacity-50" : "",
            inputContainerClassName
          )}
        >
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              {leftIcon}
            </div>
          )}

          <input
            type={type}
            className={cn(
              inputVariants({ isError: error }),
              " text-sm h-12 placeholder:text-gray-400 ",
              leftIcon ? "pl-12" : "pl-4",
              rightIcon ? "pr-12" : "pr-3",
              className
            )}
            ref={ref}
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              {rightIcon}
            </div>
          )}
        </div>

        {errorText && (
          <p className="text-pink font-bold text-xs mt-1">{errorText}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
