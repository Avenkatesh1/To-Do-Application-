import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Itask } from 'src/app/module/task';


@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TODOAppComponent implements OnInit {
 todoForm !: FormGroup;
 Tasks: Itask[] = [];
 InProgress: Itask[] = [];
 Done: Itask[] = [];
 updateIndex!:any;
 isEditEnabled:boolean = false;
 constructor(private fb:FormBuilder){}
 ngOnInit(): void {
   this.todoForm = this.fb.group({
      itam:  ['',Validators.required]
   })
 }
 addTask(){
  this.Tasks.push({
    description:this.todoForm.value.itam,
    done:false
  })
  this.todoForm.reset();
 }
 updateTask(){
  this.Tasks[this.updateIndex].description = this.todoForm.value.itam;
  this.Tasks[this.updateIndex].done = false;
  this.todoForm.reset();
  this.updateIndex = undefined;
  this.isEditEnabled = false;
 }
 onEdit(itam:Itask, i : number){
   this.todoForm.controls['itam'].setValue(itam.description);
   this.updateIndex = i;
   this.isEditEnabled = true; 

 }
 deleteTask(i: number){
   this.Tasks.splice(i,1)
 }
 deleteProgressTask(i: number){
  this.InProgress.splice(i,1)
}
deleteDoneTask(i: number){
  this.Done.splice(i,1)
}


 drop(event: CdkDragDrop<Itask[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
 }
}