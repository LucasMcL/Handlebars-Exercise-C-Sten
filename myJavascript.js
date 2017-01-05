//sample data modified from randomUser.me
function getUserData() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
    })
    .done(function(data) {
      resolve(data)
    })
  })
}

getUserData()
  .then(function(val) {
    randomUser = val

    console.dir(randomUser)

    var template = $('#myTemplate').html()
    var templateCompiled = Handlebars.compile(template)
    var output = templateCompiled(randomUser)
    $('#user2').append(output)


  })

var randomUser = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "stella",
        "last": "meyer"
      },
      "location": {
        "street": "7385 kapellenweg",
        "city": "schmalkalden-meiningen",
        "state": "saarland",
        "postcode": 58225
      },
      "email": "stella.meyer@example.com",
      "picture": {
        "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/50.jpg"
      },
      "nat": "DE"
    }
  ]
}

//handlebars step one: grap the html from the script tag
var template = $('#myTemplate').html()

//handlebars step two: compile it into a template
var templateCompiled = Handlebars.compile(template)

//handlebars step three:render the HTML by passing the data to the template
var output = templateCompiled(randomUser)

//handlebars step four: put the complete HTML into the DOM
$('#user').append(output)












