document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/getRegions')
        .then(response => response.json())
        .then(regions => {
            const select = document.getElementById('regions');
            regions.forEach(region => {
                const option = document.createElement('option');
                option.value = region;
                option.textContent = region;
                select.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching regions:', error));
});