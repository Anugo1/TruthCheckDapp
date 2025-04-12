import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import {
  ClaimRegistryPage,
  DashboardPage,
  Homepage,
  QuickCheckPage,
  ReportPage,
} from "./pages";
import HomeLayout from "./layout/HomeLayout";
import DashboardLayout from "./layout/DashboardLayout";
import { Suspense } from "react";
import { SearchResult } from "./components/SearchResult";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="/" element={<DashboardLayout />}>
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<p>loading...</p>}>
                <DashboardPage />
              </Suspense>
            }
          />
          <Route
            path="quick-check"
            element={
              <Suspense fallback={<p>loading...</p>}>
                <QuickCheckPage />
              </Suspense>
            }
          />
          <Route
            path="quick-check/results"
            element={
              <Suspense fallback={<p>loading...</p>}>
                <SearchResult />
              </Suspense>
            }
          />
          <Route
            path="report"
            element={
              <Suspense fallback={<p>loading...</p>}>
                <ReportPage />
              </Suspense>
            }
          />
          <Route
            path="claim-registry"
            element={
              <Suspense fallback={<p>loading...</p>}>
                <ClaimRegistryPage />
              </Suspense>
            }
          />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
