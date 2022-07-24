import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/books.model';

export const books: Book[] = [
  {
    id: '1',
    name: 'Book1',
    price: 10,
    quantity: 1,
    category: 'Acao',
    img: 'img1',
  },
  {
    id: '2',
    name: 'Book2',
    price: 10,
    quantity: 1,
    category: 'Acao',
    img: 'img2',
  },
  {
    id: '3',
    name: 'Book3',
    price: 10,
    quantity: 1,
    category: 'Acao',
    img: 'img3',
  },
  {
    id: '4',
    name: 'Quatro Estaçoes',
    price: 100,
    quantity: 1,
    category: 'Acao',
    img: 'king4estacoes',
  },
  {
    id: '5',
    name: 'Naruto',
    price: 50,
    quantity: 1,
    category: 'Acao',
    img: 'naruto',
  },
];

@Injectable()
export class BooksService {
  private url = 'https://localhost:44382/api/bookstore'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getBooks() {
    return books;
  }
}
