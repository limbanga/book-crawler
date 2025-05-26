const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { Parser } = require('json2csv');

const BASE_URL = 'http://books.toscrape.com/catalogue/category/books_1/';

async function crawlPage(pageNumber) {
  try {
    const url = `${BASE_URL}page-${pageNumber}.html`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const books = [];

    $('.product_pod').each((index, element) => {
      const title = $(element).find('h3 a').attr('title');
      const price = $(element).find('.price_color').text();
      let imgUrl = $(element).find('img').attr('src');

      imgUrl = new URL(imgUrl, url).href;

      books.push({ title, price, imgUrl });
    });

    return books;
  } catch (error) {
    console.error(`Error crawling page ${pageNumber}:`, error.message);
    return [];
  }
}

async function crawlAllPages(startPage, endPage) {
  let allBooks = [];

  for (let page = startPage; page <= endPage; page++) {
    console.log(`Crawling page ${page}...`);
    const books = await crawlPage(page);

    if (books.length === 0) {
      console.log('No more books found, stopping crawl.');
      break;
    }

    allBooks = allBooks.concat(books);
  }

  // Lưu file JSON
  fs.writeFileSync('books.json', JSON.stringify(allBooks, null, 2));
  console.log(`Saved ${allBooks.length} books to books.json`);

  // Lưu file CSV
  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(allBooks);
  fs.writeFileSync('books.csv', csv);
  console.log(`Saved ${allBooks.length} books to books.csv`);
}

crawlAllPages(1, 5);
