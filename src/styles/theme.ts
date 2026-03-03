export const theme = {
  colors: {
    // Colores principales 
    primary: '#17adc9',        
    primaryDark: '#1396af',   
    accent: '#c9d662',        
    
    // Backgrounds
    background: '#1d1d41',     
    backgroundCard: '#2a2a52',
    backgroundCardHover: '#34346a',
    
    // Textos
    text: {
      primary: '#ffffff',     
      secondary: '#c9d662',    
      label: '#c9d662',       
      title: '#17adc9',        
    },
    
    // Status (semántico)
    status: {
      alive: '#2e8842',     
      dead: '#d63447',        
      unknown: '#888899',     
      error: '#d63447',       
    },
    
    // Bordes y sombras
    border: '#17adc9',        
    borderSecondary: '#2a2a52',
    shadow: 'rgba(23, 173, 201, 0.3)',
  },
  
  // Espaciado consistente
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  
  // Radios de borde
  borderRadius: {
    sm: '8px',
    md: '12px',
    full: '50%',
  },
};

export type Theme = typeof theme;
