import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username',
})
export class UsernamePipe implements PipeTransform {
  transform(email: string): string {
    return email?.split('@')[0];
  }
}
