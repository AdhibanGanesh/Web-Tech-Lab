const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
let registered =false;
form.addEventListener('submit', e => 
{
  e.preventDefault();
  confirm('LOGIN ACCEPT TO SUBSCRIBE...??')
  checkInput();
  if (registered) {
    setTimeout(() => 
    {
      alert('SUCCESSFULLY SUBSCRIBED TO THE CHANNEL...');
      var mem = prompt("ENTER YOUR YouTube ID : ");
      document.getElementById('mem').innerHTML = 'MEMBERSHIP ELIGIBLE FOR ' + mem + '...!!';
    }, 100);
  }
});
function checkInput() 
{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (usernameValue === '') 
    {
        setError(username, 'USERNAME REQUIRED!!');
    }
    else 
    {
      setSuccess(username);
    }
    if (emailValue === "") 
    {
      setError(email, "EMAIL ID REQUIRED!!");
    }
    else if (!isEmail(emailValue)) 
    {
        setError(email, "ONLY VALID EMAIL ID ACCEPTED!!");
    }
    else {
      setSuccess(email);
    }
    if (passwordValue === "") 
    {
      setError(password, "PASSWORD REQUIRED!!");
    }
    else 
    {
      setSuccess(password);
    }
    if (usernameValue !== "" && isEmail(emailValue) && passwordValue !== "") 
    {
      registered = true;
    } 
    else 
    {
      registered = false;
    }
}
function setError(input, message) 
{
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('p');
  formGroup.className = "form-group error";
  small.innerText = message;
}
function setSuccess(input) 
{
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
}
function isEmail(email) 
{
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}