import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'stenciljs-button',
  styleUrl: 'stenciljs-button.scss',
  shadow: true,
})
export class StenciljsButton {

  @Prop() appearance: 'primary' | 'secondary' | 'danger' | 'warning' = 'primary';

  render() {
    return (
      <button class={this.appearance}>
        <slot></slot>
      </button>
    );
  }

}
