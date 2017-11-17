<template>
    <div id="Home_nav">
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 left"><p class="navbar-text"><a herf="#">好的生活，没那么贵</a></p></div>
                    <div class="col-sm-6 right">
                        <ul class="nav nav-pills">
                            <li role="presentation"><a href="login">登录</a></li>
                            <li role="presentation"><a href="register">注册</a></li>
                            <li role="presentation"><a href="#">购物车</a></li>
                            <li role="presentation"><a href="#">我的订单</a></li>
                            <li role="presentation"><a href="#">客户服务</a></li>
                            <li role="presentation"><a href="#">下载APP</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <section class="ct-logo-ser">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                    <ul>
                        <li><a><img src="../../assets/images/icon.png" /></a></li>
                        <li>
                            <input type="text">
                            <i></i>
                        </li>
                        <li><a></a></li>
                        
                    </ul>
                        
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
  export default {
    name: 'Home_nav'
  }
</script>

<style scoped lang = "less">
a{
    color:#ccc;
    background:unset;
    line-height: 1.5;
    font-family: "Microsoft Yahei","微软雅黑",verdana;
    font-size:12px;
    line-height:36px;
    
}
a:hover,a:active{
    text-decoration: none;
    cursor:pointer;
    color:#fff;
}

li{
    list-style:none;
}

    
nav.navbar{
    background-color: #333;
    height:36px;
    margin-bottom:0px;
    min-height:unset;
        p{
            margin-top:0px;
            margin-bottom:0px;
        }

        ul.nav>li>a{
            padding-top:0;
            padding-bottom:0;
        }
        ul.nav>li>a:hover,ul.nav>li>a:active{
            background-color:unset;
            color:#fff;
            text-decoration: none;
        }
}
section.ct-logo-ser{
    li{
        float:left;
    }
    li>a{
        width:180px;
        height:60px;
        display: inline-block;
    }
}



</style>
