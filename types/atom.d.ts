import { NodeKey, AtomEffect, RecoilValue } from "recoil";

export interface AtomOptions<T> {
  key: NodeKey;
  default: RecoilValue<T> | Promise<T> | T;
  effects_UNSTABLE?: ReadonlyArray<AtomEffect<T>>;
  dangerouslyAllowMutability?: boolean;
}
