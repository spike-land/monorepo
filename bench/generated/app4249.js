  import { h, Component, render } from './preact.js?n=4249';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4249!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  