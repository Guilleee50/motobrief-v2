---
title: "Análisis de tráfico en Yamaha MyRide: qué datos envía tu moto a los servidores"
description: "Decompilamos la app Yamaha MyRide para Android, interceptamos su tráfico con mitmproxy y mapeamos los endpoints a los que envía datos. Esto es lo que encontramos."
publishedAt: 2025-06-01
lang: es
tags: ["android", "traffic-analysis", "yamaha", "privacy", "mitmproxy"]
draft: true
target: "Yamaha MyRide 3.2.1 (Android)"
disclosureStatus: unreported
---

> **Estado:** Borrador — investigación en progreso.

## Resumen

Yamaha MyRide es la aplicación oficial de Yamaha para conectar smartphones con motocicletas equipadas con Y-Connect. En este análisis interceptamos el tráfico HTTPS entre la app y los servidores de Yamaha para identificar qué datos personales y de telemetría se transmiten.

## Metodología

El análisis se realizó exclusivamente del lado del cliente (sin atacar ningún servidor). Las herramientas utilizadas:

- **mitmproxy 10.x** — proxy de intercepción SSL
- **jadx 1.5.x** — decompilador DEX → Java
- **apktool** — extracción de recursos y manifesto
- **Android emulador** (API 33) con certificado de CA personalizado

```bash
# Instalar certificado mitmproxy como CA del sistema (emulador)
adb root
adb remount
adb push ~/.mitmproxy/mitmproxy-ca-cert.cer /system/etc/security/cacerts/
```

## Hallazgos preliminares

*[Sección pendiente de completar con datos reales]*

Los endpoints identificados hasta ahora:

| Endpoint | Método | Datos enviados |
|----------|--------|----------------|
| `api.yamaha-motor.com/v2/telemetry` | POST | pendiente |
| `api.yamaha-motor.com/v2/user/location` | POST | pendiente |

## Siguientes pasos

- [ ] Bypass de SSL pinning con Frida
- [ ] Análisis de la APK decompilada (clase `TelemetryManager`)
- [ ] Mapa completo de endpoints

## Referencias

- [OWASP MASTG](https://mas.owasp.org/MASTG/) — Mobile Application Security Testing Guide
- [mitmproxy docs](https://docs.mitmproxy.org/)
