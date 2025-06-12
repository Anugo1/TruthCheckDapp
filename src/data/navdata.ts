import { LayoutPanelLeft, Search } from "lucide-react";

interface navDataType {
  title: string;
  path: string;
}
interface navDataType2 extends navDataType {
  icon: React.ComponentType | string;
}
export const navData: navDataType[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Quick Check",
    path: "quick-check",
  },
  {
    title: "Report",
    path: "report",
  },
  {
    title: "Claim Registry",
    path: "claim-registry",
  },
];
export const navData2: navDataType2[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutPanelLeft,
  },
  {
    title: "Quick Check",
    path: "/quick-check",
    icon: Search,
  },
];
