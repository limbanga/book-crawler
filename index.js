const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { Parser } = require('json2csv');

const BASE_URL = 'http://books.toscrape.com/';

async function crawlBooks() {
  try {
    const { data } = await axios.get(BASE_URL);
    const $ = cheerio.load(data);

    const books = [];

    $('.product_pod').each((index, element) => {
      const title = $(element).find('h3 a').attr('title');
      const price = $(element).find('.price_color').text();
      let imgUrl = $(element).find('img').attr('src');

      // Chuyển URL ảnh thành đường dẫn đầy đủ
      imgUrl = new URL(imgUrl, BASE_URL).href;

      books.push({ title, price, imgUrl });
    });

    // Lưu ra file JSON
    fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
    console.log('Saved data to books.json');

    // Lưu ra file CSV
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(books);
    fs.writeFileSync('books.csv', csv);
    console.log('Saved data to books.csv');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

crawlBooks();
