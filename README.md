 # Memory Game 
  ## Screenshot/Logo
  [Game Screenshot](https://github.com/Aisha499/memory-game/blob/main/Screenshot%202025-08-20%20202316.png)

  ### How to play
 ##### First, the user chooses a card, then he chooses the second card. If the first card matches the second card, the cards remain open. If they do not match, the two cards are turned over and the user repeats until he gets three similar cards. Then he wins or loses if he loses twice in identifying the similar cards.
 ## Background Info
 I chose this game because it's fun and helps strengthen memory, in addition to being a simple idea that can be implemented using HTML, CSS, and JavaScript.
 

[You can start here.](https://aisha499.github.io/memory-game/index.html)

 ###### ueser Story
 As a user, I want to see the landing page when I arrive at the site so I know where to go.
As a user, I want to see a "Start" button on the landing page to start the game.
As a user, I want to be able to click on a card to select it in the game.
As a user, I want to receive visual feedback after the selection to ensure my selection is recorded.
As a user, I want to see the game result.
As a user, I want to see my selection.
As a user, I want to play another round for another try.

###### pseudocode
// Define a game variable for the number of losing attempts
// Define a game variable for the number of winning attempts
// Define a variable for user choice 1
// Define a variable for user choice 2
// Define a constant for cards
// Define a constant to display the number of winning and losing attempts
// Add a function to compare the first and second user choices
// Flip the cards over if they are equal

// Create a function that, if the winning attempts are greater than 3, moves to the winning page, and if the losing attempts are greater than or equal to 2, moves to the losing page
// Add an event listener to each button

// Using the prepared event listeners, assign user choice 1 to the variable to be chosen
// Using the prepared event listeners, assign user choice 2 to the variable to be chosen

// Call the "Get User Choice 1" function from the "Play" function
// Call the "Get User Choice 2" function from the "Play" function
// Display the game message in the DOM
// Compare user choice 1 to user choice 2
// If user 1's choice is the same as user 2's choice
// The user wins
// Keep the cards open
// Otherwise, if user 1's choice is not the same as user 2's choice, user 2
// In this case, the user loses.
// Turn over the cards if the applicant loses.
// Display the game message in the DOM.
// Display the game result.
// Define a "Restart" button element and add an event listener. When clicked:
// Reset user 1's choice to nothing.
// Reset user 2's choice to nothing.
// Reset game message to nothing.

## Technologies Used
- HTML  
- CSS  
- JavaScript  

######  Attributions
[Stack Overflow – window.location.href]( https://stackoverflow.com/questions/7077770/window-location-href-and-window-open-methods-in-javascript
)
 

[GeeksforGeeks – Shuffle Cards](
    https://www.geeksforgeeks.org/javascript/javascript-program-to-shuffle-deck-of-cards/?utm_source=chatgpt.com
    
)
[MDN – window.onload](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

## Next Steps
- Add sound and visual effects when you win.
- Develop multiple levels with increasing difficulty levels.