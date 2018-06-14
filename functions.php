<?php

function clear($str) 
{
    $str = str_replace('[31m', '', $str); 
    $str = str_replace('[32m', '', $str); 
    $str = str_replace('[33m', '', $str); 
    $str = str_replace('[0m', '', $str); 
    return $str;
}


?>