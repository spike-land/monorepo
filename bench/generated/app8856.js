  import { h, Component, render } from './preact.js?n=8856';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 8856!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  