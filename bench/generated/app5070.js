  import { h, Component, render } from './preact.js?n=5070';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 5070!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  