  import { h, Component, render } from './preact.js?n=875';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 875!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  