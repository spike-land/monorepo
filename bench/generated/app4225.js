  import { h, Component, render } from './preact.js?n=4225';

  export class App extends Component {
    render() {
      return h('h1', null, 'Hello, world 4225!');
    }
  }

  const el = document.createElement('div');
  render(h(App), el);
  