  import { h, Component, render } from './preact.js?n=9941';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 9941!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  