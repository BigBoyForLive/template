import { Box } from "../Navbar/Box.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
  </Box>
);
