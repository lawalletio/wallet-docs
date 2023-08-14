# Internal Transaction

Creates an Internal Transaction

## START

Broadcasted by the user

```json
{
    "id": "START_EVENT_ID",                                     // Auto generated
    "pubkey": "SENDER_PUBKEY",                                  // Owner of the Wallet
    "kind": TRANSFER_KIND,                                      // Pending to be defined
    "content": {
        "destination": {
            "DESTINATION_PUBKEY_1": {                           // Destination Pubkey 1
                "TOKEN_1": AMOUNT1,                             // Token1:Amount to transfer
                "TOKEN_2": AMOUNT2,                             // Token2:Amount to transfer
            },
            "DESTINATION_PUBKEY_2": {                           // Destination Pubkey 2
                "TOKEN_3": AMOUNT3,                             // Token3:Amount to transfer
                "TOKEN_4": AMOUNT4,                             // Token4:Amount to transfer
            },
        }
    },
    "tags": [
        [
            ["t", "SUBKIND"],                                   // Subkind (pending to be defined)
            ["p", "SENDER_PUBKEY"],                             // Sender pubkey
            ["p", "DESTINATION_PUBKEY_1"],                      // Destination 1 pubkey
            ["p", "DESTINATION_PUBKEY_2"],                      // Destination 2 pubkey
            ["e", "TOKEN_1", "TOKEN_2", "TOKEN_3", "TOKEN_4"],  // Token event IDs
        ]
    ],
    ...
}
```

## FINISH

Broadcasted by the Ledger.
Blank if succeded, if fail look down for the error schema.

For fail content [look here](#fail-content).

```json
{
    "pubkey": "LEDGER_PUBKEY",                                 // Ledger pubkey
    "content": {
        // Blank if succeded
        //
        // If fail look down for the error schema
    },
    "tags": [
        [
            ["t", "SUBKIND", "TRANSFER_STATUS"],               // Subkind (pending to be defined), STATUS (succcess or fail)
            ["e", "START_EVENT_ID"],                           // Start Evenet ID
            ["p", "SENDER_PUBKEY"],                            // Pubkey must match with the one in the START event
            ["p", "DESTINATION_PUBKEY_1"],                     // Destination 1 pubkey
            ["p", "DESTINATION_PUBKEY_2"],                     // Destination 2 pubkey
            ["e", "TOKEN_1", "TOKEN_2", "TOKEN_3", "TOKEN_4"], // Token event IDs
        ]
    ],
    ...
}
```

### Fail Content

```json
{
    ...
    "content": {
        "pubkeys": ["DESTINATION_PUBKEY_1", "DESTINATION_PUBKEY_2"], // Invalid destination keys
        "tokens": ["TOKEN_3", "TOKEN_4"],                            // Invalid tokens
        "balance": {
            "TOKEN_1": "RESULTED_AMOUNT_1",                          // Balance not enough for those tokens
            "TOKEN_2": "RESULTED_AMOUNT_2"                           // Resulted amount should be negative
        },

    },
    ...
}
```
