

document.getElementById('getstarted').addEventListener('click', function() {
    const text = document.getElementById('emailad').value;
    console.log(text);
    if (text === 'coffee'){
      window.open('pages/welcome.html', '_self');
  
    } else if (text === '123'){
        alert("Please re-enter your email");
    } else {
        window.open('pages/guest.html', '_self');
        alert("you don't have access to this page" + text);
        Error("Invalid email");
    }
});


