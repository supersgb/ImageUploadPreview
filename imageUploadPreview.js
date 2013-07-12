/*
 *  Image Upload Preview - JQuery Plugin for preview uploaded image
 *  Use in IE8+,Chrome,Firefox
 *
 *	Copyright 2008-2013 Vince, all right reserved
 *
 *  Version:  1.1.2
 *
 */
(function($,window,document){
	
	$.fn.Preview = function(options){

		var elememt = this[0];

		var setting = {
			target: null,
			width: 0,
			height: 0,
		};

		$.extend(setting,options);

		function update(){
			var docObj= elememt;
			var imgObjPreview=document.getElementById(setting.target);
		    if(docObj.files &&    docObj.files[0]){
		            //
		            imgObjPreview.style.display = 'block';
		            imgObjPreview.style.width = setting.width+'px';
		            imgObjPreview.style.height = setting.height+'px';                    

					imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);

		    }else{
		            //IE8
		            docObj.select();
					//IE9
					docObj.blur();
		            var imgSrc = document.selection.createRange().text;
		            var localImagId = imgObjPreview.parentNode;
		            //
		            localImagId.style.width = setting.width+'px';
		            localImagId.style.height = setting.height+'px';
		            //
					try{
		                localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
		                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
		            }catch(e){
		                    alert("Not Image!");
		                    return false;
		            }
		            imgObjPreview.style.display = 'none';
		            document.selection.empty();
		    }
		}

		$(elememt).on('change',function(){
			update();
		});

	}


})(jQuery,window,document);
