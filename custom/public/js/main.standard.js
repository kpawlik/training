import myw from 'myWorld-client';
import 'main.standard';                       

const buttons = myw.applicationDefinition.layout.controls.toolbar.options.buttons;
const printIndex = buttons.indexOf('print.dialog');
buttons.splice(printIndex);
delete myw.applicationDefinition.plugins['print'];