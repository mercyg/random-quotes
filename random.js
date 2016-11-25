//Get the random quotes from API using jquery
//Populate the quotes from the Api to the html
 $(document).ready(function () {
    getQuotes();

    $("#btn").click(function () {
        getQuotes();
    });
   var autor;
    var qutote;
     var quoteslink;
    function getQuotes() {
        $.get("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function (data) {
            // console.log(data.quoteText);
             autor = data.quoteAuthor
             qutote = data.quoteText;
             quoteslink = data.quoteLink;
            $("#quotes").html(qutote);
            $("#authors").html(autor);
            $("#link").attr("href", quoteslink).html(quoteslink);

        })
    }

    $("#tweet").click(function () {
        $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + qutote + "...." + autor);
    })
})