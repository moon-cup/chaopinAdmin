import * as API from './index'

export default{

	getLogin:params=>{//管理员登录
		return API.POST('/api/v1/auth/manager_login',params)
	},

	//用户相关
	getUsers:params=>{//获取用户
		return API.GET('/api/v1/admin/users',params)
	},
	getUser:params=>{//修改用户信息
		return API.POST('/api/v1/admin/users',params)
	},
	getAddress:params=>{//获取用户收货地址
		return API.GET('/api/v1/admin/addresses',params)
	},


	//商品相关 get(获取所有) post(增) put(改) delete(删))
	getPros:params=>{//获取商品列表
		return API.GET('/api/v1/admin/products',params)
	},
	getPro:params=>{//修改商品
		return API.POST('/api/v1/admin/products',params)
	},

	getProLists:params=>{//商品分类列表
		return API.GET('/api/v1/admin/product_categories',params)
	},
	getProList:params=>{//修改商品分类
		return API.POST('/api/v1/admin/product_categories',params)
	},

	//订单相关
	getOrders:params=>{//获取订单列表
		return API.GET('/api/v1/admin/orders',params)
	},
	getOrder:params=>{//修改订单列表
		return API.POST('/api/v1/admin/orders',params)
	},
}
