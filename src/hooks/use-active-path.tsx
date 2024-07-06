import { usePathname } from "next/navigation";

export const useActivePath = () => {
  const pathname = usePathname();

  const checkActivePath = (path: string, style: string) => {
    return path === pathname ? style : "";
  };

  return checkActivePath;
};
