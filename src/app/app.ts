import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { Quote } from './quote';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  title = 'Quote Of The Day';
  quote: Quote = { content: '', author: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote(): void {
    this.http
      .get<Quote[]>('https://api.realinspire.live/v1/quotes/random')
      .subscribe((result) => {
        console.log('Full API response:', result);
        // Access the first element of the array
        this.quote = result[0];
      });
  }

  addToFavorites(): void {
    // console.log('Quote added to favorites!', this.quote);
    alert('Quote added to favorites!');
  }
}
