import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note.service';
import { User } from '../../model/user';
import { JsonPipe, NgFor, NgIf, NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor, JsonPipe, NgIf, NgClass, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allUsersNotes: User[] = [];
  loggedInUserNotes!: User;
  isSidebarOpen: boolean = true;

  constructor(private _noteService: NoteService) {

  }


  ngOnInit(): void {
    this.getLoggedInUserNotes('4ec84d44-4ae3-4a66-87a7-fccbae35f824');
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // get all user all notes 
  getAllUserNotes() {
    this._noteService.getAllUserNotes().subscribe({
      next: (data) => {
        // debugger
        console.log('sucess call ' + data);
        this.allUsersNotes = data;
      },
      error: (error) => {
        console.log("error while fetching the note API ,error " + error);
      }
    })
  }
  // get single user notes 
  getLoggedInUserNotes(id: string) {
    this._noteService.getUserById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.loggedInUserNotes = data;

      },
      error: (error) => {
        console.log(error);

      }
    })
  }



}
