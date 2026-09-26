import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Campamento from "./pages/Campamento";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Campamento} />
      <Route path={"/campamento"} component={Campamento} />
      <Route path={"/playa"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  return <div className="page-transition" key={location}>{children}</div>;
}

function SiteSwitcher() {
  const [location] = useLocation();
  const isCamp = location === "/" || location === "/campamento";
  return (
    <nav className="site-switcher" aria-label="Cambiar ambiente">
      <a className={!isCamp ? "site-switcher__link site-switcher__link--active" : "site-switcher__link"} href="/playa">Playa</a>
      <span className="site-switcher__divider" />
      <a className={isCamp ? "site-switcher__link site-switcher__link--active" : "site-switcher__link"} href="/">Campamento</a>
    </nav>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <SiteSwitcher />
          <PageTransition><Router /></PageTransition>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
