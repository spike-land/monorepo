  import { h, Component, render } from './preact.js?n=4157';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4157!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  