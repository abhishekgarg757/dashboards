FROM golang:1.24-alpine

WORKDIR /app

COPY . .

RUN go mod init api-gateway
RUN go mod tidy
RUN go build -o app ./cmd

CMD ["./app"]
