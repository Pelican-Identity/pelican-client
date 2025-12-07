import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

export interface NavigationLinkProps {
  href: string;
  label: string;
  content?: React.ReactNode;
}

const NavigationLink = ({ href, label, content }: NavigationLinkProps) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex cursor-pointer items-center gap-1">
        <Link href={href} className="text-sm font-medium">
          <div>{label}</div>
        </Link>
        {content && (
          <div
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <ChevronDown className="size-4" />
          </div>
        )}
      </div>
      {content && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`fixed top-16 right-0 left-0 z-10 w-screen border-y border-y-gray-50 bg-white backdrop-blur-lg transition-all duration-500 ease-out lg:top-20 ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-[1440px] p-12 py-3">{content}</div>
        </div>
      )}
    </div>
  );
};

export default NavigationLink;
