// services/urlRedirectService.js
import Url from "../models/urlList.js";
/**
 * Kısa kodu alır, longUrl’i döndürür
 * @param {string} code - Örn: "01234"
 * @returns {Promise<object|null>} Kayıt varsa döndürür, yoksa null
 */
export const urlRedirectService = async (code) => {
  try {
    // veritabanında ara
    const doc = await Url.findOne({ code }, { longUrl: 1 }).lean();

    // kayıt yoksa null döndür
    if (!doc) return null;

    // sadece longUrl döndür (controller yönlendirmeyi yapacak)
    return doc;
  } catch (error) {
    console.error("Error in urlRedirectService:", error);
    throw new Error("URL yönlendirme hatası");
  }
};
