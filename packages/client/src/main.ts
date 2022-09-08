import Heading from './components/Heading';

const main = document.querySelector('main');

// const response = await fetch('/json');
// const { message } = await response.json();

const message = 'Vanilla TS Boilerplate';

main.innerHTML = `
  <main>
    ${Heading({ size: 1, color: 'blue', text: message })}
  </main>
`;

export {};
