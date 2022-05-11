import { Typography} from "@mui/material";
import { Box } from "@mui/system";

export const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", bgcolor: "main", mt: "30px" }}
      style={{ bottom: "0", width: "100%" }}>
      <Typography variant="body1" color="gray">
        copyright &copy; TAK co.,Ltd. All Rights Reserved.
      </Typography>
    </Box>
  );
};
