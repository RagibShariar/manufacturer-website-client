module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
  themes: [
    {
      light: {
        "primary": "#E30040",    
        "secondary": "#000000",
        "accent": "#37CDBE",
        "neutral": "#3D4451",
        "base-100": "#FFFFFF",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    },
  ],
},
  plugins: [require("daisyui")],
}