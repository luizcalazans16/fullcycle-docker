FROM golang:1.19 AS builder

WORKDIR /go/src/app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM scratch

COPY --from=builder /go/src/app/app .

CMD ["./app"]