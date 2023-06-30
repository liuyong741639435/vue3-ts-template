import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    method: "post",
    url: "/api/user/register",
    statusCode: 200,
    response: () => {
      return {
        code: 0,
        msg: '',
        data: { }
      };
    },
  },
] as MockMethod[]