// CountUp animation for statistics
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    // Fix: Ensure the numbers stop at the end value
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current.toLocaleString(); // Format number with commas

        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            clearInterval(timer); // Stop the interval once the number reaches the target
        }
    }, stepTime);
}

// Call count-up for each statistic
animateValue("revenue", 0, 100, 2000);
animateValue("overdue-invoices", 0, 100, 2000);
animateValue("outstanding-invoices", 0, 100, 2000);
animateValue("expenses", 0, 100, 2000);

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['General Checkup', 'Blood Test', 'X-Ray'],
        datasets: [{
            data: [29.4, 11.8, 58.8],
            backgroundColor: ['#007bff', '#28a745', '#ffc107']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});

// Stacked Bar Chart
const barCtx = document.getElementById('stackedBarChart').getContext('2d');
const stackedBarChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Male Customers',
                data: [150, 130, 140, 120, 170, 160, 150, 180, 175, 160, 155, 145],
                backgroundColor: '#007bff'
            },
            {
                label: 'Female Customers',
                data: [170, 160, 150, 140, 180, 170, 160, 190, 185, 170, 165, 155],
                backgroundColor: '#ffc107'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: { stacked: true },
            y: { stacked: true }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' customers';
                    }
                }
            }
        }
    }
});
