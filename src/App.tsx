import React from "react";
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
  const currentPath = location.pathname;

  React.useEffect(() => {
    // Перевірка чи шлях не починається з /en, /pl, або /ua
    if (!/^\/(en|pl|ua)\//.test(currentPath)) {
      // Якщо ні, редіректимо на /en
      window.location.replace(`/en${currentPath}`);
    } else if (/^\/(en|pl|ua)\/(en|pl|ua)\//.test(currentPath)) {
      // Якщо шлях починається з /en/en, /pl/pl або /ua/ua, видаляємо дубльований префікс
      const cleanedPath = currentPath.replace(/^\/(en|pl|ua)\//, "/$1");
      window.location.replace(cleanedPath);
    }
  }, [currentPath]);

  return null; // Не потрібно нічого відображати
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
