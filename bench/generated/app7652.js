  import { h, Component, render } from './preact.js?n=7652';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 7652!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  