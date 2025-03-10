# Herba Wanders E-Commerce Website

## Overview

This project is an E-commerce website developed for **Herba Wanders Private Limited** to sell natural products such as Shilajit, Moringa, Ashwagandha, Chyavanprash, Oils, Honey, and other nutritional supplements. The website allows customers to browse products and make secure online payments through Stripe in the future.. 

### Key Features:
- Responsive and interactive UI using **React** and **TypeScript**.
- Seamless shopping experience with an easy-to-use **shopping cart**.
- Secure payment gateway will be integrated in futusing **Stripe** for online payments.
- **Tailwind CSS** for modern, flexible, and responsive design.
- Easy-to-navigate product listing with product detail pages.
- Admin features for managing products and customer orders.

## Tech Stack

### Frontend:
- **React**: For building interactive and dynamic user interfaces.
- **TypeScript**: For type safety and enhanced code scalability.
- **Tailwind CSS**: A utility-first CSS framework to design the user interface efficiently.
- **Stripe**: It will be Integrated for processing payments in future.
- **Node.js**: JavaScript runtime used for running the React app.
  
### Backend (Planned for Future):
- **Django (Python)**: Backend framework for handling APIs and database interactions.
- **PostgreSQL**: Database for storing user and order information (Planned for future).

## Project Structure
```
├── frontend/                        # React app folder
│   ├── node_modules/                 # Node.js dependencies (auto-generated)
│   ├── public/                       # Public assets
│   │   ├── static/                   # Static folder for images and assets
│   │   │   ├── images/               # Images folder
│   │   │   │   ├── banner1.jpg       # Banner image
│   │   │   │   ├── banner2.jpg       # Banner image
│   │   │   │   ├── banner3.jpg       # Banner image
│   │   │   │   ├── bee_pollen.jpg    # Product image
│   │   │   │   ├── chamomile.jpg     # Product image
│   │   │   │   ├── chia_seeds.jpg    # Product image
│   │   │   │   ├── chyavanprash.jpg  # Product image
│   │   │   │   ├── coconut-oil.png  # Product image
│   │   │   │   ├── hand-soap.png     # Product image
│   │   │   │   ├── moringa_leaves_tea.jpg  # Product image
│   │   │   │   ├── moringa_powder.jpg     # Product image
│   │   │   │   ├── multigrain_satu.jpg    # Product image
│   │   │   │   ├── native_chiuri_honey.jpg  # Product image
│   │   │   │   ├── shilajit.jpg      # Product image
│   │   │   ├── cart-icon.png         # Cart icon
│   │   │   ├── logo.png              # Logo
│   │   │   ├── maintenance.png       # Maintenance image
│   │   ├── favicon.ico               # Favicon
│   │   ├── index.html                # Main HTML file for React
│   │   ├── logo192.png               # Logo for PWA (192px)
│   │   ├── logo512.png               # Logo for PWA (512px)
│   │   ├── manifest.json             # Web app manifest
│   │   └── robots.txt                # Robots.txt for search engines
│   ├── src/                          # React source code
│   │   ├── components/               # Reusable React components
│   │   │   ├── banner.tsx            # Banner component
│   │   │   ├── Cart.tsx              # Cart component
│   │   │   ├── footer.tsx            # Footer component
│   │   │   ├── header.tsx            # Header component
│   │   │   ├── home.tsx              # Home page component
│   │   │   └── ProductDetails.tsx    # Product details component
│   │   ├── contexts/                 # Contexts for state management
│   │   │   └── CartContext.tsx       # Cart context
│   │   ├── pages/                    # Page components
│   │   │   ├── about.tsx             # About page
│   │   │   ├── checkout.tsx          # Checkout page
│   │   │   ├── contact.tsx           # Contact page
│   │   │   ├── products.tsx          # Product listing or detail page
│   │   │   └── tipsandresources.tsx  # Tips & Resources page
│   │   ├── styles/                   # Global and local Tailwind styles
│   │   │   └── globals.css           # Global styles (e.g., reset, base styles)
│   │   ├── App.css                   # Main app styles
│   │   ├── App.test.tsx              # Unit tests
│   │   ├── App.tsx                   # Main App component
│   │   ├── index.css                 # Index-specific styles
│   │   ├── index.tsx                 # React entry point
│   │   ├── logo.svg                  # Logo SVG (optional)
│   │   ├── reportWebVitals.ts        # Web vitals logging
│   │   ├── setupTests.ts             # Test setup
│   │   └── tsconfig.json             # TypeScript configuration
│   ├── package.json                  # Node.js dependencies and scripts
│   ├── package-lock.json             # Locked dependency versions
│   ├── postcss.config.js             # PostCSS configuration
│   ├── README.md                     # React project README
│   ├── tailwind.config.js            # Tailwind CSS configuration
```
Installation

To set up the project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/LagnadLinus/herba_wanders_frontend
cd herba_wanders_frontend

2. Install dependencies:
* Install Node.js and npm if they are not already installed. You can download Node.js from Node website or follow documentation instructions. (https://nodejs.org/en)
* Install project dependencies:
npm install

3. Set up Tailwind CSS:
* Install Tailwind CSS, PostCSS, and Autoprefixer:
npm install -D tailwindcss postcss autoprefixer
* Generate the Tailwind configuration files:
npx tailwindcss init
* Add the necessary Tailwind imports in src/index.css

4. Start the development server:
npm start
This will run the application locally at http://localhost:3000/.

Development Setup

1. React & TypeScript: The frontend uses React along with TypeScript for a more robust, scalable codebase.
2. Tailwind CSS: The project uses Tailwind CSS for styling. It is a utility-first CSS framework that allows for quick, responsive design development.
3. Stripe: Stripe will be integrated for handling online payments securely.
4. React Context: State management is handled via React Context, which simplifies passing data like the shopping cart state between components.
5. File Organization:
Components are organised in the components/ folder.
Pages are located in the pages/ folder.
Styles are in the styles/ folder, including global and Tailwind-based styles.

Features

* Home Page: Displays curated product listings.
* Product Details Page: Allows customers to view detailed information about each product.
* Shopping Cart: Users can add items to their cart and proceed to checkout.
* Checkout Page: Integrates Stripe for secure payment processing which will be done in future.
* Responsive Design: The website is fully responsive and works on both desktop and mobile devices.

How to Contribute

1. Fork this repository and create a new branch:
git checkout -b feature-branch
2. Make your changes and commit them:
git commit -m "Added new feature"
3. Push the changes to your fork:
git push origin feature-branch
4. Open a pull request to merge your changes into the main repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Special thanks to Flaticon for the icons used in the project.
Thanks to Redempticon for the maintenance logo. And also for the Cart icon.
