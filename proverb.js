$(function()){

var $proverb = $('#proverb');

  $.ajax({
    type:'GET',
    URl:'https://eda-te-reo.herokuapp.com/api/proverbs',
    success: function (proverbs){
      $.each(proverbs, function(i, proverb){
      $proverb.append('<p>Proverb: '+proverb.source+'</p>, <p>Translation: '+proverb.translation+'</p>')

    }
  });
}
