  import { h, Component, render } from './preact.js?n=8712';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 8712!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  