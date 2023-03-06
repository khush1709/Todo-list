// Check off specific Todos by checking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text'").keypress(function(event){
    if(event.which == 13){
        // garbbing new todo text from input
        var todoText = $(this).val();
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa-sharp fa-solid fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type = 'text'").fadeToggle();
});