# totp-generator
A simple TOTP generator to be used as 2FA .

# Implementation

T0 => Start time
T => Current UNIX-time
TB => Time bucket

DIFF = (T-T0)/TB
TOTP = HASH(DIFF) % 1000
