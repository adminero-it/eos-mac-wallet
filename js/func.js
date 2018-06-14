function refreshwalletlist(){
         $.post(
                "walletsbox.php", 
                { id: $(this).attr('id'), 
                  action: 'refresh', },
                function(data) { 
                                $('#walletsbox').html(data);
                                $('#infobox').prepend("&bullet; Refreshing wallets<br />");
                                });    
}
function showhidecreate(){
    
            $("#create").toggle( "slow", function() {
                                        // Animation complete.
                                                    });
}

$(document).ready(function() {
    
    refreshwalletlist();

});



setInterval(function(){
    $.get("https://dc1.eosemerge.io:5443/v1/chain/get_info", function(data, status){
        //alert("Data: " + data['server_version'] + " Status: " + status);
        if (status == 'success') {
            $('#infobox').prepend('<span style="color:#009900;">&bullet; dc1.eosemerge.io ONLINE (https)</span><br />version: <strong>'+data['server_version']+'</strong>   **   head block: <strong>'+
            data['head_block_num']+'</strong><br />block date: <strong>'+data['head_block_time']+'</strong>  **  producer: <strong>'+data['head_block_producer']+'</strong><br /> irreversible block: <strong>'+data['last_irreversible_block_num']+'</strong>  <br /><br />');
        }
        else {
            $('#infobox').prepend('<span style="color:red;">&bullet; dc1.eosemerge.io OFFLINE (https)<br /></span>');
        }
    });
}, 300000);
setInterval(function(){
    refreshwalletlist();
}, 120000);

$(function () {


        $("#showcreate").click(function () {
            showhidecreate();
        });

        $('#newbtn').click(function(){ 
             var chkbox = $('#savepass').prop('checked');
             $.post(
                    "wallet.php", 
                    { name: $('#newname').val(),
                      savepass: chkbox,
                      action: 'new', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    });
              refreshwalletlist();
              $("#create").toggle();
              });

        $('#walletsbox').on('click', '.unlockbtn', function (){
        //$('.unlockbtn').click(function(){ 
            var idd = '#pass-'+$(this).attr('id');
             $.post(
                    "wallet.php", 
                    { id: $(this).attr('id'),
                      pass: $(idd).val(),
                      action: 'unlock', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    });
              refreshwalletlist();
              });

        $('#walletsbox').on('click', '.lockbtn', function (){
        //$('.lockbtn').click(function(){ 
             $.post(
                    "wallet.php", 
                    { id: $(this).attr('id'),
                      action: 'lock', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    });
              refreshwalletlist();
              });

        $('#walletsbox').on('click', '.importbtn', function (){
        //$('.importbtn').click(function(){ 
            var idd = '#impass-'+$(this).attr('id');
             $.post(
                    "wallet.php", 
                    { id: $(this).attr('id'),
                      impass: $(idd).val(),
                      action: 'import', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    });
              });

        $('#keylistbtn').click(function(){ 
             $.post(
                    "wallet.php", 
                    { id: $(this).attr('id'),
                      action: 'keylist', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    });
              });

        $('#lockallbtn').click(function(){ 
             $.post(
                    "wallet.php", 
                    { id: $(this).attr('id'),
                      action: 'lockall', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    });
              refreshwalletlist();
              });

        $('#walletsbox').on('click', '.delbtn', function (){
        //$('.delbtn').click(function(){ 
             $.post(
                    "wallet.php", 
                    { id: $(this).attr('id'), 
                      action: 'del', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    });
              refreshwalletlist();
              });

        $('#walletsbox').on('click', '.openbtn', function (){
        //$('.openbtn').click(function(){ 
             $.post(
                    "wallet.php", 
                    { id: $(this).attr('id'), 
                      action: 'open', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    });
              refreshwalletlist();
              });


        $('#walletsbox').on('click', '.insertpass', function (){
        //$('.openbtn').click(function(){ 
            var vid=$(this).attr('id');
             $.post(
                    "wallet.php", 
                    { id: $(this).attr('id'), 
                      action: 'insertpass', },
                    function(data) { 
                                    $('#pass-'+vid).attr('value',data);
                                    $('#infobox').prepend('password inserted - click "unlock wallet" <br /><br />');
                                    });
              });

        $('#checkbtn').click(function(){ 
             $.post(
                    "program.php", 
                    { id: $(this).attr('id'), 
                      action: 'check', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    });
              });


        $('#refreshwallets').click(function(){ 
                    refreshwalletlist();
              });


});
