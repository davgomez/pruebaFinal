$(document).ready(function(){
		var subListas = $("li > ul");
		subListas.hide();
		$("h3 > a").each(function(){
			var _this = $(this);
			_this.click(function(){
				var sublista = _this.parent().siblings("ul");
				if(sublista.is(":visible")){
					sublista.hide();
				}else{
					sublista.show();
				}
				sublista.focus();
				
			});
		});
		
	});