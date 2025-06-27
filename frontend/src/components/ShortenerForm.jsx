<<<<<<< HEAD
import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import URLList from "./URLList";
import { logEvent } from "../utils/logger";

const ShortenerForm = () => {
  const [urls, setUrls] = useState([{ long: "", validity: 30, shortcode: "" }]);
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleChange = (i, field, value) => {
    const updated = [...urls];
    updated[i][field] = value;
    setUrls(updated);
  };

  const handleShorten = () => {
    const stored = JSON.parse(localStorage.getItem("shortUrls")) || [];
    const newData = urls.map((url) => {
      const code = url.shortcode || uuidv4().slice(0, 6);
      return {
        originalUrl: url.long,
        validity: parseInt(url.validity) || 30,
        shortcode: code,
        createdAt: new Date().toISOString(),
        clicks: []
      };
    });

    localStorage.setItem("shortUrls", JSON.stringify([...stored, ...newData]));
    setShortenedUrls([...stored, ...newData]);
    logEvent("Shortened URLs generated.");
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>React URL Shortener</Typography>
      {urls.map((url, i) => (
        <Box key={i} mb={2}>
          <TextField
            fullWidth
            label="Original URL"
            value={url.long}
            onChange={(e) => handleChange(i, "long", e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Validity (min)"
            type="number"
            value={url.validity}
            onChange={(e) => handleChange(i, "validity", e.target.value)}
            sx={{ mr: 1 }}
          />
          <TextField
            label="Preferred Shortcode"
            value={url.shortcode}
            onChange={(e) => handleChange(i, "shortcode", e.target.value)}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        onClick={handleShorten}
        disabled={urls.length === 0}
      >
        Shorten URLs
      </Button>
      <URLList data={shortenedUrls} />
    </Box>
=======

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Log } from "../utils/logger";

const ShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [validity, setValidity] = useState(""); // in minutes
  const [shortcode, setShortcode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValidUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const handleShorten = () => {
    setError("");

    if (!originalUrl || !isValidUrl(originalUrl)) {
      setError("Please enter a valid URL (must start with http:// or https://)");
      Log("Invalid URL input", "WARN", "ShortenerForm", originalUrl);
      return;
    }

    if (!shortcode.trim()) {
      setError("Shortcode is required");
      Log("Empty shortcode", "WARN", "ShortenerForm", "Shortcode field was empty");
      return;
    }

    const storage = JSON.parse(localStorage.getItem("shortenedUrls") || "{}");

    if (storage[shortcode]) {
      setError("Shortcode already exists. Please choose another.");
      Log("Duplicate shortcode", "WARN", "ShortenerForm", `Shortcode "${shortcode}" already exists`);
      return;
    }

    const createdAt = Date.now();
    const expiresIn = validity ? parseInt(validity) * 60 * 1000 : 30 * 60 * 1000;
    const expiry = createdAt + expiresIn;

    const newEntry = {
      originalUrl,
      createdAt,
      expiry,
      shortcode,
      clicks: [],
    };

    storage[shortcode] = newEntry;
    localStorage.setItem("shortenedUrls", JSON.stringify(storage));

    Log("URL shortened", "INFO", "ShortenerForm", `Shortened ${originalUrl} to /${shortcode}`);

    alert(`Shortened URL created: ${window.location.origin}/${shortcode}`);
    setOriginalUrl("");
    setShortcode("");
    setValidity("");
    navigate("/stats");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          🔗 URL Shortener
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Enter a long URL"
              fullWidth
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Enter custom shortcode"
              fullWidth
              value={shortcode}
              onChange={(e) => setShortcode(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Validity (in minutes)"
              fullWidth
              type="number"
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
              placeholder="Default is 30 minutes"
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleShorten}
              fullWidth
            >
              Shorten URL
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
>>>>>>> 3094463 ( Initial Commit)
  );
};

export default ShortenerForm;
