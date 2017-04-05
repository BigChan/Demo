//加载文档
$(document).ready(function() {
	//监听Windows的加载load事件
	$(window).on("load", function() {
		imgLocation();
		//模拟网络获取数据的图片。
		var dataImg = {
			"data": [{
				"src": "wt1.jpg"
			}, {
				"src": "wt2.jpg"
			}, {
				"src": "wt3.jpg"
			}, {
				"src": "wt4.jpg"
			}, {
				"src": "wt5.jpg"
			},{
				"src": "wt6.jpg"
			}, {
				"src": "wt7.jpg"
			}, {
				"src": "wt8.jpg"
			}, {
				"src": "wt9.jpg"
			}, {
				"src": "wt10.jpg"
			},
					 {'src':'wt11.jpg'}
		   ]
		};
		//监听鼠标的滚动事件
		window.onscroll = function() {
			//做判断 满足条件加载
			if(scrollside()) {
				//遍历dataImg集合
				$.each(dataImg.data, function(index, value) {
					//通过jquery动态创建div和img。
					var box = $("<div>").addClass("box").appendTo($("#container")); //创建box对象 追加到container中
					var content = $("<div>").addClass("content").appendTo(box); //创建content对象，加载在box中
					//					console.log("./img/"+$(value).attr("src"));
					$("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content); //加载img
				});
				imgLocation();
			}

		};
		//监听事件，设备高度变化时，重新排列
		window.onresize = function() {
			imgLocation();
		}
	});
});

//以最后一张图片的一半的时候加载数据
function scrollside() {
	var box = $(".box");
	//获取到当前所要的高度
	var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
	//满足加载，不满足不加载
	var documentHeight = $(window).height(); //当前容器高度
	var scrollHeight = $(window).scrollTop(); //鼠标滚动的高度
	return(lastboxHeight < scrollHeight + documentHeight) ? true : false; //当前滚动的高度，最后的高度<滚动的距离+文档的高度 滚动，否则不加载

}

//确定图片加载的位置
function imgLocation() {
	var box = $(".box"); //创建盒子对象
	var boxWidth = box.eq(0).width(); //确定盒子宽度，通过eq获取第一张图片的宽度
	var num = Math.floor($(window).width() / boxWidth); //确定一排的摆放数量，（通过Windows获取当前设备宽度/当前小方块的个数=摆放的个数）
	var boxArr = []; //定义数组，用来承载盒子高度，

	//确定图片所要放置的位置
	box.each(function(index, value) {
		//index确定哪一个位置  value确定当前元素是哪一个元素	
		//遍历之后,获取每一个盒子的高度
		var boxHeight = box.eq(index).height();
		if(index < num) {
			boxArr[index] = boxHeight;
			$(value).css({
				"position": "absolute", //绝对布局
				"top": 0, //确定顶端距离，即最小图片的高度
				"left": index * boxWidth //确定左边的距离
			});
		} else {
			var minboxHeight = Math.min.apply(null, boxArr); //获取到盒子中最小的高度
			console.log(minboxHeight);
			var minboxIndex = $.inArray(minboxHeight, boxArr) //获取最小图片的位置
				//获取jquery对象,通过css操作,设置图片的位置
			$(value).css({
				"position": "absolute", //绝对布局
				"top": minboxHeight, //确定顶端距离，即最小图片的高度
				"left": box.eq(minboxIndex).position().left //确定左边的距离
			});
			//重新计算那一列图片位置：当前图片高度+下面第二张图片的高度
			boxArr[minboxIndex] += box.eq(index).height();
		}
	});
}