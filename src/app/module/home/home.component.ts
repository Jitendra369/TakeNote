import { Component, OnInit, signal } from '@angular/core';
import { NoteService } from '../../service/note.service';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allUsersNotes = signal<User[]>([]);
  loggedInUserNotes = signal<User | null>(null);
  isSidebarOpen = signal(true);

  constructor(private _noteService: NoteService) {

  }


  ngOnInit(): void {
    this.getLoggedInUserNotes('4ec84d44-4ae3-4a66-87a7-fccbae35f824');
  }

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
    console.log('Sidebar toggle signal updated:', this.isSidebarOpen());
  }

  // get all user all notes 
  getAllUserNotes() {
    this._noteService.getAllUserNotes().subscribe({
      next: (data) => {
        console.log('Success fetching all notes:', data);
        this.allUsersNotes.set(data);
      },
      error: (error) => {
        console.log("Error fetching all notes:", error);
      }
    })
  }
  // get single user notes 
  getLoggedInUserNotes(id: string) {
    this._noteService.getUserById(id).subscribe({
      next: (data) => {
        console.log('Login user data received:', data);
        this.loggedInUserNotes.set(data);
      },
      error: (error) => {
        console.log('Error fetching user data:', error);
      }
    })
  }

}
