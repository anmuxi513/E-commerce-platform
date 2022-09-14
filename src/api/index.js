import requests from "./ajax";
import mockRequest from './mockAjax'
///api/product/getBaseCategoryList

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});


export const reqGetBannerList = ()=>mockRequest.get('/banner');


export const reqFloorList = ()=>mockRequest.get("/floor");

//搜索模块  /api/list
//参数 
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/

export const reqGetSearchInfo = (params)=>requests({url:'/list', method:'post',data:params});