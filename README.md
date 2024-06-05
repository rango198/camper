# Camper Rental Catalog

This is a React application for a camper rental catalog. The app allows users to
browse, filter, and add campers to their list of favorites. The project includes
pagination, filtering options, and a detailed view of each camper. The state
management is handled by Redux, and data fetching is done using Axios.

## Features

- Browse a catalog of camper rental listings
- Filter listings by location, equipment, and type
- Pagination: load more listings on demand
- Add/remove listings to/from favorites
- Persistent state for favorite listings
- Detailed view of each camper with reviews
- Form for booking a camper with validation

## Getting Started

These instructions will help you set up the project on your local machine for
development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/camper-rental-catalog.git
cd camper-rental-catalog

```

2. Install the dependencies: Using npm: npm install

Using yarn:yarn install

```

Running the Application To start the development server, run:

Using npm: npm start Using yarn: yarn start

```

The application should now be running at http://localhost:3000.

Building for Production To create a production build, run:

Using npm: npm run build Using yarn:yarn build

The production-ready files will be in the build directory.

```
Deployment
You can deploy the application to GitHub Pages, Netlify, or any other hosting service. Here is an example of how to deploy to GitHub Pages:

1. Install the gh-pages package:
Using npm: npm install gh-pages --save-dev

Using yarn: yarn add gh-pages --dev

```

Mock API Setup This project uses MockAPI for backend data. Set up your MockAPI
resource with the following fields:

\_id name price rating location adults children engine transmission form length
width height tank consumption description details gallery reviews Populate the
collection with at least 13 different camper listings.

Usage The home page contains a general description of the services provided by
the company. The /catalog page displays the catalog of campers. The /favorites
page shows the list of favorite campers. Clicking the heart icon adds/removes a
camper to/from the favorites list. Clicking "Load More" will load additional
listings in the catalog. Clicking "Show More" on a listing opens a modal with
detailed information and reviews about the camper. The modal includes a form for
booking the camper. The form validates name, email, and booking date fields.
Contributing Please read CONTRIBUTING.md for details on our code of conduct, and
the process for submitting pull requests.

License This project is licensed under the MIT License - see the LICENSE file
for details.

Acknowledgments MockAPI Redux Axios React Router
