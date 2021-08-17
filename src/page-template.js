const generateCards = (teamData) => {
  const manager = teamData.manager.map(function (job) {
    let managerHtml = `
        <div class="row">
          <div class="col-sm-6">
           <div class="card">
              <div class="card-body">
                <h2>${job.name}</h2>
                <h4 class="text-success">Manager<h4>
                <p>ID: ${job.id}</p>
                <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
                <p>Office Number: ${job.office}</p>
              </div>
            </div>
          </div>
        </div>
        `;
    return managerHtml;
  });

  const engineer = teamData.engineer.map(function (job) {
    let engineerHtml = `
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h2>${job.name}</h2>
                <h4 class="text-success">Engineer<h4>
                <p>ID: ${job.id}</p>
                <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
                <p> Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
              </div>
            </div>
          </div>
        </div>
        `;
    return engineerHtml;
  });

  const intern = teamData.intern.map(function (job) {
    let interHtml = `
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                      <h2 class="card-title">${job.name}</h2>
                      <h4 class="text-success">Intern<h4>
                      <p>ID: ${job.id}</p>
                      <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
                      <p> School: ${job.school}</p>
                    </div>
                  </div>
            </div>
        `;
    return interHtml;
  });
  return [manager, engineer, intern];
};

module.exports = (templateData) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body>
            <header>
            <h1 class="text-center">My Team</h1>
            </header>
                ${generateCards(templateData)}
        </body>
        </html>    
        `;
};
