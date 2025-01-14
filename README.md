# Stacking Card Animation

This project demonstrates a **card stacking animation** where multiple cards are displayed in a 3D style. The cards react to hovering, creating a zoom-in effect for the card that is hovered over, and scaling down the neighboring cards. It utilizes HTML, CSS, and JavaScript to create the effect, with an infinite loop of cards to showcase the animation.

## Features

- **Infinite Card Loop**: The card stack continues infinitely, making it suitable for dynamic content.
- **Zoom Effect**: When hovering over a card, it zooms in, and the adjacent cards are scaled down, creating a 3D effect.
- **Sticky Card Animation**: The cards remain fixed at the top as they stack, allowing for a smooth scrolling experience.
- **Responsive Design**: The design adjusts to different screen sizes, making the animation work well on mobile and desktop.

## How It Works

1. **HTML**: Each card is created with a div element. Each card includes a title and can include additional content or images if desired.
2. **CSS**: The primary effect is achieved using CSS grid for card positioning, along with CSS transitions to create the smooth zoom effect when the card is hovered.
3. **JavaScript**: Used to implement the infinite loop of cards, making the cards wrap around once they reach the end of the stack.

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/PandeyKiran7/stacking-animation
Navigate into the project directory:

bash
Copy code
cd stacking-animation
Open the index.html file in your preferred browser.

Demo
A live demo can be found at: Live Demo link:  https://stacking-animation.netlify.app/

Technologies Used
HTML
CSS (for 3D animations and transitions)
JavaScript (for managing the infinite loop of cards)
Contributing
Feel free to fork this repository, make improvements, and create pull requests.

## License
This project is open source and available under the MIT License.

