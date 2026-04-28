import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

// Grab the URL and output filename from the terminal commands
const TARGET_URL = process.argv[2];
const OUTPUT_FILE = process.argv[3] || './src/marble-data.json';

if (!TARGET_URL) {
  console.error('❌ Please provide a URL to scrape!');
  console.log('Usage: node scrape-marbles.js <URL> <OUTPUT_FILE>');
  process.exit(1);
}

// Dynamically extract the base domain (e.g., https://vinayakmarmointernational.com)
const baseUrl = new URL(TARGET_URL).origin;

async function scrapeImages() {
  console.log(`Scraping images from ${TARGET_URL}...`);

  try {
    const { data } = await axios.get(TARGET_URL);
    const $ = cheerio.load(data);
    const marbleImages = [];

    $('img').each((index, element) => {
      let src = $(element).attr('src') || $(element).attr('data-src');
      let alt = $(element).attr('alt') || 'Natural Stone Slab';

      // Included .jpeg to cover more image formats
      if (src && (src.includes('.jpg') || src.includes('.jpeg') || src.includes('.png') || src.includes('.webp'))) {
        
        // Now it intelligently prepends the correct website domain for relative URLs
        if (src.startsWith('/')) {
          src = `${baseUrl}${src}`;
        }

        marbleImages.push({
          id: `stone-${index}`,
          title: alt,
          src: src
        });
      }
    });

    const uniqueImages = [...new Map(marbleImages.map(item => [item.src, item])).values()];

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(uniqueImages, null, 2));
    
    console.log(`✅ Successfully scraped ${uniqueImages.length} images!`);
    console.log(`Data saved to ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('❌ Error scraping the page:', error.message);
  }
}

scrapeImages();