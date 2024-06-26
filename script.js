
document.getElementById('getstarted').addEventListener('click', function() {
    const text = document.getElementById('emailad').value;
    console.log(text);
    if (text === 'smd@gmail.com'){
      window.open('pages/guest.html', '_self');
      console.log('Welcome to Dithira\'s insights');
    }
    else if (typeof text === 'string'){
      window.open('pages/welcome.html', '_self');
      console.log("loaded");
    }
});


