import { urlGenerator } from "../services/urlGeneratorService.js";

export const shortenUrlController = async (req, res) => {
  const { longUrl } = req.body;

  try {
    const result = await urlGenerator(longUrl);
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    console.log(result);
    res.status(201).json({ shortUrl: `${baseUrl}/${result.code}` });
  } catch (error) {
    console.error("Error in shortenUrlController:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};