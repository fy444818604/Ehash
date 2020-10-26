let layer;
layui.use('layer', () => {
	layer = layui.layer
})


const host = 'http://ehash.com/api'
let POST = (data={},url,callback) => {
	$.ajax({
		//请求方式
		type: "POST",
		headers:{
			token:window.localStorage.getItem('Authorization')
		},
		//请求的媒体类型
		contentType: "application/x-www-form-urlencoded;charset=UTF-8",
		//请求地址
		url: `${host}${url}`,
		dataType: "JSON",
		//数据，json字符串
		data: data,
		//请求成功
		success: function(result) {
			if(result.code == 200){
				callback(result)
			}else if(result.code == 403){
				layer.msg('请先登录')
				setTimeout(() => {
					window.location.href = 'auth.html?type=1'
				},2000)
			}else{
				layer.msg(result.msg)
			}
		},
		//请求失败，包含具体的错误信息
		error: function(e) {
			console.log(e.status);
			console.log(e.responseText);
			layer.msg(JSON.parse(e.responseText).msg)
		}
	});
}

let GET = (data={},url,callback) => {
	$.ajax({
		//请求方式
		type: "GET",
		headers:{
			token:window.localStorage.getItem('Authorization')
		},
		//请求的媒体类型
		contentType: "application/x-www-form-urlencoded;charset=UTF-8",
		//请求地址
		url: `${host}${url}`,
		dataType: "JSON",
		//数据，json字符串
		data: data,
		//请求成功
		success: function(result) {
			console.log(result)
			if(result.code == 200){
				callback(result)
			}else if(result.code == 403){
				layer.msg('请先登录')
				setTimeout(() => {
					window.location.href = 'auth.html?type=1'
				},2000)
			}else{
				layer.msg(result.msg)
			}
		},
		//请求失败，包含具体的错误信息
		error: function(e) {
			layer.msg(JSON.parse(e.responseText).msg)
		}
	});
}

var getUserjwt = function (jwt) {
    if(!jwt){
        return ;
    }
    //解析jwt令牌
    var jwtDecodeVal = jwt_decode(jwt);
    //打印
		return jwtDecodeVal
    // console.log(jwtDecodeVal)
    
}



