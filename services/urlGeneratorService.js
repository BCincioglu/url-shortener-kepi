import { generateDeterministicNumericCode } from "../utils/shortUrlGen.js";
import Url from "../models/urlList.js";

export const urlGenerator = async (longUrl) => {

    try {
         const cleanUrl = longUrl.trim();

         const existing = await Url.findOne({ longUrl: cleanUrl }).lean();

        if (existing) {
        return { longUrl: existing.longUrl, code: existing.code };
        }

        let code = generateDeterministicNumericCode(cleanUrl);

        while (await Url.exists({ code })) {
            code++;
        }

        await Url.create({ longUrl: cleanUrl, code });

        return { longUrl, code };

    } catch (error) {
        console.error("Error while url generating:", error);
        throw new Error("An error occurred while url generating.");
    }

};