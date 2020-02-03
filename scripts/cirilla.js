$('#submit').click(function send() {

    let Nom = $('#nom').val();
    let Prenom = $('#prenom').val();
    let Adresse = $('#street').val();
    let Email = $('#email').val();
    let Objet = $('#objet').val();
    let Message = $('#message').val();

$.ajax({
    url:'https://slack.com/api/chat.postMessage',
    type: "POST",
    data: {
        "channel": "salon",
        "text": Nom + ' ' + Prenom + ' ' + Adresse + ' ' +  Email + ' ' + Objet + ' ' + Message,
        "token": creds.token ,
    },
    dataType: "text"
    }).done(function (response) {
    console.log(response)
    }).fail(function (error) {
    console.log(error)
    })
})