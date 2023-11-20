
// Highlight current nav item
var hasCurrent = false;
$('#main-nav > li').each(
	function () 
	{
		var upUrl = window.location.href.toUpperCase();
		var htmlTxt =  $(this).text().trim().toUpperCase();
		//高亮跟頁面同名的
		if(upUrl.indexOf(htmlTxt) != -1){
			$(this).addClass('current-menu-item current_page_item');
			hasCurrent = true;
		}
		else if ((upUrl.indexOf("ARCHIVES") != -1) && htmlTxt == "ARTICLE") {
			$(this).addClass('current-menu-item current_page_item');
			hasCurrent = true;
		}
		else if ((upUrl.indexOf("CATEGORIES") != -1) && htmlTxt == "CATEGORY")  {
			$(this).addClass('current-menu-item current_page_item');
			hasCurrent = true;
		} else if ((upUrl.indexOf("TRAVELOGUE") != -1) && htmlTxt == "travelogue") {
			$(this).addClass('current-menu-item current_page_item');
			hasCurrent = true;
		}
		else {
			$(this).removeClass('current-menu-item current_page_item');
		}
	}
);

if (!hasCurrent) {
	$('#main-nav > li:first').addClass('current-menu-item current_page_item');
}



// article toc
var toc = document.getElementById('toc')

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = 194+25;

	function scrollcatelogHandler(e) {
		 var event = e || window.event,
		     target = event.target || event.srcElement;
		 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		 if (scrollTop > tocPosition) {
		     toc.classList.add("toc-fixed");
		 } else {
		     toc.classList.remove("toc-fixed");
		 }
	}
}


$('#main-navigation').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    } else {
      $('#main-navigation').addClass('main-navigation-open');
    }
  });

$('#content').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    }
  });