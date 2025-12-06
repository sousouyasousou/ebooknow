export enum VerificationStatus {
  IDLE = 'IDLE',
  VERIFYING = 'VERIFYING',
  VERIFIED = 'VERIFIED'
}

export interface VerificationState {
  status: VerificationStatus;
  timestamp: number | null;
}
