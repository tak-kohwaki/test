import { AppBar, Stack, Toolbar} from "@mui/material";
import { Box } from "@mui/system";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar >
        <Box textAlign="left" sx={{ alignItems: "left", width: "100%" }}>
          <Box component="img" src="image/logo.png" alt="タック電子カルテ" sx={{ width: "288px", height: "34px" }} style={{ display: "block" }} />
        </Box>
        <Stack
          direction="row"
          spacing={2}
        >
          {/* <NextLink href="#support" passHref>
            <MuiLink rel="noopener noreferrer" variant="body2" color="inherit" noWrap style={{ textDecoration: "none" }}>お問い合わせ</MuiLink>
          </NextLink> */}
          <NextLink href="https://www.taknet.co.jp/" passHref>
            <MuiLink target="_blank" rel="noopener noreferrer" variant="body2" color="inherit" noWrap style={{ textDecoration: "none" }}>タック株式会社</MuiLink>
          </NextLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
