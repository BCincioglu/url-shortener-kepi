export const getHealthStatus = () => {
  const uptimeSec = Math.round(process.uptime());
  const hours = String(Math.floor(uptimeSec / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((uptimeSec % 3600) / 60)).padStart(2, '0');
  const seconds = String(uptimeSec % 60).padStart(2, '0');
  const uptimeFormatted = `${hours}:${minutes}:${seconds}`;

  console.log('alealeale');

  const now = new Date();
  const local = new Date(now.getTime() + 3 * 60 * 60 * 1000); //GMT +3
const checkedAtFormatted = local.toISOString().replace('T', ' ').split('.')[0];

  return {
    status: 'ok',
    uptime: uptimeFormatted,        // ex. "00:05:42"
    checkedAt: checkedAtFormatted   // ex. "2025-10-20 12:37:10"
  };
};
