#!/bin/bash

#MQTT_HOST=localhost
MQTT_HOST=192.168.178.174
RAW_TOPIC=rawdata

RANDOM_TIME="1:1,1"

NUMBER_EVENTS=22
NUMBER_HEATS=4
NUMBER_LANES=8

send_raw_message(){
    echo $1
    mosquitto_pub -h $MQTT_HOST -t $RAW_TOPIC -m "$1"
}

create_random_time() {
    minutes=$((RANDOM%2))
    seconds=$((RANDOM%60))
    ms=$((RANDOM%100))
    RANDOM_TIME=${minutes}:${seconds},${ms}
}

send_raw_message clock
send_raw_message stop
sleep 1
create_random_time
     
send_raw_message "header 0 0"
sleep 1

send_raw_message "header 1 1"
sleep 2

send_raw_message start
sleep 3

# one lap

send_raw_message "lane 3 00:28,77 0"
sleep 5

# end

send_raw_message "lane 3 00:28,99 1"
sleep 1
send_raw_message "lane 4 00:29,23 0"
sleep 0
send_raw_message "lane 4 00:29,22 8"
sleep 0
send_raw_message "lane 2 00:30,99 3"
sleep 1
send_raw_message "lane 5 00:31,22 4"
sleep 0
send_raw_message "lane 6 00:31,99 5"
sleep 1
send_raw_message "lane 7 00:33,99 6"
sleep 1
send_raw_message "lane 1 00:35,99 0"
sleep 2
send_raw_message "lane 8 00:36,10 2"
sleep 2


send_raw_message stop

sleep 5

send_raw_message start

sleep 10

send_raw_message "header 1 2"
sleep 5
send_raw_message "lane 3 00:22,99 1"
sleep 1
send_raw_message "lane 4 00:23,23 0"
sleep 0
send_raw_message "lane 4 00:24,22 8"
sleep 0

exit 0

