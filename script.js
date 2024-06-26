
document.getElementById('getstarted').addEventListener('click', function() {
    const text = document.getElementById('emailad').value;
    console.log(text);
    if (text === 'smd@gmail.com'){
      window.open('guest.html', '_self');
      console.log('Welcome to Dithira\'s insights');
    }
    else if (typeof text === 'string'){
      window.open('welcome.html', '_self');
      console.log("loaded");
    }
});


