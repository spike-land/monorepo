  import { h, Component, render } from './preact.js?n=8878';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 8878!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  