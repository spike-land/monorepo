  import { h, Component, render } from './preact.js?n=3345';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 3345!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  