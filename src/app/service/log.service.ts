import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../model/log';
import { API_ENDPOINTS } from '../constant/EndPoint';
import { LogCategory } from '../model/logCateg';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private _httpClient: HttpClient) { }


  // view all logs 
  getAllLogs(): Observable<Log[]> {
    return this._httpClient.get<Log[]>(API_ENDPOINTS.LOG.VIEW_ALL);
  }


  // add log 
  addLog(log: Log): Observable<Log> {
    return this._httpClient.post<Log>(API_ENDPOINTS.LOG.ADD_LOGS, log);
  }

  getAllLogCategory(): Observable<LogCategory[]> {
    return this._httpClient.get<LogCategory[]>(API_ENDPOINTS.CATEG.VIEW_ALL);
  }

}
