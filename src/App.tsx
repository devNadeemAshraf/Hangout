import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

// Components
import Navigation from "@/components/shared/Navigation";

// Pages
import Home from "@/pages/Home";
import Authenticate from "@/pages/Authenticate";
import Activate from "@/pages/Activate";
import Rooms from "@/pages/Rooms";

// Route Wrappers
import GuestRoute from "@/components/route-wrappers/GuestRoute";
import ProtectedRoute from "@/components/route-wrappers/ProtectedRoute";
import SemiProtectedRoute from "@/components/route-wrappers/SemiProtectedRoute";

import Loading from "./pages/Loading";

// Hooks
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";

function App() {
  const { appLoading } = useLoadingWithRefresh();

  return appLoading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/activate"
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
