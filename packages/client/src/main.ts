import Heading from './components/Heading';

const main = document.querySelector('main');

main.innerHTML = `
  <main>
    ${Heading({ size: 1, color: 'blue', text: 'This is a heading' })}
  </main>
`;

export {};
