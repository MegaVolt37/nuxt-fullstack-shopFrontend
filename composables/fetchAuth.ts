import { FetchOptions } from "ohmyfetch";
import { storeError } from '~/store/Error';
export const fetchAuth = (url: string, opts?: FetchOptions) => {
  const config = useRuntimeConfig()
  const err = storeError()
  const baseUrl = config.public.baseURL
  const token = useCookie('token');
  const headers: HeadersInit = {
    ...(opts?.headers || {}),
    ...(token && { Authorization: `Bearer ${token.value}` }),
  };
  return $fetch(baseUrl+url, { ...opts, headers })
  .catch((e) => {
    err.setError(e)
    setTimeout(() => {
      err.setError("")
    }, 3000);
  });
};