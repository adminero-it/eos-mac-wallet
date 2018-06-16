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
function showhidechangeaccount(){
            if($('#findaccountfrm').is(':visible')){ $("#findaccountfrm").toggle(); }
            $("#chgaccountfrm").toggle( "slow", function() {
                                        // Animation complete.
                                                    });
}
function showhidefindaddress(){
            if($('#chgaccountfrm').is(':visible')){ $("#chgaccountfrm").toggle(); }
            $("#findaccountfrm").toggle( "slow", function() {
                                        // Animation complete.
                                                    });
}

function countvoted(){
    var zzz = $(".voted:checked").length;
    alert(zzz);    
}
function checkstoredaccount(){
         $.post(
                "vote.php", 
                { id: $(this).attr('id'), 
                  action: 'checkstoredaccount', },
                function(data) { 
                                if (data.status == 'OK') {
                                    $('#storedaccounttxt').html('stored EOS account:<br /><span style="font-size:1.5em;"><strong>'+data.eosaddress+'</strong></span>');
                                    $('#storedaccount').val(data.eosaddress);
                                    $('#accountinfo').attr('name',data.eosaddress);
                                    if($('#accountinfo').is(':visible')){ } else { $('#accountinfo').toggle(); }
                                    $('#voteinfobox').prepend("&bullet; found stored account<br /><br />");
                                } else {
                                    $('#storedaccount').val(data);
                                    $('#voteinfobox').prepend("&bullet; account not stored<br /><br />");
                                }
                                });    
}
function getproducers(){
             $.post(
                    "vote.php", 
                    { id: $(this).attr('id'),
                      action: 'getproducers', },
                    function(data) { 
                                    $('#producers').html(data);
                                    $('#voteinfobox').prepend("&bullet; producers list loaded<br /><br />");
                                    });
}

$(document).ready(function() {
    
    refreshwalletlist();
    checkstoredaccount();
    getproducers();

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

        $('#producers').on('click', '.voted', function (){
        //$(".voted").click(function () {
            //countvoted();
            var zzz = $(".voted:checked").length;
            var ccvoted = zzz;
            var ccremain = 30 - zzz;
            $('#cvoted').html(ccvoted);
            $('#cremainig').html(ccremain);
            var what = $(this).attr('name')+',';
            
            if ($(this).is(':checked'))  { $('#bpselected').text( $('#bpselected').text() +what); }
            if (!$(this).is(':checked')) { var myselected=$('#bpselected').text(); myselected = myselected.replace(what,''); $('#bpselected').text(myselected); }
            if (ccvoted == 0){ 
                $('#votebtn').html('VOTE:');
                if($('#votereminder').is(':visible')){ $("#votereminder").toggle(); }
            }
            else { 
                $('#votebtn').html('<input id="votebtngenerated" class="bt/n btn-default" type="button" value="VOTE:" style="vertical-align:text-bottom;" />'); 
                if($('#votereminder').is(':visible')){ } else { $("#votereminder").toggle(); }
            }
        });

        $("#showcreate").click(function () {
            showhidecreate();
        });
        $("#changeaccount").click(function () {
            showhidechangeaccount();
        });
        $("#findaddress").click(function () {
            showhidefindaddress();
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
            var iddval = '#impass-'+$(this);
             $.post(
                    "wallet.php", 
                    { id: $(this).attr('id'),
                      impass: $(idd).val(),
                      action: 'import', },
                    function(data) { 
                                    $('#infobox').prepend(data+'<br /><br />');
                                    $(iddval).attr('value','');
                                    $(iddval).val('');
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

        $('#refreshwallets').click(function(){ 
                    refreshwalletlist();
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

        $('#accountinfo').click(function(){ 
             $.post(
                    "vote.php", 
                    { id: $(this).attr('id'), 
                      address: $('#accountinfo').attr('name'),
                      action: 'accountinfo', },
                    function(data) { 
                                    $('#voteinfobox').prepend('INFO: '+data.account_name+' created: '+data.created+'<br />NET: '+data.total_resources.net_weight+' CPU: '+data.total_resources.cpu_weight+'<br />VOTED: '+data.voter_info.producers+'<br /><br />');
                                    });
              });

        $('#findstringbtn').click(function(){ 
             $.post(
                    "vote.php", 
                    { id: $(this).attr('id'), 
                      address: $('#findstring').val(),
                      action: 'findaddress', },
                    function(data) { 
                                    if (data.status == 'OK')        { 
                                                                        if($('#findaccountsavebtn').is(':visible')){ } else { $("#findaccountsavebtn").toggle(); }
                                                                        $('#voteinfobox').prepend(data.kom+'<br />EOS address: <strong>'+data.eosaddress+'</strong><br />ETH address: '+data.ethaddress+'<br />EOS pubkey: '+data.eospubkey+'<br />Tokens: '+data.tokens+'<br /><br />');
                                                                    } 
                                    else if (data.status == 'NOOK') {  
                                                                        if($('#findaccountsavebtn').is(':visible')){ $("#findaccountsavebtn").toggle(); }
                                                                        $('#voteinfobox').prepend(data.kom+'<br />EOS address: <strong>'+data.eosaddress+'</strong><br />ETH address: '+data.ethaddress+'<br />Tokens: '+data.tokens+'<br /><br />');
                                                                    }
                                    else                            {
                                                                        if($('#findaccountsavebtn').is(':visible')){ $("#findaccountsavebtn").toggle(); }
                                                                        $('#voteinfobox').prepend(data.kom+'<br /><br />');
                                                                    }
                                    });
              });

        $('#findaccountsavebtn').click(function(){ 
             $.post(
                    "vote.php", 
                    { id: $(this).attr('id'), 
                      address: $('#findstring').val(),
                      action: 'storefoundaccount', },
                    function(data) {    
                                        if (data.status == 'OK'){ checkstoredaccount(); }
                                        $('#voteinfobox').prepend(data.kom+'<br /><br />');
                                    });
              });

        $('#changeaddressbtn').click(function(){ 
             $.post(
                    "vote.php", 
                    { id: $(this).attr('id'), 
                      address: $('#newaddress').val(),
                      action: 'changeaddress', },
                    function(data) {    
                                        if (data.status == 'OK'){ checkstoredaccount(); if($('#chgaccountfrm').is(':visible')){ $("#chgaccountfrm").toggle(); }  }
                                        $('#voteinfobox').prepend(data.kom+'<br /><br />');
                                    });
              });

        $('#vote').on('click', '#votebtngenerated', function (){
        //$('#votebtngenerated').click(function(){ 
                var voter = $('#storedaccount').attr('value');

             $.post(
                    "vote.php", 
                    { id: $(this).attr('id'), 
                      bplist: $('#bpselected').text(),
                      voter: voter,
                      action: 'vote', },
                    function(data) {    
                                        if (data.status == 'OK'){   }
                                        $('#voteinfobox').prepend(data+'<br /><br />');
                                    });
              });


});
