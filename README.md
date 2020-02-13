<h1 align="center">Welcome to acMonitor 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> monitor if ac power is cut off or is it back.

## Install

```sh
yarn
```

## Installing Micropython

```sh
esptool.py --port /dev/ttyUSB0 erase_flash
esptool.py --port /dev/ttyUSB0 --baud 460800 write_flash --flash_size=detect 0 your_micropython_file_here
```

## Usage

```sh
yarn start
```

## Putting boot.py in ESP8266

You need to install adafruit-ampy

```sh
adafruit-ampy
```

Putting boot.py file to esp8266

```sh
ampy -p /dev/ttyUSB0 put boot.py
```

## Author

👤 **Hun Vikran**

- Github: [@tsuyoshi007](https://github.com/tsuyoshi007)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

```

```
