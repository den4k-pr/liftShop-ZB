import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./utils/i18n";

import { Home } from "./pages/Home";
import { Policy } from "./pages/Policy";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";

// Тип для параметрів мови
type LanguageParams = {
  lng: string;
};

// Компонент для зміни мови за параметром
const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const { lng } = useParams<LanguageParams>();

  React.useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return <>{children}</>;
};

// Хук для додавання мови на початок шляху
const RedirectToLanguage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      // Redirect to the default language, e.g., English
      window.location.replace('/en/');
    }
  }, [location.pathname]);

  return null; // The component doesn't render anything
};

const App: React.FC = () => {
  return (
    <Router>
      <RedirectToLanguage /> {/* Додаємо редірект для автоматичного додавання мови */}
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route
          path="/:lng/*"
          element={
            <LanguageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<Policy />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<Product />} />
              </Routes>
            </LanguageWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
