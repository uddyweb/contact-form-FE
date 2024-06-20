const form = document.querySelector('.sign-up');
const success = document.querySelector('.success');
form.addEventListener('submit', e => {
   e.preventDefault();
   const firstName = document.getElementById('first-name').value.trim();
   const lastName = document.getElementById('last-name').value.trim();
   const email = document.getElementById('email').value.trim();
   const radioM = document.getElementById('rad1');
   const radioS = document.getElementById('rad2');
   const message = document.getElementById('message').value.trim();
   const consent = document.getElementById('checkbox').checked;
 

   let inValid = true;
   const error = document.getElementById('error2');
   
   if(radioM.checked == true){
      error.style.display = 'none';
   }else if(radioS.checked == true){
      error.style.display = 'none';
   }else{
      error.style.display = 'block';
   }
   if (firstName === ""){
      inValid = false;

      document.querySelector('#first-name + .alert').style.display = 'block';
      document.querySelector('#first-name').style.border = '1px solid red';
   }else{
      document.querySelector('#first-name + .alert').style.display = 'none';
      document.querySelector('#first-name').style.border = '1px solid green'
   };

 
   if (lastName === ""){
      inValid = false;

      document.querySelector('#last-name + .alert').style.display = 'block';
      document.querySelector('#last-name').style.border = '1px solid red';
   }else{
      document.querySelector('#last-name + .alert').style.display = 'none';
      document.querySelector('#last-name').style.border = '1px solid green'
   };  

   if(!inValidEmail(email)){
      inValid = false;

      document.querySelector('#email + .alert').style.display = 'block';
      document.querySelector('#email').style.border = '1px solid red';
   }else{
      document.querySelector('#email + .alert').style.display = 'none';
            document.querySelector('#email').style.border = '1px solid green'
   };
   if(message === ""){
      inValid = false;

      document.querySelector('#message + .alert').style.display = 'block';
      document.querySelector('#message').style.border = '1px solid red';
   }else{
      document.querySelector('#message + .alert').style.display = 'none';
            document.querySelector('#message').style.border = '1px solid green'
   }
 const alert = document.querySelector('.error');
   if (!consent){
      inValid = false;

      alert.style.display = 'block';
   }else{
      alert.style.display = 'none';
   };
   if(inValid){
      success.style.display = 'block';
      form.reset();
   }else{
      success.style.display = 'none';
   }
})

function inValidEmail(email){
   const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}