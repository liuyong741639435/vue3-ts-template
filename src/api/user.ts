import request from "../ajax/index";

// 注册
export const apiRegoster = (data: USER.Register) =>
  request.post<any, API.Response<USER.RegisterRes>>(
    "/user/register",
    JSON.stringify(data)
  );
