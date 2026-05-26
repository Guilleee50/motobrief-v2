---
title: "Traffic analysis of Yamaha MyRide: what data does your bike send to Yamaha's servers"
description: "We decompiled the Yamaha MyRide Android app, intercepted its traffic with mitmproxy and mapped every endpoint it calls. Here's what we found."
publishedAt: 2025-06-01
lang: en
tags: ["android", "traffic-analysis", "yamaha", "privacy", "mitmproxy"]
draft: true
target: "Yamaha MyRide 3.2.1 (Android)"
disclosureStatus: unreported
---

> **Status:** Draft — research in progress.

## Summary

Yamaha MyRide is Yamaha's official app for connecting smartphones to motorcycles equipped with Y-Connect. In this analysis we intercepted the HTTPS traffic between the app and Yamaha's servers to identify what personal and telemetry data is transmitted.

## Methodology

The analysis was conducted exclusively client-side (no attacks on any server). Tools used:

- **mitmproxy 10.x** — SSL interception proxy
- **jadx 1.5.x** — DEX → Java decompiler
- **apktool** — resource and manifest extraction
- **Android emulator** (API 33) with custom CA certificate

```bash
# Install mitmproxy certificate as system CA (emulator)
adb root
adb remount
adb push ~/.mitmproxy/mitmproxy-ca-cert.cer /system/etc/security/cacerts/
```

## Preliminary findings

*[Section pending completion with real data]*

Endpoints identified so far:

| Endpoint | Method | Data sent |
|----------|--------|-----------|
| `api.yamaha-motor.com/v2/telemetry` | POST | pending |
| `api.yamaha-motor.com/v2/user/location` | POST | pending |

## Next steps

- [ ] SSL pinning bypass with Frida
- [ ] Analysis of decompiled APK (`TelemetryManager` class)
- [ ] Full endpoint map

## References

- [OWASP MASTG](https://mas.owasp.org/MASTG/) — Mobile Application Security Testing Guide
- [mitmproxy docs](https://docs.mitmproxy.org/)
