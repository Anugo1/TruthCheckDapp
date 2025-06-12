import { lazy } from "react";

export { default as Homepage } from "./Homepage";
export const DashboardPage = lazy(() => import("./Dashboard"));
export const QuickCheckPage = lazy(() => import("./QuickCheck"));
export const ReportPage = lazy(() => import("./Report"));
export const ClaimRegistryPage = lazy(() => import("./ClaimRegistry"));
