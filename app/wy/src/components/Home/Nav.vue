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
 
        <section id="ct-logo-ser">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logo_ser-box">

                            <div>
                                <a class="search-btn" href="cart.html">
                                    <i class="icon-cart"></i>
                                    <i id="cart-num">0</i>
                                </a>
                                <div class="search-input-wrap hidden-xs">
                                    <div class="input-icon ">
                                        <i class="glass"></i>
                                    </div>
                                    <input type="text" maxlength="100" id="search-input" placeholder="serach...">
                                </div>
                            </div> 

                        </div>
                </div>
                </div>
            </div>
        </section>

        <section id="hot-goods">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <el-table :data = "tableData">
                            <el-table-column 
                                align = "center"
                                prop ="cat_name" label ="">
                            
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </section>

        
    </div>
</template>

<script>

export default {
    name: 'Home_nav' ,
    data() {
        return {
            tableData: []
        };
    },
    methods: {
        getGoods(){
            let _this = this;
            _this.$axios.get("http://h6.duchengjiu.top/shop/api_cat.php")
            .then( res => {
                console.log(res);
                let data = res.data.data;
                _this.tableData = data;
                console.log(data);
                // for( var i = 0 ; i < data.length ; i++){
                //     //DOM操作
                //     // $("#js-list-item>ul").append('<li><a href="list.html?cat_id=' +data.data[i].cat_id+ '">' + data.data[i].cat_name +  '</a></li>');
                // }


              
                
            })
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted() {
        this.getGoods();
        
    }
}


</script>

<style lang = "less">

.el-table__row {
    display: inline-block!important;
    min-width: 40px!important;
}

// 混合
.navbox-shadow ( @shadow:0 0 3px 1px rgba(51,51,51,0.1)){
    -webkit-box-shadow: @shadow;
    -moz-box-shadow: @shadow;
    box-shadow: @shadow;
}

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
#ct-logo-ser{
    .logo_ser-box{
        height:204px;
        background:url(../../assets/images/logo.gif) no-repeat;
        background-position: center 0px;

        .logo_ser-box>div{
            position: relative;
            top: 50px;  
        }
        .search-btn{
            position:relative;
            top: 30px;
            left: 250px;
            display: inline-block;
            height:10px;
            background-color:red;

            .icon-cart{
                width: 23px;
                height: 23px;
                position: absolute;
                top: 15px;
                left: 249px;
                background: url(../../assets/images/cart.png) no-repeat;
            }
            #cart-num{
                text-align: center;
                color: #fff;
                position: absolute;
                top: 0px;
                left: 264px;
                width: 19px;
                height: 27px;
                background: url(../../assets/images/icon-normal.png) no-repeat;
                background-position: 0px -258px;
            }
        }

        .search-input-wrap{
            text-align: right;
           

            i.glass{
                position: absolute;
                right:10px;
                top: 45px;
                width: 35px;
                height: 30px;
                background: url(../../assets/images/logo.png) no-repeat;
                background-position: 8px -108px;
                background-size: 180px;
            }
            input{
                border: none;
                border-bottom: 1px solid #D8CEBC;
                border-radius: 0;
                font-size: 12px;
                line-height: 23px;
                color: #333;
                width: 240px;
                margin-top: 30px;
                margin-right: 15px;
                height: 23px;
            }
           
        }
    }
}



</style>
