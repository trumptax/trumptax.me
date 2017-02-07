// @flow

// An array of individual costs payed for by U.S. tax payers:
const baselineCosts: Array<number> = [
  // mar a logo vacation
  // http://www.politico.com/story/2017/02/trump-mar-lago-taxpayers-234562
  3000000,
  // Eric Trump's Uruguay trip
  // http://thehill.com/homenews/administration/317863-eric-trump-uruguay-trip-cost-taxpayers-98k-report
  98000,
  // Total costs for security before Inauguration
  // http://nymag.com/daily/intelligencer/2017/01/nyc-trump-bill-usd37-4-million-from-election-to-inauguration.html
  37400000
];

// All individual costs added to a single value:
const baseline: number = baselineCosts.reduce((accumulator, value, index) => {
  return accumulator + value;
}, 0);
console.log('baseline', baseline);

// Cost for security in NYC
// http://money.cnn.com/2016/11/21/news/protecting-donald-trump/
const nycCostPerYear: number = 1000000.00 * 365;
console.log('nycCostPerYear', nycCostPerYear);

const msPerYear: number = 31536000000;
console.log('msPerYear', msPerYear);

const nycCostPerMs: number = nycCostPerYear / msPerYear;
console.log('nycCostPerMs', nycCostPerMs);

const trumpStartDate: Date = new Date('Jan 20 2017 09:00:00 EST');
console.log('trumpStartDate', trumpStartDate);

const trumpStartMs: number = trumpStartDate.getTime();
console.log('trumpStartMs', trumpStartMs);

const valueAtBoot: number = calculate();
console.log('valueAtBoot', valueAtBoot);

const formattedValueAtBoot = format(valueAtBoot);
console.info('formattedValueAtBoot', formattedValueAtBoot);

const container: ?HTMLElement = document.querySelector('.dollars');

function calculate(): number {
  const elapsedTime: number = Date.now() - trumpStartMs;
  return (elapsedTime * nycCostPerMs) + baseline;
}

function format(value: number): string {
  const formatted: string = value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatted;
}

function renderAndQueue(): void {
  const value: string = format(calculate());

  if (container) {
    container.innerHTML = value;
  }

  window.requestAnimationFrame(renderAndQueue);
}

export default function main(): void {
  renderAndQueue();
}

main();
