build:
	mkdir -p functions
	go get ./...
	go build -o functions/hello ./...
	npm run build