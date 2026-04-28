// Static list of selected talks, workshops, and lectures.
// Entries are ordered newest-first by `date` (YYYY-MM-DD).

export const events = [
  {
    date: "2025-03",
    titleEn: "Strong female voices — how to make yourself heard",
    titleDe: "Strong female voices — how to make yourself heard",
    kindEn: "Panel",
    kindDe: "Panel",
    venue: "WeTech × EY",
    language: "en",
  },
  {
    date: "2024-10",
    titleEn: "Introduction to web3 frontend development",
    titleDe: "Einführung in die web3-Frontend-Entwicklung",
    kindEn: "Talk",
    kindDe: "Talk",
    venue: "FrankenJS",
    language: "en",
  },
  {
    date: "2024-09",
    titleEn: "Automation in DevOps: tools and approaches",
    titleDe: "Automatisierung in DevOps: Tools und Ansätze",
    kindEn: "Lecture",
    kindDe: "Vorlesung",
    venue: "HTW Berlin",
    language: "de",
  },
  {
    date: "2024-09",
    titleEn: "Introduction to modern web development",
    titleDe: "Einführung in moderne Webentwicklung",
    kindEn: "Workshop",
    kindDe: "Workshop",
    venue: "ditact, Universität Salzburg",
    language: "de",
  },
  {
    date: "2023-08",
    titleEn: "Building interactive web apps with React",
    titleDe: "Interaktive Web-Apps mit React bauen",
    kindEn: "Workshop",
    kindDe: "Workshop",
    venue: "Informatica Feminale, Bremen",
    language: "en",
  },
];

export const formatEventDate = (iso) => {
  const [year, month] = iso.split("-");
  return month ? `${year} · ${month}` : year;
};
