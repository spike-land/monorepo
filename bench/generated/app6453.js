  import { h, Component, render } from './preact.js?n=6453';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 6453!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  