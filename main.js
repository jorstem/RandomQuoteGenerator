<!-- Quand le javascript est chargé, lance ça toute suite ! -->
$(document).ready(function(){

var  quote;
var author;

  function getNewQuote(){
    <!-- Make an API request -->
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data:{
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response){
        quote = response.quoteText;
        $('#quote').text(quote);

        author = response.quoteAuthor;
        if(author){
          $('#author').text('said by ' + author);
        } else{
          $('#author').text('- Unknown');
        }
      }
    });
  }
  getNewQuote();

  $('.get-quote').on('click', function(event){
    event.preventDefault();
    getNewQuote();
  });

  $('.share-quote').on('click', function(event){
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + " -- " + author));
  });

});
