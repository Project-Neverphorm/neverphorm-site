FROM alpine:latest

ARG PB_VERSION=0.36.7

RUN apk add --no-cache unzip ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/ && rm /tmp/pb.zip

COPY ./pb_hooks /pb/pb_hooks
COPY ./pb_migrations /pb/pb_migrations

EXPOSE 8080

CMD ["/bin/sh", "-c", "/pb/pocketbase serve --http=0.0.0.0:${PORT:-8080} --dir=/pb_data --hooksDir=/pb/pb_hooks --migrationsDir=/pb/pb_migrations"]