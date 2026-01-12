"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef, useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
  error?: boolean;
  errorText?: string;
  containerClassName?: string;
  inputContainerClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  searchable?: boolean;
  placeholder?: string;
  placement?: "top" | "bottom";
  disabled?: boolean;
}

const selectVariants = cva(
  "flex h-14 w-full rounded-[12px] border-none focus-visible:outline-none focus-visible:ring-0 outline-none bg-transparent px-3 py-1 colors placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:bg-gray-800 dark:disabled:text-gray-400",
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
  },
);

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      label,
      error,
      errorText,
      containerClassName,
      inputContainerClassName,
      leftIcon,
      rightIcon,
      searchable = false,
      placeholder = "Select...",
      placement = "bottom",
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const containerRef = useRef<HTMLDivElement>(null);

    const filteredOptions = useMemo(() => {
      if (!searchable || !searchTerm) return options;
      return options.filter((o) =>
        o.label.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }, [options, searchTerm, searchable]);

    const handleSelect = (option: SelectOption) => {
      setOpen(false);
      if (props.onChange) {
        props.onChange({ ...props, target: { value: option.value } } as any);
      }
    };

    // Click outside listener
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const dropdownPosition =
      placement === "top"
        ? "bottom-[70%] mb-2 origin-bottom"
        : "top-full mt-2 origin-top";

    const dropdownAnimation =
      placement === "top"
        ? {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 10 },
          }
        : {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
          };

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (ref) {
            if (typeof ref === "function") ref(node);
            else ref.current = node;
          }
        }}
        className={cn("relative w-full space-y-1 text-sm", containerClassName)}
      >
        {label && (
          <p className="ml-3 block text-xs font-bold dark:text-gray-200">
            {label}{" "}
            <span className="text-red-500">{props.required && "*"}</span>
          </p>
        )}

        <button
          className={cn(
            "focus-within:ring-ring relative flex w-full cursor-pointer items-center rounded-3xl border border-gray-200 bg-(--muted)/30 px-1 py-2 focus-within:ring dark:border-gray-700",
            disabled ? "cursor-not-allowed opacity-50" : "",
            inputContainerClassName,
          )}
          onClick={() => setOpen(!open)}
          type="button"
          disabled={disabled}
        >
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              {leftIcon}
            </div>
          )}

          <div
            className={cn(
              selectVariants({ isError: error }),
              "flex flex-1 items-center",
              leftIcon ? "pl-12" : "pl-4",
              rightIcon ? "pr-12" : "pr-3",
              "dark:text-gray-200",
              className,
            )}
          >
            {props.value ? (
              <span className="max-w-[90%] truncate">
                {options.find((o) => o.value === props.value)?.label}
              </span>
            ) : (
              <span className="truncate text-gray-400 dark:text-gray-400">
                {placeholder}
              </span>
            )}
          </div>

          {rightIcon ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {rightIcon}
            </div>
          ) : (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-4 w-4" />
            </div>
          )}
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.ul
              {...dropdownAnimation}
              transition={{ duration: 0.15 }}
              className={cn(
                "scrollbar-hide absolute z-50 w-fit rounded-2xl bg-white shadow-xl shadow-gray-100 dark:border dark:bg-black dark:shadow-black",
                dropdownPosition,
              )}
            >
              {searchable && (
                <li className="p-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:border-primary w-full rounded-md bg-gray-50 px-2 py-2 focus:ring focus:outline-none dark:bg-black dark:text-gray-200"
                  />
                </li>
              )}

              <div className="custom-scrollbar max-h-36 overflow-scroll">
                {filteredOptions.map((option, idx) => (
                  <li
                    key={`${option.value}-${idx}`}
                    className={`rounded-2xl px-3 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 ${option.disabled ? "cursor-none opacity-40" : "cursor-pointer"}`}
                    onClick={() => !option.disabled && handleSelect(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </div>

              {filteredOptions.length === 0 && (
                <li className="px-3 py-2 text-gray-400 dark:text-gray-500">
                  No options
                </li>
              )}
            </motion.ul>
          )}
        </AnimatePresence>

        {errorText && (
          <p className="text-pink mt-1 text-xs font-bold dark:text-pink-400">
            {errorText}
          </p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
