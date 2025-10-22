import { urlRedirectService} from "../services/urlRedirectService.js";

export const redirectUrlController = async (req, res) => {
  const { code } = req.params;

  try {
    const doc = await urlRedirectService(code);

    if (!doc) {
      res.status(404).json({ error: "URL not found." });
      return;
    }

    // yönlendirme
    res.redirect(302, doc.longUrl);
  } catch (error) {
    console.error("Error in redirectUrlController:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
