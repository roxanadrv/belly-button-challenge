let dataset;
// Fetch the data once and store it in 'dataset'
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
  dataset = data; // Store the data for later use
  init(dataset); // Initialize the dashboard with the fetched data
});

function init(data) {
    // Step 1: Find the dropdown menu in the HTML document by its ID
    let selector = d3.select("#selDataset");
  
    // Step 2: Iterate through each name in the 'names' array from the data
    data.names.forEach(function(sample) {
      // For each sample, create a new dropdown option element
      let option = selector.append("option");
      // Set the text displayed in the dropdown to the sample ID
      option.text(sample);
      // Set the value attribute of the option to the sample ID
      option.property("value", sample);
    });
  
    // Step 3: Select the first sample from the 'names' array to use as initial data
    const firstSample = data.names[0];
  
    // Step 4: Call the function to update the charts and metadata using the first sample
    updateCharts(firstSample, data);
  }

  function updateCharts (sample, data){
    // Find the data for the selected sample from the samples array
  let selectedSample = data.samples.filter(function(obj) {
    return obj.id === sample;
  })[0];

  // Find the metadata for the selected sample from the metadata array
  let selectedMetadata=data.metadata.filter(function(obj){
    return obj.id===Number(sample)
  })[0];
  // Preparing data for the Bar Chart
  // Extract the top 10 OTU IDs, sample values, and labels for the selected sample
  let topSampleValues=selectedSample.sample_values.slice(0,10).reverse();
  let topOtuIds = selectedSample.otu_ids.slice(0, 10).map(function(otuID) {
    return `OTU ${otuID}`;
  }).reverse();
  let topOtuLabels=selectedSample.otu_labels.slice(0,10).reverse();

  // Create the trace for the Bar Chart
  let barData = [{
    x: topSampleValues,
    y: topOtuIds,
    text: topOtuLabels,
    type: 'bar',
    orientation: 'h'
  }];

  // Render the Bar Chart using Plotly
  Plotly.newPlot('bar', barData);


  // Preparing data for the Bubble Chart
  // Use all OTU IDs, sample values, and labels for the bubble chart
  let bubbleData = [{
    x: selectedSample.otu_ids,
    y: selectedSample.sample_values,
    text: selectedSample.otu_labels,
    mode: 'markers',
    marker: {
      size: selectedSample.sample_values,
      color: selectedSample.otu_ids,
      colorscale: 'Earth'
    }
  }];

  // Render the Bubble Chart using Plotly
  Plotly.newPlot('bubble', bubbleData);

  // Metadata
  var metadataPanel = d3.select("#sample-metadata");
  metadataPanel.html(""); // Clear existing metadata
  Object.entries(selectedMetadata).forEach(([key, value]) => {
    metadataPanel.append("h6").text(`${key.toUpperCase()}: ${value}`);
  });
  };

d3.selectAll('#selDataset').on("change",handleChange);
function handleChange() {
    let newSample=d3.select(this).property("value")
    updateCharts(newSample, dataset)
};


