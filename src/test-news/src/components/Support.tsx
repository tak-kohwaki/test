import { Typography} from "@mui/material";
import { Box } from "@mui/system";

export const Support = () => {
  return (
    <Box id="support" sx={{ background:"#f1f1f1", boxShadow:1 }}>
      <Box sx={{ p: "4px", mt: "50px", background: "#1976d2" }}>
        <Typography variant="body1" color="white" sx={{px: "8px"}}>お問い合わせ先</Typography>
      </Box>
      <Box sx={{p: "10px", lineHeight: "2em"}}>
        <Typography component="span" variant="body1" sx={{fontWeight: 'bold', background:"linear-gradient(transparent 60%, #ffcc80 60%)"}}>◆サポートセンター窓口</Typography>
        <Typography variant="body1" sx={{ textIndent: '0.5em' }}>受付時間：
          <Box component="span" sx={{ fontWeight: 'bold' }}>平日 9:00～17:00</Box>
        </Typography>
        <Typography variant="body1"sx={{ textIndent: '0.5em' }}>電話番号：
          <Box component="span" sx={{ fontWeight: 'bold' }}>0584-75-6524</Box>
        </Typography>
        <Typography variant="body1"sx={{ textIndent: '0.5em' }}>FAX：0584-75-1025
        </Typography>
        <Typography variant="body1"sx={{ textIndent: '0.5em' }}>E-mail：
          <Box component="span" sx={{ fontWeight: 'bold' }}>tak-karte_support@taknet.co.jp</Box>
        </Typography>
        <br />
        <Typography component="span" variant="body1" sx={{fontWeight: 'bold',background:"linear-gradient(transparent 60%, #ffcc80 60%)"}}>◆夜間/休日の緊急窓口</Typography>
        <Typography variant="body1"sx={{ textIndent: '0.5em' }}>受付時間：
          <Box component="span" sx={{ fontWeight: 'bold' }}>平日時間外・土日祝日</Box>
        </Typography>
        <Typography variant="body1" sx={{ textIndent: '0.5em' }}> 電話番号：
          <Box component="span" sx={{ fontWeight: 'bold' }}>0584-81-8737</Box>
        </Typography>
        <Typography variant="body1"sx={{ textIndent: '0.5em' }}>※お問い合わせ受付後、担当者より、折り返しご連絡いたします。
        </Typography>
      </Box>
    </Box>
  );
};