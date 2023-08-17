import { GasPrice, StdFee } from '@cosmjs/stargate';

// Bech32 Prefix
export const BECH32_PREFIX = 'dydx';

// Broadcast Defaults
export const BROADCAST_POLL_INTERVAL_MS: number = 300;
export const BROADCAST_TIMEOUT_MS: number = 8_000;

// API Defaults
export const API_TIMEOUT_DEFAULT_MS: number = 5_000;

// Default placeholder USDC denom (same as protocol).
// Precomputed USDC IBC denom.
export const USDC_DENOM = 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5';
export const DYDX_DENOM = 'dv4tnt';

// Gas
// TODO(DEC-1532): Determine why `MsgTransfer` messages return an innaccurate `GasUsed` value
// from `/simulate`. 2x is quite high for a gas multipler (more standard is 1.1, or 1.3).
export const GAS_MULTIPLIER: number = 1.4;
// TODO(CORE-190): Replace 'usdc' with IBC denom after IBC denom is supported in '@cosmjs/stargate'.
export const GAS_PRICE: GasPrice = GasPrice.fromString('0.1usdc');
export const GAS_PRICE_DYDX_DENOM: GasPrice = GasPrice.fromString('0.1dv4tnt');

export const ZERO_FEE: StdFee = {
  amount: [],
  gas: '0',
};

// Validation
export const MAX_UINT_32 = 4_294_967_295;
export const MAX_SUBACCOUNT_NUMBER = 127;

export const DEFAULT_SEQUENCE: number = 0;

export const SERIALIZED_INT_ZERO: Uint8Array = Uint8Array.from([0x02]);