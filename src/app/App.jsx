import { AppRoutes } from "./router/AppRoutes";
import { Toaster } from "react-hot-toast";
// 1. ELIMINA la importación de ThemeProvider aquí

function App() {
  return (
    <> {/* Usa un fragmento en lugar de ThemeProvider */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "inherit",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: "8px",
          }
        }}
      />
      <AppRoutes />
    </>
  );
}

export default App;