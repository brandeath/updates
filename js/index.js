$(function() {
  $(".dark").click(function() {
    $(".feed").addClass('dark');
  });
  $(".light").click(function() {
    $(".feed").removeClass('dark');
  });

   var limit = 3;

  function feedparser(url,divid) {
  $.ajax({
    type: "GET",
    url: document.location.protocol + '//api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url),
    dataType: 'json',
    error: function() {
      $(divid).after("<center>Unable to load feed, Incorrect path or invalid feed</center>");
    },
    success: function(xml) {
      values = xml.items;

      for (var i = 0, j = Math.min(values.length,limit) ; i < j; i++) {
        // console.log(values[i]);

        $(divid).append("<li><a href='" + values[i].link + "' target='_blank'>" + values[i].title + "</a><br><i>" + values[i].author + " et al" + "</i><a href='" + values[i].link + "' class='source'  target='_blank'><i class='fa fa-bookmark' aria-hidden='true'></i></a><div>" + values[i].content + "</div></li>");
      }
    }
  });
  }



  var url_graffelt1 = 'http://inspirehep.net/rss?ln=en&p=exactauthor%3AGeorg.G.Raffelt.1';
  feedparser(url_graffelt1, graffelt)

  var url_gfuller1 = 'http://inspirehep.net/rss?ln=en&p=exactauthor%3AG.M.Fuller.1'
  feedparser(url_gfuller1, gfuller1)

  var url_gfuller2 = 'http://inspirehep.net/rss?ln=en&p=exactauthor%3AG.M.Fuller.2'
  feedparser(url_gfuller2, gfuller2)

  var url_hduan = 'http://inspirehep.net/rss?ln=en&p=exactauthor%3AHuaiyu.Duan.1'
  feedparser(url_hduan, hduan)

  var url_amirizzi = 'http://inspirehep.net/rss?ln=en&p=exactauthor%3AA.Mirizzi.1'
  feedparser(url_amirizzi, amirizzi)


  var url_jpkneller1 = 'http://inspirehep.net/rss?ln=en&p=exactauthor%3AJ.P.Kneller.1'
  feedparser(url_jpkneller1, jpkneller1)

    var url_bdasgupta1 = 'http://inspirehep.net/rss?ln=en&p=exactauthor%3AB.Dasgupta.1'
  feedparser(url_bdasgupta1, bdasgupta1)

var url_itamborra1 = 'http://inspirehep.net/rss?ln=en&p=exactauthor%3AI.Tamborra.1'
  feedparser(url_itamborra1, itamborra1)


});
