//sample data modified from randomUser.me
var template = $('#myTemplate').html()
var templateCompiled = Handlebars.compile(template)

$(document).ready(() => {

  // Disable placeholder options upon load
  $('option[value="select"]').attr('disabled', true)

  $('#findMatch').click(() => {
    getUserData()
      .then(function(val) {
        randomUser = val

        var output = templateCompiled(randomUser)
        $('#match').html(output)
      })
  })
})

function getUserData() {
  return new Promise(function(resolve, reject) {
    var gender = $('#seekingGender').val()
    var country = $('#country').val()

    $.ajax({
      url: `https://randomuser.me/api/?nat=${country}&gender=${gender}`,
      dataType: 'json',
    })
    .done(function(data) {
      resolve(data)
    })
  })
}












