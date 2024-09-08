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

# Pokémon App by Tania Tello

## Achievements

### Home Page

- **Search and Filter**: Implemented a search bar and filter functionality to easily find and display Pokémon based on name and type.
- **Pagination**: Added pagination to handle large lists of Pokémon efficiently, enhancing the user experience by displaying data in chunks.

### Pokémon Details Page

- **Detailed Information**: Displays comprehensive details about the selected Pokémon, including:
  - **Name**
  - **Image**
  - **Types** (e.g., Water, Fire)
  - **Abilities**
  - **Stats** (HP, Attack, Defense, etc.)
  - **Evolution Chain** (if applicable)

### Favorite Pokémon

- **Favorites Management**: Integrated a system allowing users to mark Pokémon as favorites and persist these favorites in local storage.
- **Favorite Toggle**: Allows users to add or remove Pokémon from their favorites, updating the UI to reflect the current status.

### Error Handling

- **API Requests**: Implemented error handling for failed API requests, including user-friendly error messages and a retry mechanism.

### Responsive Design

Important: I skip Test due to taking me more time to configure, with more time i will able to do it

- **Consistent Experience**: Ensured that the application is fully responsive and provides a consistent user experience across various devices.

### Filter Component

- **Filtering and Sorting**: Allows users to filter Pokémon by type and sort by attributes like name, HP, attack, and defense.

## How to Run the Project

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-repository-url.git
    cd your-repository-directory
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Start the Development Server**:

    ```bash
    npm run start
    ```

4. **Open the Application**: Navigate to [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## Improvements

Personal Improvement

- **Next.js**: Explore using Next.js for improved handling of routing and images, leveraging its server-side rendering and static site generation features for better performance and SEO and routing.
