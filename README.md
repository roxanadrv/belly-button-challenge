# Belly Button Biodiversity Dashboard

## Overview
This project presents an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dashboard visualizes the microbial species (also known as operational taxonomic units, or OTUs) found in individual samples. Users can select a sample from the dropdown menu to display the top 10 OTUs found in that individual, represented in both bar chart and bubble chart formats. Additionally, demographic information about the sample is displayed.

## Repository Structure
```belly-button-challenge/
│
├── static/
│ └── js/
│ ├── app.js - Main JavaScript file for the project
│ └── .gitkeep - Placeholder to keep the js directory under version control
│
├── index.html - The HTML document for the dashboard
├── README.md - This documentation file
└── sample.js - Sample dataset (Note: The project uses an external dataset from a provided link, not this file)
```

## How to Run
1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser to view the dashboard.
3. Use the dropdown menu to select different samples and explore the data.

## Technologies Used
- D3.js for data manipulation and binding to DOM elements.
- Plotly.js for interactive visualizations.
- Bootstrap for the dashboard layout.

## Data Source
The data is loaded from an external link (provided in `app.js`), which points to a JSON file containing sample information and metadata for various individuals.

## Author
Roxana Darvari