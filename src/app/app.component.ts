import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Add this flag
  imports: [CommonModule, HttpClientModule]
})
export class AppComponent {
  title = 'Student List';
  loading = false; // Loading indicator
  data: any[] = []; // Array to hold fetched data

  constructor(private http: HttpClient) { }

  fetchData() {
    this.http.get('http://localhost:9192/api/admin/1/students').subscribe({
        next: (response: any) => {
            this.data = response.data; // Assign the fetched data to the property
        },
        error: (err) => {
            console.error('Error fetching data:', err);
        }
    });
  }
}
