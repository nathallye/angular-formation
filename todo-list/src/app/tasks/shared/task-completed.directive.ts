import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskCompleted]'
})

export class TaskCompletedDirective implements OnInit {

  @Input() taskCompleted: boolean; // receber a informação se a tarefa está concluída ou não, através do elemento HTML

  constructor(private el: ElementRef) { } // ElementRef - referência do elemento HTML

  ngOnInit(): void {
    if (this.taskCompleted) { // se taskCompleted for true...
      this.el.nativeElement.style.textDecoration = "line-through"; // aplica a marcação
    }
  }
}
