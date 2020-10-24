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
			}
		},
		//请求失败，包含具体的错误信息
		error: function(e) {
			console.log(e.status);
			console.log(e.responseText);
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
			if(result.code == 200){
				callback(result)
			}
		},
		//请求失败，包含具体的错误信息
		error: function(e) {
			console.log(e.status);
			console.log(e.responseText);
		}
	});
}


