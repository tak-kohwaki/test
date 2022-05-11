import { Box } from "@mui/system";

export const Top = () => {
  return (
    <Box sx={{py: "8px"}}>
      <Box sx={{
        height: "280px", backgroundImage:"url(image/top.png)",
        backgroundSize: "cover", backgroundPosition: "center center"
      }} />
    </Box>
  );
};