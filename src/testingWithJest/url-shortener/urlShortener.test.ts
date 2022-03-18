/* eslint-disable @typescript-eslint/no-explicit-any */
import { shorten, translate } from './urlShortener';
describe('URL Shortener', () => {
  it('should return short url', () => {
    const longUrl = 'https://www.codolex.io/kontakti';
    const shortUrl = shorten(longUrl);

    expect(shortUrl.startsWith('https://short.url/')).toBeTruthy();
  });

  it('should translate short url to long url', () => {
    const longUrl = 'https://www.codolex.io/kontakti';
    const shortUrl = shorten(longUrl);

    const translateToLongUrl = translate(shortUrl);

    expect(translateToLongUrl).toEqual(longUrl);
  });

  // it('should be able to handle multiple urls', () => {
  //   const longUrl1 = 'https://www.codolex.io/kontakti';
  //   const shortUrl1 = shorten(longUrl1);

  //   const longUrl2 = 'https://www.codolex.io/ievadnodarības';
  //   const shortUrl2 = shorten(longUrl2);

  //   const translateToLongUrl1 = translate(shortUrl1);
  //   const translateToLongUrl2 = translate(shortUrl2);

  //   expect(translateToLongUrl1).toEqual(longUrl1);
  //   expect(translateToLongUrl2).toEqual(longUrl2);
  // });
});
