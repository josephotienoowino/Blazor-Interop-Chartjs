// wwwroot/chartInterop.js
function initializeChart() {
    // Use Chart.js to create and configure the chart
    var ctx = document.getElementById('chartContainer').getContext('2d');
    
    var myChart = new Chart(ctx, {
        type: 'bar', // Specify the chart type (e.g., bar, line, pie)
        data: {
            labels: ['Label 1', 'Label 2', 'Label 3'],
            datasets: [{
                label: 'Sample Data',
                data: [10, 20, 30],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}