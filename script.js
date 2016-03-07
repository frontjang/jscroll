<script>
var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'http://code.jquery.com/jquery-2.2.1.min.js';
    

var script2= document.createElement('script');
script2.type= 'text/javascript';
script2.src= 'https://raw.githubusercontent.com/frontjang/jscroll/0d8fd9a892ca33d009053fbe7ebf36d70c5400f5/jquery.jscroll.js';
head.appendChild(script);
head.appendChild(script2);


var currentPage=1;

var returnLink=function(){
currentPage++;
return "http://news.naver.com/main/search/search.nhn?query=nfv&st=news.all&q_enc=EUC-KR&r_enc=UTF-8&r_format=xml&rp=none&sm=all.basic&ic=all&ie=MS949&so=datetime.dsc&detail=1&pd=1&start=26&display=25&page="+currentPage;
}


var addLink=function(){
$(".srch_result_area").last().append("<a id=iadded href="+returnLink()+">next</a>");
}
addLink();





$(".srch_result_area").jscroll({
padding: 200, 
autoTrigger: true,
debug: true,
nextSelector: "#iadded",
contentSelector: ".srch_result_area",
pagingFunction : returnLink
});

</script>
