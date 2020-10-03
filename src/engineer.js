function engineerCard(data) {
    return `
    <script src="https://kit.fontawesome.com/58b8a92289.js" crossorigin="anonymous"></script>
    <div class="card employee-card m-2 col-3 shadow mb-5 bg-white rounded">
          <div class="card-header">
              <h2 style="text-transform: capitalize;" class="card-title">${data.name}</h2>
              <h3 class="card-title">Engineer <i class="fas fa-laptop-code"></i></h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${data.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a></li>
              </ul>
          </div>
      </div>
      `;
  }
  module.exports = engineerCard;