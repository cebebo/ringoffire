import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks!' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Floor', description: 'Every player must touch the ground with the hand. The last player touching the ground drinks.' },
    { title: 'Thumbmaster', description: 'Only one time, during the game, you can put your thumb on the table. Everybody repeats. The last player drinks.' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Rhyme', description: 'Say a word. The left player has to find a rhyme. The next player continues the rhyme unitl somebody fails. This player drinks.' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Cup', description: 'Fill the cup (30%) in the middle with alcohol of your choice. The last person drawing the jack has to drink the cup.' },
    { title: 'Quizmaster', description: 'Every player has to answer your question with >> F*** you <<, until next Quizmaster is drawed. Failing players must drink!' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule, until the next rule is setted.' },
  ];

  title = '';
  description = '';

  @Input() card: string | undefined;

  constructor() { }

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card?.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
