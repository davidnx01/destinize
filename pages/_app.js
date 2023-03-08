import '@myapp/styles/globals.css'
import "@fontsource/plus-jakarta-sans"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    900: "#4475F2",
    500: "#789DFC",
    100: "#D9E3FC"
  },
  secondary: {
    900: "#4737FF",
    500: "#BCB6FD",
    100: "#E1DFF6"
  },
  third: {
    900: "4F7DF3",
    500: "A6BBF2",
    100: "CFD9F5"
  },
  fonts: {
    body: "Plus Jakarta Sans"
  }
}

const theme = extendTheme()

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
