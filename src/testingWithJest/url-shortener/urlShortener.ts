/* eslint-disable @typescript-eslint/no-unused-vars */

interface UrlEntry {
  longUrl: string;
  shortUrl: string;
}
const entries: UrlEntry[] = [];

export const shorten = (url: string): string => {
  let counter = 0;
  const shortUrl = 'https://short.url/' + counter++;
  entries.push({ longUrl: url, shortUrl: shortUrl });

  return shortUrl;
};

export const translate = (shortUrl: string): string | undefined => {
  const entry = entries.find((e) => e.shortUrl === shortUrl);

  if (!entry) {
    return;
  }

  return entry.longUrl;
};
