$(function(){
    var deleteBook = function(event){
        var that = this;         
        $(this).attr('disabled', true);
        $.post(
            base_url+'index.php/admin/delete_book/'+$(this).attr('alt'),
            function(data){
                if(data.success){
                    $(that).closest('tr').remove();
                }else{
                    alert(data.msg);
                    $(that).removeAttr('disabled');
                }
            },
            'json'
        );
    }
    $('button.delete').click(deleteBook);
})     