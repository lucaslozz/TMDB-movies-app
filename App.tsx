import { ThemeProvider } from "@shopify/restyle";

import { Box } from "@components";
import { theme } from "@theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box backgroundColor="background" flex={1} />
    </ThemeProvider>
  );
}
