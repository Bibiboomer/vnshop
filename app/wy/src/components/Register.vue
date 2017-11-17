<template>
  <div id="appss">
        <ul>
            <li>2</li>
        </ul>
  </div>
</template>

<script>
  export default {
    
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
#app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    p{
        margin-top:0px;
        margin-bottom:0px;
    }
    nav.navbar{
        background-color: #333;
        height:36px;
        margin-bottom:0px;
        min-height:unset;

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

}

</style>
