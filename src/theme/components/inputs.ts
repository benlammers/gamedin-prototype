export const Input = {
   sizes: {
      md: {
         field: {
            fontSize: "md",
            borderRadius: "base",
            h: 9
         }
      },
      lg: {
         field: {
            fontSize: "lg",
            borderRadius: "base",
            h: 10
         }
      }
   },
   variants: {
      outline: {
         field: {
            borderColor: "gray.200"
         }
      }
   }
};

export const NumberInput = {
   sizes: {
      md: {
         field: {
            fontSize: "md",
            borderRadius: "base",
            h: 9
         },
         stepper: {
            _first: {
               borderTopEndRadius: "sm"
            },
            _last: {
               borderBottomEndRadius: "sm"
            }
         }
      }
   },
   variants: {
      outline: {
         field: {
            borderColor: "gray.200"
         }
      }
   }
};
