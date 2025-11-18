/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project/**/*.{html,js,ts}"],
  theme: {
    extend: { colors: {
    'primary': '#FFD700',
    'hover-primary': '#FFC400',

    // Colores de Fondo y Superficies (Usado en tarjetas y fondos claros)
        'surface-light': '#F9FAFB',      // Fondo de las tarjetas (bg-gray-100)
        'surface-default': '#FFFFFF',    // Fondo principal del body (bg-white)

        // Colores de Texto (Para asegurar consistencia)
        'text-default': '#1F2937',       // Gris oscuro para texto principal (similar a gray-800/900)
        'text-secondary': '#6B7280',     // Gris más claro para texto de párrafo

        // Colores de Acento
        'stars': '#FFC400',       // Amarillo de las estrellas (igual que el hover, o puedes usar otro tono)
      },

      // Definición de Fuente (Si estás usando una fuente específica, por ejemplo, Inter)
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
  }},
  },
  plugins: [],

 
}

