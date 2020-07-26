const generatePage = () => {
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


<!-- generateProfile -->
            <div class="card shadow m-3 bg-light" style="max-width: 20rem;">
                <div class="card-header text-white border-bottom-0 pb-1">name</div>
                    <div class="card-header text-white pt-1"><span><i class="fas fa-user-astronaut"></i></span>  Class</div>                               
                        <div class="card-body">
                            <ul class="list-group shadow-sm">
                                <li class="list-group-item border">ID: </li>
                                <li class="list-group-item border">Email: </li>
                                <li class="list-group-item border">Phone/GitHub/School: </li>
                            </ul>
                        </div>
            </div>
<!-- generateProfile -->


        </main> 
</body>
</html>
    `;
  };

  module.exports = generatePage;