# Use a minimal Golang image
FROM golang:latest

# Set the working directory
WORKDIR /app

# Copy go.mod and go.sum first (for caching dependencies)
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the application code
COPY api/ ./api/
COPY templates/ ./templates/

# Set the working directory to the api folder
WORKDIR /app/api

# Build the Go application
RUN go build -o /app/profile-project

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["/app/profile-project"]
