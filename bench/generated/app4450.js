  import { h, Component, render } from './preact.js?n=4450';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4450!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  