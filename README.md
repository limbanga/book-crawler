# Web Crawler JavaScript

## Project Objectives

* Understand and practice basic Web Crawling techniques using JavaScript/Node.js.
* Collect book data (title, price, cover image) from the demo site [books.toscrape.com](http://books.toscrape.com).
* Use popular libraries: `axios` for HTTP requests, `cheerio` for HTML parsing, and `json2csv` for data conversion.
* Crawl multiple pages sequentially and handle simple pagination.
* Save the collected data in JSON and CSV formats for later analysis or processing.
* Improve skills in asynchronous programming (async/await) and error handling during crawling.

---

## Overview Guide

### 1. Initialize the project and install libraries

* Create a new Node.js project and install the necessary libraries: `axios`, `cheerio`, `json2csv`.

### 2. Build the crawling functionality

* Send HTTP requests to book pages.
* Parse HTML to extract book data (title, price, image).
* Handle pagination by looping through multiple pages with URLs like `page-1.html`, `page-2.html`, etc.

### 3. Save data

* Aggregate data collected from multiple pages.
* Save data to JSON files for easy reading and further processing.
* Convert data to CSV format for use with Excel or spreadsheet software.

### 4. Run and verify

* Run the script to start crawling.
* Check results in the JSON and CSV output files.

---

## Technical Explanation

* **HTTP request**: Use `axios` library to fetch HTML content from the website.
* **HTML parsing**: Use `cheerio` to manipulate the DOM like jQuery and easily extract necessary data.
* **Image URL conversion**: Ensure image URLs are absolute so they can be used later.
* **Pagination handling**: Loop through pages by page number, stop when no more data is found.
* **Saving JSON and CSV files**:

  * JSON: easy to read, stores raw data structure.
  * CSV: suitable for analysis and reporting with Excel, Google Sheets.

---

## Notes and Advanced Suggestions

* To avoid sending too many requests at once and overloading the server, add delays between crawl requests.
* To crawl detailed info for each book, you can access each book’s detail page and extract more data.
* You can optimize crawl speed by sending multiple requests in parallel, but be careful to avoid errors or getting blocked.
* Implement thorough error handling so the program doesn’t stop unexpectedly when encountering errors or network issues.
