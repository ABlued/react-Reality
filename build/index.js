/* @jsx createElement */
import { createElement, render, Component } from './react.js';

class YourTitle extends Component {
  render() {
    return createElement("p", null, "\uD074\uB798\uC2A4 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4");
  }

}

function Title() {
  return createElement("div", null, createElement("h2", null, "\uC815\uB9D0 \uB3D9\uC791\uD560\uAE4C?"), createElement(YourTitle, null), createElement("p", null, "\uC798 \uB3D9\uC791\uD558\uB294\uC9C0 \uBCF4\uACE0 \uC2F6\uB2E4."));
}

console.log(Title());
render(createElement(Title, null), document.querySelector('#root'));