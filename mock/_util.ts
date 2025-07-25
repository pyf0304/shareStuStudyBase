// Interface data format used to return a unified format
export function resultSuccess<T = Recordable>(data: T, { message = 'ok' } = {}) {
  return {
    code: 200,
    data,
    message,
    type: 'success',
  };
}
export function resultPageSuccess<T = any>(
  page: number,
  pageSize: number,
  list: T[],
  { message = 'ok' } = {},
) {
  const pageData = pagination(page, pageSize, list);

  return {
    ...resultSuccess({
      list: pageData,
      pagination: {
        page: ~~page,
        size: ~~pageSize,
        total: list.length,
      },
    }),
    message,
  };
}
export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}
export function pagination<T = any>(page: number, pageSize: number, array: T[]): T[] {
  const offset = (page - 1) * Number(pageSize);
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize));
  return ret;
}
export interface requestParams {
  method: string;
  body: any;
  headers?: { authorization?: string };
  query: any;
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization;
}
