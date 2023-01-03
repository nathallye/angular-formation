import { TaskCompletedDirective } from './task-completed.directive';

describe('TaskCompletedDirective', () => {
  it('should create an instance', () => {
    const directive = new TaskCompletedDirective(el: ElementRef);
    expect(directive).toBeTruthy();
  });
});
