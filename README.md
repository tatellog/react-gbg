# Poke Deck Application

## Objective

Create a Poke Deck application using React that interacts with the PokeAPI. The application should allow users to search for and view details about various Pokémon. This exercise will evaluate your skills in React development, API integration, state management, and overall application architecture.

## Requirements

### Home Page

- Display a list of Pokémon with their names and images.
- The list should be paginated, showing 20 Pokémon per page.
- Include a search bar to filter Pokémon by name.

### Pokémon Details Page

When a user clicks on a Pokémon from the list, navigate to a details page.

- Display detailed information about the selected Pokémon, including:
  - **Name**
  - **Image**
  - **Types** (e.g., Water, Fire)
  - **Abilities**
  - **Stats** (HP, Attack, Defense, etc.)
  - **Evolution chain** (if applicable)

### Favorite Pokémon

- Allow users to mark Pokémon as favorites.
- Store the list of favorite Pokémon in local storage or a state management solution like Zustand or Redux.
- Include a section on the home page where users can view their favorite Pokémon.

### Error Handling

- Implement error handling for failed API requests, including a retry mechanism and user-friendly error messages.

### Unit Testing

- Add at least one unit test to your components.

### Code Structure & Best Practices

- Organize your code for maintainability and scalability.
- Use **TypeScript** for type safety.
- Write at least one custom hook to manage a piece of state or logic.
- Demonstrate an understanding of React best practices, including component structure, state management, and side effects handling.

## Bonus Features

- **Sorting and Filtering**: Allow users to sort Pokémon by their stats (e.g., highest HP) or filter by type (e.g., show only Water-type Pokémon).
- **Dark Mode**: Implement a toggle for dark/light mode.
- **Infinite Scrolling**: Instead of pagination, implement infinite scrolling on the home page.

### Responsive Design

- Ensure the application is responsive and works well on various screen sizes, from mobile to desktop.

## Expectations

- You should complete this exercise within **48 hours**.
- Provide a **README** file with instructions on how to run the application.
- Your code will be evaluated based on functionality, code quality, and adherence to best practices.

## Submission

- Submit your code through a **GitHub repository**.
- Include any relevant documentation in the README file, such as how to set up and run the project, any assumptions you made, and your approach to the solution.

## Improvements

After your final submission, review the following topics for improvement:
- Code structure
- Functionality
- Best practices