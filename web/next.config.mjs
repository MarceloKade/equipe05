/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // Se você quiser aplicar as regras de CORS a todas as rotas do Next.js
          source: "/:path*", // Isso captura todas as rotas, incluindo páginas e outros assets
          headers: [
            { key: "Access-Control-Allow-Origin", value: "https://automatic-invention-rvpxqg4567gh4x5-3000.app.github.dev" }, // Ajuste conforme necessário
            { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
          ],
        },
      ];
    },
  };

export default nextConfig;
