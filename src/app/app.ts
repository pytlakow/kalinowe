import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import * as Papa from 'papaparse';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kalinowe');
    private csvUrl = 'https://docs.google.com/spreadsheets/d/11ot1jxES1s59yCGmfKjsM1EeGuzYY7DP6QgK0tqjshU/export?format=csv&id=11ot1jxES1s59yCGmfKjsM1EeGuzYY7DP6QgK0tqjshU&gid=0';
  columnsTable = Array.from({ length: 10 }, (_, idx) => idx + 1);
  rowsRangeTable = Array.from({ length: 8 }, (_, idx) => idx + 4);

  columnsFixtures = Array.from({ length: 3 }, (_, idx) => idx + 12);
  rowsRangeFixtures = Array.from({ length: 42 }, (_, idx) => idx + 3);

  columnsStrikers = Array.from({ length: 4 }, (_, idx) => idx + 16);
  rowsRangeStrikers = Array.from({ length: 63 }, (_, idx) => idx + 4);

  constructor(private http: HttpClient) {}

  public rows = signal<any[]>([]);

  ngOnInit() {
    this.getSheetData().subscribe(rows => {
      console.log('CSV Data:', rows);
      console.log('CSV Data:', rows[2]._1);
        this.rows.set(rows);
    });
  }
   getSheetData(): Observable<any[]> {
    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map(csv => Papa.parse(csv, { header: true }).data as any[])
    );
  }
}
