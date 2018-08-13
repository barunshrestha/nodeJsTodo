document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('signin-button').addEventListener('click', function(event) {
    event.preventDefault()
    blockstack.redirectToSignIn()
  })
  document.getElementById('signout-button').addEventListener('click', function(event) {
    event.preventDefault()
    blockstack.signUserOut(window.location.href)
  })

  function showProfile(profile) {
    var person = new blockstack.Person(profile)
    document.getElementById('heading-name').innerHTML = person.name() ? person.name() : "Nameless Person"
    if(person.avatarUrl()) {
      document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
    }
    document.getElementById('section-1').style.display = 'none'
    document.getElementById('section-2').style.display = 'block'    
    document.getElementById('section-2').classList.toggle('hide');
  }

  function getUserData(){
   	$.ajax({
			type : "GET",
			url : "http://localhost:5000/api/users",
			success: function(results){
        $('#customFields').append('<tr><th>Name</th><th>Country</th><th>Position</th></tr>');
        $.each(results, function(i, result){
          $('#customFields').append('<tr>');
          //$('#customFields').append(' <td>' + result.username + '</td>');  					
          $('#customFields').append(' <td>' + result.FirstName + ' ' + result.MiddleName + ' ' + result.LastName +'</td>');  					
          $('#customFields').append(' <td>' + result.Country + '</td>');  					
          $('#customFields').append(' <td">' + result.Position + '</td>');  	
          $('#customFields').append('</tr>');				            					
				});
        console.log("Success: ", results);        
			},
			error : function(e) {
				$("#tblConstruct").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}

  if (blockstack.isUserSignedIn()) {
    var profile = blockstack.loadUserData().profile
      showProfile(profile)
      getUserData()
  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn().then(function(userData) {
      window.location = window.location.origin
    })
  }
})
