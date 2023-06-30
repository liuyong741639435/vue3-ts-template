declare namespace API {
  // 常用的的泛型  与后端返回数据结构相关
  interface Response<T = any> {
    code: 0 | 1;
    data: T | null;
    msg: string;
  }
}
