  import { h, Component, render } from './preact.js?n=7943';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 7943!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  