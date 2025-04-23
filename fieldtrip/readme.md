## Field Trip Project

### Project Summary

My project is an interactive educational website based on the exhibit at the Eiteljorg Museum of American Indians and Western Art. Instead of focusing on one specific art piece, I was inspired by a wall that presented information about various Native American tribes. I chose this topic because I wanted to create something that both teaches and engages users with the diversity of Indigenous cultures across North America. The goal is to explore the relationship between geography, tribal identity, and traditional art forms through interactive learning and gameplay.

### Core Webpages

- Home Page

Introduction to the project and overview of the tribes featured in the exhibit.

A start button that takes users to the interactive map.

- Interactive Map Page

A clickable map of North America showing where different tribes lived.

Hovering over or clicking a region shows information about that tribe’s culture, traditions, and art styles.

Each tribe profile may include images, short descriptions, and example artworks.

- Art Matching Game Page

A drag-and-drop game where users match pieces of art to the correct region or tribe based on what they’ve learned.

Includes feedback like “Correct!” or “Try again” to reinforce learning.

A score counter and replay button to make it more fun and replayable.

### Design Choices

Website References for Styling:

- https://www.nationalgeographic.com/
- https://artsandculture.google.com/

Color Palette:

- Earth tones (like browns, greens, and warm reds) to reflect nature and the connection many tribes have with the land.
- Soft blues and beiges for backgrounds to keep it calm and readable.
- Highlight colors (like golden yellow) for interactive elements and hover effects.

Data Structure:

Each tribe will be stored as an object with attributes like:

<pre> ```json { "name": "Navajo", "region": "Southwest", "artStyles": ["Weaving", "Sand Painting", "Jewelry"] } ``` </pre>

This structure allows the data to be easily used for both displaying on the map and checking answers in the game.
