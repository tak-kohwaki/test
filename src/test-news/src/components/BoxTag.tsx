import { Typography} from "@mui/material";
import { VFC, ReactNode } from "react";

type Props = {
  fontColor?: string
  bgColor?: string
  children: ReactNode
}

const defFontColor = "#FFFFFF";
const defBgColor = "#1976d2";

export const BoxTag: VFC<Props> = (props) => {
  const { fontColor = defFontColor, bgColor = defBgColor, children } = props;
  return (
    <Typography component="span" variant="body2" color={fontColor}
      sx={{ ml: "10px", px: "6px", py: "4px", background: bgColor }}>
      {children}
    </Typography>
  );
};