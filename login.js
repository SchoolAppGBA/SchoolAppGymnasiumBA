
		  	/* Check, if the user already logged in */
			function init(){
				if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined){
					$("#username").val(window.localStorage["username"]);
					$("#password").val(window.localStorage["password"]);
					check();
				}
				
			}
			/* Check, if uname = Username && upass = password */
			function check()/*function to check userid & password*/
			{
			var u = $("#username").val();
			var p = $("#password").val();
			 /*the following code checkes whether the entered userid and password are matching*/
			 if(form.uname.value == "admin" && form.upass.value == "admin")
			  {
				window.localStorage["username"] = u;
                window.localStorage["password"] = p;
				window.location.href = 'main.html';/*opens the target page while Id & password matches*/
			  }
			 else
			 {
				 navigator.notification.alert("Du hast dich mit den falschen Daten angemeldet!", function() {});
			  }
			}