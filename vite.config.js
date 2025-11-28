import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const isVercel = process.env.VERCEL;
  return {
    plugins: [react(), tailwindcss()],
    base: isVercel ? "/" : "/mental-health/",
  };
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// // https://vite.dev/config/
// export default defineConfig({
//   // base: "/mental-health/",
//   plugins: [react(), tailwindcss()],
// });
