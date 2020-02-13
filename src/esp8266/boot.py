import gc
import network
gc.collect()
wlan = network.WLAN(network.STA_IF) # create station interface
wlan.active(True)       # activate the interface
wlan.connect('ssid here', '')

from machine import Timer
import usocket as socket


def sendtcp(host, port):
    data = b'token here'
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((host, port))
    sock.send(data)
    sock.close()

tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=lambda t:sendtcp("ip address",5674))
