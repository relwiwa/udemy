import { Component, OnInit } from '@angular/core';

import { Quote } from '../../data/quote.interface';
import { QuotesPage } from '../quotes/quotes';
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})

export class LibraryPage implements OnInit {
  private quoteCollection: {category: string, quotes: Quote[] , icon: string }[];
  private quotesPage = QuotesPage;

  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
