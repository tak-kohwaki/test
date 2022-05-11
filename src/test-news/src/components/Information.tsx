import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BoxTag } from "./BoxTag";
import { ReactNode, useEffect, useState } from "react";
import { Constants } from "../constants/constants";

type Props = {
  title: string
  tags: any
  children: any
}
export const Infomation = (props: Props) => {
  const { title, tags, children  } = props

  return (
    <Box sx={{
      px: "16px", py: "20px", mb: "28px",
      border: "1px solid", borderColor: "#e5e5e5", borderRadius: "4px", boxShadow: 1
    }}>
      <Typography variant="body1" color="black" sx={{ fontWeight: 'bold' }}>
        {title}
        {tags?.map((tag: any, index: number) => (
          <BoxTag key={index} fontColor={tag.fontColor} bgColor={tag.bgColor} >{tag.name}</BoxTag>
        ))}
      </Typography>
      <Box component="hr" sx={{mt:"10px", borderTop: "1px solid", borderColor: "#1976d2"}} style={{color: "gray" }} />
      <Box sx={{ px: "10px", pt: "2px", lineHeight: "1.0em" }}>
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </Box>
    </Box>
  );
};

export const InfomationAll = () => {
  const url = Constants.NEWS_JSON_URL;

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data  => setNewsData(data));
  }, [newsData]);

  return (
    <>
      {newsData?.map((news: any, index) => (
        <Infomation key={index} title={news.title} tags={news.tag}>{news.contents}</Infomation>
      ))}
    </>
  );
};