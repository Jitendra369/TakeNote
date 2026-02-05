import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../constant/EndPoint';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _http: HttpClient) {
  }

  getAllUserNotes(): Observable<User[]> {
    console.log("API calling " + API_ENDPOINTS.USER.GET_ALL);

    return this._http.get<User[]>(API_ENDPOINTS.USER.GET_ALL)
  }

  getUserById(userId: string): Observable<User> {
    return this._http.get<User>(API_ENDPOINTS.USER.GET_BY_ID(userId))
  }

  addNote(userId: string, note: Note): Observable<Note> {
    return this._http.post<Note>(API_ENDPOINTS.USER.ADD_NOTE(userId), note)
  }
}
