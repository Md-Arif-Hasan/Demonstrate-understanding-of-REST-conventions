# Task 1: Demonstrate understanding of Web Application Development




# Simple Stories List Page

This project implements a simple web page that displays a list of stories fetched from the [CryptoDire API](https://cryptodire.kontinentalist.com/api/v1/stories). The page shows the title, hero image, and a snippet of the story content for each story. Additionally, a "Load More" button allows users to fetch additional stories using the `page` parameter in the API URL.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Properties Used](#properties-used)

## Technologies Used

This project is built using React for the fronten by using vite, and Tailwind CSS for styling. It leverages the default Bootstrap theme for quick and responsive layout development.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Md-Arif-Hasan/Web-Application-Development.git
    cd Web-Application-Development
    ```

2. **Install dependencies using npm:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be accessible at `http://localhost:3000`.

## Usage

Visit the application in your web browser and explore the list of stories. Click on the "Load More Stories" button to fetch additional stories.

## API Endpoint

The stories are fetched from the [CryptoDire API](https://cryptodire.kontinentalist.com/api/v1/stories). To load more stories, you can use the `page` parameter in the URL, for example: `https://cryptodire.kontinentalist.com/api/v1/stories?page=2` to load page 2.

## Properties Used

The following properties from the API are utilized in the application:

- `title`: The title of the story.
- `dek`: The snippet of the story content in HTML format (rendered correctly).
- `hero_image.url`: The URL of the hero image.
