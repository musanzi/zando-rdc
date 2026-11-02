# Estimate WhatsApp contact interest with HyperLogLog

Zando measures interest in supplier profiles through WhatsApp contact clicks. Use Redis HyperLogLog to estimate distinct browsers per supplier and reporting period, using random anonymous browser identifiers. This accepts approximate counts in exchange for compact aggregate storage, without a customer request or deal register.

Store daily aggregates for 12 months and combine the relevant daily sets for today, the last 7 days, and the last 30 days. Do not sum daily estimates to produce a period's distinct count, because one browser may appear on multiple days. Redis already exists in the starter, but these analytics need their own storage lifecycle rather than the short-lived application cache.

Changing browsers or clearing browser storage can count the same person again. The report describes estimated contact clicks by distinct browsers, not identified people, sent messages, or completed transactions. Administrators can view all supplier reports; ambassadors can view only their own suppliers' reports. Measurement failures must not prevent the WhatsApp contact action.

The [Redis HyperLogLog documentation](https://redis.io/docs/latest/develop/data-types/probabilistic/hyperloglogs/) describes the approximation and set-union behavior.
