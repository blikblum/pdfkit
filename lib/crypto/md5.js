import { md5 } from '@noble/hashes/legacy';
import { bytesToHex } from '@noble/hashes/utils';

export function md5Hash(data) {
  return md5.create().update(data).digest();
}

export function md5Hex(data) {
  return bytesToHex(md5Hash(data));
}
