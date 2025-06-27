import React from "react";
<<<<<<< HEAD
import { ListItem, Typography, Box } from "@mui/material";

const StatsPage = () => {
  const stored = JSON.parse(localStorage.getItem("shortUrls")) || [];

  return (
    <Box p={4}>
      <Typography variant="h4">URL Statistics</Typography>
      {stored.map((item, i) => (
        <Box key={i} my={3}>
          <Typography variant="h6">/{item.shortcode}</Typography>
          <Typography>Original URL: {item.originalUrl}</Typography>
          <Typography>Clicks: {item.clicks.length}</Typography>
          <Typography>Created: {item.createdAt}</Typography>
          <Typography>Expiry: {item.validity} minutes</Typography>
          <Typography mt={1}>Click Details:</Typography>
          {item.clicks.map((click, j) => (
            <ListItem key={j}>
              - {click.time}, From: {click.referrer}, Location: {click.location}
            </ListItem>
          ))}
        </Box>
      ))}
    </Box>
=======

const StatsPage = () => {
  const data = JSON.parse(localStorage.getItem("shortenedUrls") || "{}");

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Shortened URL Statistics</h2>
      <ul>
        {Object.entries(data).map(([shortcode, info]) => (
          <li key={shortcode}>
            <strong>{shortcode}</strong> → {info.originalUrl}<br />
            Created At: {new Date(info.createdAt).toLocaleString()}<br />
            Expires At: {new Date(info.expiry).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
>>>>>>> 3094463 ( Initial Commit)
  );
};

export default StatsPage;
