# Portfolio Project

<p align="center">
    <img src="https://laravel.com/img/logomark.min.svg" width="90" />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png?20170919082558" width="90" />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/innocenzi/awesome-inertiajs/main/assets/logo.svg" width="100" />
</p>

This is a personal portfolio project built with Laravel, Vue3, and InertiaJS. The goal of this project is to showcase my skills, projects, and experience as a developer. The application features a modern and responsive design, allowing visitors to explore my work and get in touch with me.

## Features

- **Single-Page Application (SPA)**: Utilizes InertiaJS to create a seamless and fast single-page application experience.
- **Dynamic Content**: Manage projects, skills, and other portfolio items through an admin panel.
- **Responsive Design**: Fully responsive and optimized for all screen sizes, ensuring a great user experience on mobile, tablet, and desktop devices.
- **Modern UI**: Styled using TailwindCSS for a sleek and modern user interface.
- **SEO Friendly**: Includes meta tags and other best practices to improve search engine visibility.

## Tech Stack

- <img src="https://laravel.com/img/logomark.min.svg" width="20"/> **Laravel**: The backend is powered by Laravel, a powerful PHP framework, which handles routing, data processing, and API endpoints.
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png?20170919082558" width="20"/> **Vue3**: The frontend is built with Vue3, providing a reactive and component-based architecture for a dynamic user experience.
- <img src="https://raw.githubusercontent.com/innocenzi/awesome-inertiajs/main/assets/logo.svg" width="20"/> **InertiaJS**: Acts as a bridge between Laravel and Vue, allowing for a smooth SPA development without the need for an API.
- <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="20"/> **TailwindCSS**: A utility-first CSS framework used for styling, making it easy to create a modern and responsive design.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/SlovenskyUjo/ujoveportfolio_react.git
    ```

2. **Install dependencies:**

    ```bash
    cd ujoveportfolio_react
    composer install
    npm install
    ```

3. **Set up environment variables:**

    Copy the `.env.example` file to `.env` and configure your database and other settings.

    ```bash
    cp .env.example .env
    ```

4. **Generate application key:**

    ```bash
    php artisan key:generate
    ```

5. **Run migrations:**

    ```bash
    php artisan migrate
    ```

6. **Build assets:**

    ```bash
    npm run build
    ```

7. **Serve the application:**

    ```bash
    php artisan serve
    ```

8. **Visit the application in your browser:**

    Navigate to `http://localhost:8000` to view the portfolio.

## Usage

Once the project is set up, you can customize the content through the admin panel. Add your projects, skills, and other information to create a personalized portfolio. The UI is fully customizable with Vue components and TailwindCSS.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request. For major changes, please open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License.
