import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobilenumber'
})
export class MobilenumberPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {



    let mobilenumber = value.toString()
    
let formatterNumber;
switch (args[0]) {
case 'IND' : return mobilenumber.length == 0 ? '' : `+91-${mobilenumber.substring(0,4)}-${mobilenumber.substring(4,10)}`;
case 'GBR' : return mobilenumber.length == 0 ? '' : `+44-${mobilenumber.substring(0,3)}-${mobilenumber.substring(3,10)}`;
default : return mobilenumber;
}

    
  }

}
