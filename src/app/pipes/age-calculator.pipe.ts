import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalculator',
})
export class AgeCalculatorPipe implements PipeTransform {
  transform(value: any): number {
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
