$(function () {
	var $window = $(window),
		oHeight = $window.height(),
		cWidth = oHeight * (750 / 1206),
		$starClass = $('.star'),
		$startId = $('.container'),
		$container = $('.container');
		$container.css('width', cWidth);
		$container.css('height', oHeight);
	     var value2 = 0;
	$('body').bind({   
	      mousewheel: function(){
	            if(event.wheelDelta > 0){
	            	value2 -=240;
	              	$starClass.rotate({
	                  	animateTo: value2
	            	});
	              
	              addAnimate(value2);
	            } 
	            else {
	              	value2 +=240;
	              	$starClass.rotate({
	              	    animateTo: value2
	              	});
	              
	              	addAnimate(value2);
	            
	        }
	    }
	});
	

	function addAnimate(value) {
  		var i = value / 240,
  			$java = $('.java'),
  			$frontend = $('.FrontEnd'),
  			$android = $('.android'),
  			$cpp = $('.c'),
  			$ios = $('.ios'),
  			$php = $('.php'),
  			$inf = $('.inf');

		  if(i<-6 || i>6) {
		  	i = i%7;
		  }
		  $('.tips').css("display","none");
		  switch(i) {
			  	case 0: $frontend.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
				    	break;
				case 1: $android.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    		break;
			    	case 2: $cpp.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			break;
		    		case 3: $ios.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			break;
		    		case 4: $php.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			break;
		    		case 5: $java.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			break;
		    		case 6: $inf.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			break;	
		    		case -6: $android.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			break;
		    		case -5: $cpp.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			 break;
		    		case -4: $ios.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			 break;
		    		case -3: $php.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			 break;
		    		case -2: $java.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			break;	  
		    		case -1: $inf.css('display','block')
				    		 .siblings('div')
				    		 .css('display','none');
		    			break;		  
		  }
	}
	
});		