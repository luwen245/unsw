<?php

// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2011 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: luofei614 <weibo.com/luofei614>
// +----------------------------------------------------------------------
// | 修改者: anuo (本权限类在原3.2.3的基础上修改过来的)
// +----------------------------------------------------------------------

namespace fast;

class Language
{
    //获得访客浏览器类型
    function Get_Browser(){
        if(!empty($_SERVER['HTTP_USER_AGENT'])){
            $br = $_SERVER['HTTP_USER_AGENT'];
            if (preg_match('/MSIE/i',$br)) {
                $br = 'MSIE';
            }
            elseif (preg_match('/Firefox/i',$br)) {
                $br = 'Firefox';
            }
            elseif (preg_match('/Chrome/i',$br)) {
                $br = 'Chrome';
            }
            elseif (preg_match('/Safari/i',$br)) {
                $br = 'Safari';
            }
            elseif (preg_match('/Opera/i',$br)) {
                $br = 'Opera';
            }else {
                $br = 'Other';
            }
            return $br;
        }
        else{
            return "unknow";
        }
    }

    ////获得访客浏览器语言
    function Get_Lang(){
        if(!empty($_SERVER['HTTP_ACCEPT_LANGUAGE'])){
            $lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
            $lang = substr($lang,0,5);
            if(preg_match("/zh-cn/i",$lang,$matches)){
                $lang = strtolower($matches[0]);
            }
            elseif(preg_match("/zh/i",$lang,$matches)){
                $lang = strtolower($matches[0]);
            } else {
                $lang = "English";
            }
            return $lang;
        } else{
            return "en";
        }
    }

    function getPreferredLanguage() {
        $langs = array();
        if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
            preg_match_all('/([a-z]{1,8}(-[a-z]{1,8})?)s*(;s*qs*=s*(1|0.[0-9]+))?/i',
                $_SERVER['HTTP_ACCEPT_LANGUAGE'], $lang_parse);
            if (count($lang_parse[1]))
            {
                $langs = array_combine($lang_parse[1], $lang_parse[4]);
                foreach ($langs as $lang => $val) {
                    if ($val === '') $langs[$lang] = 1;
                }
                arsort($langs, SORT_NUMERIC);
            }
        }
        $lang = '';
        foreach ($langs as $lang => $val) { break; }
        //区分简体和繁体
        if($lang){
            if (preg_match("/zh-c/i", $lang)){
                $lang='zh_CN';
            } else if (preg_match("/zh/i", $lang)){
                $lang='zh_TW';
            } else {
                if(strpos($lang, '-') == false){
                    $lang = $lang;
                }else{
                    $lang = substr($lang,0,strpos($lang, '-'));
                }
            }
        }else{
            $lang = 'en';
        }
        return $lang;
    }

    ////获取访客操作系统
    function Get_Os(){
        if(!empty($_SERVER['HTTP_USER_AGENT'])){
            $OS = $_SERVER['HTTP_USER_AGENT'];
            if (preg_match('/win/i',$OS)) {
                $OS = 'Windows';
            }
            elseif (preg_match('/mac/i',$OS)) {
                $OS = 'MAC';
            }
            elseif (preg_match('/linux/i',$OS)) {
                $OS = 'Linux';
            }
            elseif (preg_match('/unix/i',$OS)) {
                $OS = 'Unix';
            }
            elseif (preg_match('/bsd/i',$OS)) {
                $OS = 'BSD';
            }
            else {
                $OS = 'Other';
            }
            return $OS;
        }
        else{
            return "unknow";
        }
    }

    ////获得访客真实ip
    function Get_Ip_Addr(){
        if(!empty($_SERVER["HTTP_CLIENT_IP"])){
            $ip = $_SERVER["HTTP_CLIENT_IP"];
        }
        if(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){ //获取代理ip
            $ips = explode(',',$_SERVER['HTTP_X_FORWARDED_FOR']);
        }
        if($ip){
            $ips = array_unshift($ips,$ip);
        }
        $count = count($ips);
        for($i=0;$i<$count;$i++){
            if(!preg_match("/^(10|172\.16|192\.168)\./i",$ips[$i])){//排除局域网ip
                $ip = $ips[$i];
                break;
            }
        }
        $tip = empty($_SERVER['REMOTE_ADDR']) ? $ip : $_SERVER['REMOTE_ADDR'];
        if($tip=="127.0.0.1"){ //获得本地真实IP
            return self::get_onlineip();
        }
        else{
            return $tip;
        }
    }

    ////获得本地真实IP
    function get_onlineip() {
        $ip_json = @file_get_contents("http://ip.taobao.com/service/getIpInfo.php?ip=myip");
        $ip_arr=json_decode(stripslashes($ip_json),1);
        if($ip_arr['code']==0)
        {
            return $ip_arr['data']['ip'];
        }

    }

    ////根据ip获得访客所在地地名
    function Get_Ip_From($ip=''){
        if(empty($ip)){
            $ip = self::Getip();
        }
        $ip_json=@file_get_contents("http://ip.taobao.com/service/getIpInfo.php?ip=".$ip);//根据taobao ip
        $ip_arr=json_decode(stripslashes($ip_json),1);
        if($ip_arr['code']==0)
        {
            return $ip_arr;
        }
        else
        {
            return false;
        }
    }

}