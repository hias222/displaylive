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

# laps

send_raw_message "lane 3 00:28,99 0"
sleep 1
send_raw_message "lane 4 00:29,22 0"
sleep 0
send_raw_message "lane 2 00:30,99 0"
sleep 1
send_raw_message "lane 5 00:31,22 0"
sleep 0
send_raw_message "lane 6 00:31,99 0"
sleep 1
send_raw_message "lane 7 00:33,99 0"
sleep 1
send_raw_message "lane 1 00:35,99 0"
sleep 2
send_raw_message "lane 8 00:36,10 0"
sleep 2


sleep 20


send_raw_message "lane 3 01:28,99 0"
sleep 2
send_raw_message "lane 4 01:29,22 0"
sleep 2
send_raw_message "lane 2 01:30,99 0"
sleep 0
send_raw_message "lane 5 01:31,22 0"
sleep 0
send_raw_message "lane 6 01:31,99 0"
sleep 0
send_raw_message "lane 7 01:33,99 0"
sleep 2
send_raw_message "lane 1 01:35,99 0"
sleep 2
send_raw_message "lane 8 01:36,10 0"
sleep 2
# exit 0

for (( i=1; i<=$NUMBER_LANES; i++ ))
do
create_random_time
send_raw_message "lane $i ${RANDOM_TIME} $i"
sleep 3
done