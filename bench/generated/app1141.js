  import { h, Component, render } from './preact.js?n=1141';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 1141!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  