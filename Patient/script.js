const patients = [ 
    {
        id: 1,
        image: 'https://via.placeholder.com/50',
        name: 'John Doe',
        gender: 'Male',
        email: 'johndoe@gmail.com',
        phone: '+1234567890',
        address: '123 Main St, City',
        status: 'Admitted',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/50',
        name: 'Emily Clark',
        gender: 'Female',
        email: 'emilyclark@gmail.com',
        phone: '+0987654321',
        address: '456 Maple St, City',
        status: 'Discharged',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/50',
        name: 'Sarah Brown',
        gender: 'Female',
        email: 'sarahbrown@gmail.com',
        phone: '+1122334455',
        address: '789 Oak St, City',
        status: 'Under Treatment',
    },
  ];
  
  let currentPage = 1;
  const patientsPerPage = 5;
  const patientListEl = document.getElementById('patientList');
  const currentPageEl = document.getElementById('current-page');
  const totalPagesEl = document.getElementById('total-pages');
  const totalPatients = patients.length;
  const totalPages = Math.ceil(totalPatients / patientsPerPage);
  
  totalPagesEl.textContent = totalPages;
  
  function renderPatients() {
    const startIndex = (currentPage - 1) * patientsPerPage;
    const currentPatients = patients.slice(startIndex, startIndex + patientsPerPage);
  
    patientListEl.innerHTML = '';
    currentPatients.forEach((patient) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${patient.image}" alt="${patient.name}" width="50"></td>
            <td>${patient.name}</td>
            <td>${patient.gender}</td>
            <td>${patient.email}</td>
            <td>${patient.phone}</td>
            <td>${patient.address}</td>
            <td>${patient.status}</td>
            <td>
                <button class="edit-btn">More details</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        patientListEl.appendChild(row);
    });
  
    currentPageEl.textContent = currentPage;
  }
  
  document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPatients();
    }
  });
  
  document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPatients();
    }
  });
  
  renderPatients();
  