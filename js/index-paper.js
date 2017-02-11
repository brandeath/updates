$(function() {
  $(".dark").click(function() {
    $(".feed").addClass('dark');
  });
  $(".light").click(function() {
    $(".feed").removeClass('dark');
  });

  var limit = 3;

  function randomString(length) {
       var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

       if (! length) {
           length = Math.floor(Math.random() * chars.length);
       }

       var str = '';
       for (var i = 0; i < length; i++) {
           str += chars[Math.floor(Math.random() * chars.length)];
       }
       return str;
   }

  function feedparser(url, divid) {
    $.ajax({
      type: "GET",
      // url: document.location.protocol + '//api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url),
      url: 'http:' + '//api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url),
      dataType: 'json',
      error: function() {
        $(divid).after("<center>Unable to load feed, Incorrect path or invalid feed</center>");
      },
      success: function(xml) {
        values = xml.items;

        for (var i = 0, j = Math.min(values.length, limit); i < j; i++) {
          // console.log(values[i]);
          var randomDivId = "x" + randomString(8);

          var divContent = "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button><h4 class='modal-title' id='"+randomDivId.toString()+"Label'>Abstract</h4></div><div class='modal-body'><p>"+values[i].content+"</p></div><div class='modal-footer'><div class='left-side'><button type='button' class='btn btn-default btn-simple' data-dismiss='modal'>Close</button></div><div class='divider'></div><div class='right-side'><a href='"+values[i].link+"' target='_blank'><button type='button' class='btn btn-default btn-simple'>Go Inspire</button></a></div></div></div></div>"

          $(divid).append("<li><a class='paper-title' href='" + values[i].link + "' target='_blank'>" + values[i].title + "</a><br><i>" + values[i].author + " et al" + "</i><i class='paper-date'>"+ values[i].pubDate +"</i><a  data-toggle='modal' data-target='#"+randomDivId.toString()+"' class='source' target='_blank' style='display:inline;'><i class='fa fa-plus-circle' aria-hidden='true'></i></a><div class='modal fade' id='"+randomDivId.toString()+"' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' style='display: none;'>"+ divContent + "</div></li>");
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

  var url_mengruwu = "http://inspirehep.net/rss?ln=en&p=exactauthor%3AMeng.Ru.Wu.1"
  feedparser(url_mengruwu, mengruwu)

  var url_shashankshalgar = "http://inspirehep.net/rss?ln=en&p=exactauthor%3AS.Shalgar.1"
  feedparser(url_shashankshalgar, shashankshalgar)

  var url_vcirigliano1 = "http://inspirehep.net/rss?ln=en&p=exactauthor%3AV.Cirigliano.1"
  feedparser(url_vcirigliano1, vcirigliano1)


  var url_mwparis1 ="http://inspirehep.net/rss?ln=en&p=exactauthor%3AM.W.Paris.1"
  feedparser(url_mwparis1, mwparis1)


  var url_ckishimoto1 ="http://inspirehep.net/rss?ln=en&p=exactauthor%3AC.T.Kishimoto.1"
  feedparser(url_ckishimoto1, ckishimoto1)

  var url_afriedland = "http://inspirehep.net/rss?ln=en&p=exactauthor%3AA.Friedland.1"
  feedparser(url_afriedland, afriedland)


});
