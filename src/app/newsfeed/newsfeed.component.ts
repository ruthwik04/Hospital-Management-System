import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  constructor() { }
  
  fullText = "Welcome to Amrita Hospitals!";
  displayedText = "";
  typingSpeed = 200; // Milliseconds per character
  delayBetweenLoops = 1000; // Delay before restarting the loop (in milliseconds)

  ngOnInit(): void {
    this.typewriterEffect();
  }

  typewriterEffect(): void {
    let index = 0;
    const interval = setInterval(() => {
      if (index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(index);
        index++;
      } else {
        clearInterval(interval); // Stop typing
        setTimeout(() => {
          this.resetEffect(); // Reset and restart after a delay
        }, this.delayBetweenLoops);
      }
    }, this.typingSpeed);
  }

  resetEffect(): void {
    this.displayedText = ""; // Clear the displayed text
    this.typewriterEffect(); // Restart the effect
  }
}


