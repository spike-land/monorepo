  import { h, Component, render } from './preact.js?n=3248';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3248!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  