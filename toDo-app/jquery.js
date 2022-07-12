$document.ready(function(){  
    const addTask = () => {
        var input =$(this).val();
        if(input != ""){
            $('ul').append('<li>' + input + '<i class="fas fa-check fa-trash "> </li>');
            $(this).val('');
        }
    }
        
    
    $("#input").change(function(){
        addTask();
    });
    $('#add-btn').click(() => {
        addTask();
    })
    $('ul').on('click' , '.fa-trash',function(){
        $(this).parent('li').fadeOut(200);
    });
});