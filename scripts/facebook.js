//facebook video
hexo.extend.tag.register('facebook', function(args){
  
  var id = args[0];
  var html = '<div style="text-align: center">' +
  	'<div class="fb-video" data-show-text=true data-href="https://www.facebook.com/facebook/videos/' + id + '/" data-width="500" data-show-text="false">' +
  	'<div class="fb-xfbml-parse-ignore">' + 
  		'<blockquote cite="https://www.facebook.com/facebook/videos/' + id + '/">' +
      	'</blockquote>' + 
    '</div>' +
  '</div>' +
  '</div>'
  return html;
});
