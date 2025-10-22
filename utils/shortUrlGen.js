// utils/codeGen.js
import crypto from 'crypto';

/**
 * Deterministik 5 haneli numerik kısa kod üretir.
 * Aynı URL → aynı kod.
 * @param {string} longUrl - Kısaltılacak URL
 * @returns {string} 5 haneli sayı (ör. "48291")
 */
export const generateDeterministicNumericCode = (longUrl) => {
  // SHA-256 hash hesapla
  const hash = crypto.createHash('sha256').update(longUrl).digest('hex');

  // Hash'i büyük sayıya çevir ve 100000 ile mod al → 5 haneli
  const num = Number(BigInt('0x' + hash) % 100000n);

  // 5 haneli string döndür (başında 0 varsa tamamla)
  return num.toString().padStart(5, '0');
};
