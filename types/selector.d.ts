import { GetRecoilValue, RecoilValue } from "recoil";

export interface ReadOnlySelectorOptions<T> {
  key: string;
  get: (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T;
  dangerouslyAllowMutability?: boolean;
}
