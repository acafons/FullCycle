FROM golang:1.21 as builder

WORKDIR /src

COPY <<EOF ./main.go

package main

import "fmt"

func main() {
    fmt.Println("Full Cycle Rocks!!")
}

EOF

RUN go build -o /bin/fullcycle ./main.go

FROM scratch

COPY --from=builder /bin/fullcycle /bin/fullcycle

CMD [ "/bin/fullcycle" ]
