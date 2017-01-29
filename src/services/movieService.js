/*
* @Author: HYJ
* @Date:   2017-01-16 10:51:51
* @Last Modified by:   HYJ
* @Last Modified time: 2017-01-18 21:22:49
*/
import {hashHistory} from 'react-router'
import config from '../js/config.js'
export default {
	//电影列表
	getMovieListData(messages){
		return new Promise((resolve,reject) => {
			var url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}/api/getMovieListData?message=${messages}`
		fetch(url)
			.then((response => {
				if(response.ok){
					return response.json()
				}else{
					console.log("服务器正忙.....请稍后")
				}
			}))
			.then((data) => {

				resolve(JSON.parse(data))
			})
			.catch((err) => {
				reject(err)
			})
		})

	},
	//电影详情
	getMovieDetailData(id){
		return new Promise((resolve,reject) => {
			var url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}/api/getMovieDetailData?message=${id}`

		fetch(url)
			.then((response => {
				if(response.ok){
					return response.json()
				}else{
					console.log("服务器正忙.....请稍后")
				}
			}))
			.then((data) => {

				resolve(JSON.parse(data))
			})
			.catch((err) => {
				reject(err)
			})
		})
	},
	//电影搜索
	getmovieSearchData(message){
		return new Promise(function (resolve,reject) {

		// 如果你要传递多个参数，那么这个message就是对象的字符串，如果只有一个参数，那么这个message就是这个参数本身
		const url=`${config.HTTP}${config.SERVER_PATH}:${config.PORT}/api/searchMovieListData?message=${message}`
		console.log(url)
		fetch(url)
				.then((response) => {
						if (response.ok) {
								return response.json()
						} else {
								console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
						}
				})
				.then((data) => {
						resolve(JSON.parse(data))
				})
				.catch((err)=> {
						reject(err)
				})
			})
	}
}
