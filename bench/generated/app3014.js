  import { h, Component, render } from './preact.js?n=3014';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3014!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  