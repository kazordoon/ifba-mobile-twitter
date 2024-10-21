/**
 * 
 * @param {string} date Date in format YYYY-MM-DDTHH:mm (eg: 2024-10-21T08:42)
 */
export default function formatDate(date) {
  const match = /(\d{4})\-(\d{2})\-(\d{2})T(\d{2}):(\d{2})/.exec(date);
  const [, year, month, day, hours, minutes] = match;

  return `${day}/${month}/${year} - ${hours}:${minutes}`;
}