import { ThemeProvider } from "@shopify/restyle";
import { View } from "react-native";
import { theme } from "./src/theme";
import { Box } from "./src/components/Box/Box";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box backgroundColor="background" flex={1} />
    </ThemeProvider>
  );
}
