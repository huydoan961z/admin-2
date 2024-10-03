document.addEventListener('DOMContentLoaded', () => {
  const services = [
    { id: 1, serviceName: 'Blood Test', type: 'Diagnostic', price: '50$', status: 'Available' },
    { id: 2, serviceName: 'MRI Scan', type: 'Medical', price: '300$', status: 'Unavailable' },
    { id: 3, serviceName: 'X-Ray', type: 'Diagnostic', price: '100$', status: 'Available' },
    { id: 4, serviceName: 'Vaccination', type: 'Medical', price: '20$', status: 'Available' },
    { id: 5, serviceName: 'General Checkup', type: 'Medical', price: '80$', status: 'Available' },
    { id: 6, serviceName: 'Ultrasound', type: 'Diagnostic', price: '150$', status: 'Unavailable' }
  ];

  let currentPage = 1;
  const servicesPerPage = 5;
  const totalPages = Math.ceil(services.length / servicesPerPage);

  // Function to render services on the page
  const renderServices = () => {
    const serviceBody = document.getElementById('serviceBody');
    serviceBody.innerHTML = '';

    const startIndex = (currentPage - 1) * servicesPerPage;
    const currentServices = services.slice(startIndex, startIndex + servicesPerPage);

    currentServices.forEach(service => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${service.id}</td>
        <td>${service.serviceName}</td>
        <td>${service.type}</td>
        <td>${service.price}</td>
        <td>${service.status}</td>
        <td>
          <button class="edit-btn">More details</button>
          <button class="delete-btn">Delete</button>
          <button class="edit-btn">Edit service</button>
        </td>
      `;
      serviceBody.appendChild(row);
    });
  };

  // Function to update the pagination display
  const updatePagination = () => {
    document.getElementById('current-page').innerText = currentPage;
    document.getElementById('total-pages').innerText = totalPages;
  };

  // Add event listeners for pagination buttons
  document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderServices();
      updatePagination();
    }
  });

  document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderServices();
      updatePagination();
    }
  });

  // Initial render and pagination update
  renderServices();
  updatePagination();
});
