
document.getElementById('getstarted').addEventListener('click', function() {
    const text = document.getElementById('emailad').value;
    console.log(text);
    if (text === 'dithira@gmail.com'){
      window.open('guest.html', '_self');
      console.log('Welcome to Dithira\'s insights');
    }
});
