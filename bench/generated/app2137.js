  import { h, Component, render } from './preact.js?n=2137';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 2137!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  