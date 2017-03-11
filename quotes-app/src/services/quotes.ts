import { Injectable } from '@angular/core';

import { Quote } from '../data/quote.interface';

@Injectable()
export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromoFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
      return quoteElement.id === quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

}