export const Button = {
   baseStyle: {
      borderRadius: "base",
      width: "max-content"
   },
   sizes: {
      md: {
         fontSize: "md",
         height: 9,
         px: 3,
         lineHeight: 1
      },
      lg: {
         fontSize: "lg",
         height: 10,
         px: 3,
         lineHeight: 1
      }
   },
   variants: {
      primary: {
         minWidth: 24,
         bg: "primary.700",
         color: "gray.900",
         _hover: {
            bg: "primary.600",
            _disabled: {
               bg: "primary.600"
            }
         }
      },
      secondary: {
         minWidth: 24,
         bg: "gray.50",
         shadow: "base",
         color: "gray.900",
         _hover: {
            bg: "gray.100",
            _disabled: {
               bg: "gray.100"
            }
         }
      },
      white: {
         minWidth: 24,
         bg: "white",
         border: "1px solid",
         borderColor: "gray.200",
         color: "gray.900",
         _hover: {
            bg: "gray.light",
            _disabled: {
               bg: "gray.light"
            }
         }
      },
      dark: {
         minWidth: 24,
         bg: "gray.900",
         border: "1px solid",
         color: "white",
         _hover: {
            bg: "gray.800",
            _disabled: {
               bg: "gray.800"
            }
         }
      },
      action: {
         minWidth: 24,
         bg: "red.500",
         color: "white",
         _hover: {
            bg: "red.600",
            _disabled: {
               bg: "red.600"
            }
         }
      },
      text: {
         height: 9,
         p: 0,
         color: "gray.900",
         _hover: {
            color: "gray.800",
            _disabled: {
               color: "gray.800"
            }
         }
      }
   },
   defaultProps: {
      size: "md",
      variant: "primary"
   }
};
