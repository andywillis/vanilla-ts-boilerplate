import classnames from 'classnames';

import style from './style.module.css';

export default function Heading({ size, color, text }) {

  const cls = classnames(style[color]);

  return `<h${size} class="${cls}">${text}</h${size}>`;

}
