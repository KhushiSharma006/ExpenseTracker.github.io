document.addEventListener('DOMContentLoaded', function() {
    // Fetch expense summary data and create chart
    fetch('/expense_summary')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('expenseChart').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: Object.keys(data),
                    datasets: [{
                        data: Object.values(data),
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0',
                            '#9966FF'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right'
                        },
                        title: {
                            display: true,
                            text: 'Expenses by Category'
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error loading expense summary:', error));

    // Set default date to today for the add expense form
    document.getElementById('date').valueAsDate = new Date();
}); 