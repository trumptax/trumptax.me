// @flow
import { calculate, usdollars } from 'trumptax-calculator';

const container: ?HTMLElement = document.querySelector('.dollars');

function renderAndQueue(): void {
  const value: string = usdollars(calculate());

  if (container) {
    container.innerHTML = value;
  }

  window.requestAnimationFrame(renderAndQueue);
}

export default function main(): void {
  renderAndQueue();
}

main();
