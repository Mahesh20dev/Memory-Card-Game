# Memory-Card-Game
The provided JavaScript code is a complete implementation of a memory card game. It includes functions for generating cards, shuffling the card data, checking for matches, updating player lives and score, resetting the game, and handling the "New Game" button click event.

To navigate the website, you can open the HTML file in a web browser. The game will display a grid of memory cards, along with the player's lives count, score, and a "New Game" button. Clicking on a card will reveal its image. The player must match pairs of cards by clicking on them. If a match is found, the cards will remain revealed. If a mismatch is found, the cards will flip back over after a short delay. The player's lives count will decrease by 1 for each mismatch. The game ends when all pairs of cards are matched or when the player's lives count reaches 0.

Additional features implemented in the code include:
- A timer that starts when the page loads and counts down from 60 seconds.
- A "New Game" button that resets the game and shuffles the card data.
- Alert messages displayed when the game ends (either by matching all pairs or running out of lives).

To use this code, you can copy the JavaScript code into a separate JavaScript file (e.g., `app.js`) and link it to the HTML file using the `<script>` tag. Make sure to also include the HTML structure and CSS styles required for the game layout.

In the provided code block, the selected code is the complete implementation of the memory card game.

Here is a brief summary of the key functions and features in the code:
- `getData()`: Function that returns an array of card data with image sources, IDs, and names.
- `randomize()`: Function that shuffles the card data array using the Fisher-Yates (Knuth) shuffle algorithm.
- `cardGenerator()`: Function that generates the memory cards using the card data array and adds event listeners to handle card clicks.
- `checkCards(e)`: Function that checks for matches between clicked cards and updates the player's lives count and score accordingly.
- `reset(text)`: Function that resets the game, shuffles the card data, and displays an alert message with the provided text.
- `reset1(text)`: Function that resets the game without shuffling the card data and displays an alert message with the provided text.
- `time(e)`: Function that starts a timer that counts down from the provided value and displays the remaining time on the webpage.
- Event listener for the "New Game" button click event that calls the `reset()` function.

To use this code, you can copy the JavaScript code into a separate JavaScript file (e.g., `app.js`) and link it to the HTML file using the `<script>` tag. Make sure to also include the HTML structure and CSS styles required for the game layout.

In the provided README.md file, you can include instructions on how to navigate the website and any additional features you've implemented. For example, you can explain how to start the game, how to match pairs of cards, how to reset the game, and how to handle the timer and lives count. You can also mention any additional features or improvements you've made to the game.

Remember to include the necessary HTML structure, CSS styles, and any additional files (e.g., images) required for the game layout.

I hope this helps! Let me know if you have any further questions.