FROM alpine:latest
RUN apk add --no-cache ffmpeg espeak
VOLUME /golem/input /golem/output
WORKDIR /golem/work