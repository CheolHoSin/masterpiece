function login() {
  const loginForm = document.getElementById('loginForm')
  if (!loginForm.checkValidity()) return

  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      const responseData = JSON.parse(this.responseText)

      if (this.status == 200) {
        location.href='/'
      } else {
        alert(responseData.message)
      }
    }
  }

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  xhttp.open("POST", "/login", true)
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhttp.send('email=' + email + '&password=' + password)
}
