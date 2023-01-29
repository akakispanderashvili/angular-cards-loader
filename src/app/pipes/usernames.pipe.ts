import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usernames',
})
export class UsernamesPipe implements PipeTransform {
  transform(users: any[]): string {
    return users.map((user) => user.firstName + ' ' + user.lastName).join(', ');
  }
}
