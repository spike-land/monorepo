  import { h, Component, render } from './preact.js?n=1070';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1070!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  