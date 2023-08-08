import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';
import { selectOption } from '../../common/models';

@Component({
  tag: 'ir-select',
})
export class IrSelect {
  @Prop() data: selectOption[];
  @Prop() label = '<label>';
  @Prop({ mutable: true, reflect: true }) selectedValue = '';
  @Prop() required: boolean;
  @Prop() LabelAvailable: boolean = true;
  @Prop() firstOption: string = 'Select';
  @Prop() selectStyle: boolean = true;

  @State() initial: boolean = true;
  @Event() selectChange: EventEmitter;
  connectedCallback() {}
  disconnectedCallback() {}
  handleSelectChange(event) {
    if (this.required) {
      this.initial = false;
      this.selectedValue = event.target.value;
      this.selectChange.emit(this.selectedValue);
    } else {
      this.selectedValue = event.target.value;
      this.selectChange.emit(this.selectedValue);
    }
  }

  render() {
    let className = 'form-control';
    if (this.selectedValue === '' && !this.initial && this.required) {
      className = 'form-control border-danger';
    }
    let firstOp = <option value="">{this.firstOption}</option>;
    if (this.firstOption !== '') {
      firstOp = (
        <option value="" selected>
          {this.firstOption}
        </option>
      );
    }

    if (this.selectStyle === false) {
      className = '';
    }

    return (
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text">
              {this.label}
              {this.required ? '*' : ''}
            </label>
          </div>
          <select class={className} onInput={this.handleSelectChange.bind(this)} required={this.required}>
            {firstOp}
            {this.data.map(item => {
              return (
                <option selected={this.selectedValue === item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}
