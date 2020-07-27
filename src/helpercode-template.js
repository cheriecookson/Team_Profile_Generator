

const gererateProfileCard = employee => {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
// Engineer profile
        if (role === "Engineer") {
            const github = employee.getGithub();
            data = `<div class="card shadow m-3 bg-light" style="max-width: 20rem;">
            <div class="card-header text-white border-bottom-0 pb-1">${name}</div>
                <div class="card-header text-white pt-1"><span><i class="fas fa-user-astronaut"></i></span>Engineer</div>                               
                    <div class="card-body">
                        <ul class="list-group shadow-sm">
                            <li class="list-group-item border">Employee ID: ${id}</li>
                            <li class="list-group-item border">Email Address: ${email}</li>
                            <li class="list-group-item border">Github Username: ${github}</li>
                        </ul>
                    </div>
        </div>`

// Intern profile
        } else if (role === "Intern") {
            const school = employee.getSchool();
            data = `<div class="card shadow m-3 bg-light" style="max-width: 20rem;">
            <div class="card-header text-white border-bottom-0 pb-1">${name}</div>
                <div class="card-header text-white pt-1"><span><i class="fas fa-user-astronaut"></i></span>Intern</div>                               
                    <div class="card-body">
                        <ul class="list-group shadow-sm">
                            <li class="list-group-item border">Employee ID: ${id}</li>
                            <li class="list-group-item border">Email Address: ${email}</li>
                            <li class="list-group-item border">School: ${school}</li>
                        </ul>
                    </div>
        </div>`

// Manager profile
        } else {
            const officeNum = employee.getOfficeNum();
            data = `<div class="card shadow m-3 bg-light" style="max-width: 20rem;">
                <div class="card-header text-white border-bottom-0 pb-1">${name}</div>
                    <div class="card-header text-white pt-1"><span><i class="fas fa-user-astronaut"></i></span>Manager</div>                               
                        <div class="card-body">
                            <ul class="list-group shadow-sm">
                                <li class="list-group-item border">Employee ID: ${id}</li>
                                <li class="list-group-item border">Email Address: ${email}</li>
                                <li class="list-group-item border">Office Phone: ${officeNum}</li>
                            </ul>
                        </div>
            </div>`
        }
        return data;
};


module.exports = employees => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css"/>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="display-4 bg-dark text-white text-center p-2 shadow-sm">Team Profile</header>
            <main class="card-group">
            ${employees.map(gererateProfileCard).join(` `)}

            </main> 
    </body>
    </html>`;
    
};

