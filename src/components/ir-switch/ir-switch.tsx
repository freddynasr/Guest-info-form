import { Component,EventEmitter,Prop,Event, h } from '@stencil/core';

@Component({
  tag: 'ir-switch'
})
export class IrSwitch {  
  @Prop() checked=false;
  @Prop() value = false;
  @Event() switchHanlder: EventEmitter<boolean>;

  connectedCallback() {
   
  }

  componentDidRender(){   
    document.querySelectorAll('input[type=checkbox][data-toggle="toggle"]').forEach(function(ele:any) {        
        ele.bootstrapSwitch();               
    });
  }

  disconnectedCallback() {}
  render() {    
    return(     
        <input type="checkbox" data-toggle="toggle" ></input>
    )
  }
}
