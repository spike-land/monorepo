  import { h, Component, render } from './preact.js?n=952';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 952!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  