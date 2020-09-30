const parse = require('csv-parse/lib/sync');
const stringify = require('csv-stringify/lib/sync');
const fs = require('fs');
const puppeteer = require('puppeteer');

const csv = fs.readFileSync('csv/data.csv');
const records = parse(csv.toString('utf-8'));

const crawler = async () => {
  const browser = await puppeteer.launch({ headless: false }); // TODO: headless 옵션 의미 알려주기
  const page = await browser.newPage();
  await page.goto(records[0][1]);
  console.log(await page.content());
  await page.close();
  await browser.close();
};
crawler();

