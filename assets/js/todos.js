// Check off specific todos by clicking
$('ul').on( 'click', 'li',function(){
  $(this).toggleClass('completed');
});

// $('li').click(function(){
//   //If li is gray
//   if($(this).css('color') === 'rgb(128, 128, 128)'){
//     $(this).css({
//       color: 'black',
//       textDecoration: 'none'
//     });
//   } else{
//     $(this).css({
//       color: 'gray',
//       textDecoration: 'line-through'
//     });
//   }
// })

// Click on X to delete todo
$('ul').on('click', 'span', function(e){
  //Remove this li
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(event.which === 13) {
    // grabbing new todo from input
    var todoText = $(this).val();
    $(this).val('');
    // create a new li and add to ul
    $('ul').append('<li><span>X </span>' + todoText + '</li>');
  }
});

