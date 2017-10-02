$(document).ready(function(){

  $('form').on('submit', function(){

      // var item = $('form input');
      var userName=   $('input[name="user-name"]').val();
      var itemName =  $('input[name="itm-name"]').val();
      var itemPrice= $('input[name="itm-price"]').val();
      var todo= {
        name:userName,
        item: itemName,
        price:itemPrice

      };
      $.ajax({
        type: 'POST',
        url: '/landing',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework

          location.reload();
        }
      });

      return false;

  });



});
