import { Component } from '@angular/core';


interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}


interface Counter {
  (start: number): () => string; // o  (start: number):{(): string};
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  const counter = function(start: number) {
     return () =>  {
       return `Hola desde deep ${start} `;
     };
   } as Counter;                                // <-- esta manera esta fumada
  counter.interval = 123;
  counter.reset = function() { };
  return counter;
}

const deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker(this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};

const fun = function(this: void) {
  return 21;
};

interface StringArray {
  [index: number]: string;
}

type Alias = { num: number };
interface Interface {
  num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testTypescript';

  constructor() {

  }

  identity<T>(arg: T): T {
    return arg;
  }


}
