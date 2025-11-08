package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	r.LoadHTMLGlob("./templates/*") // Load HTML templates for frontend

	// Home Page (Human-Friendly)
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})

	// Resume Endpoint
	r.GET("/resume", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"name": "Hemanth",
			"title": "DevOps Engineer | Cloud Enthusiast",
			"skills": []string{"Golang", "Docker", "Kubernetes", "Terraform", "CI/CD"},
			"experience": "7 years",
			"github": "https://github.com/hemanth",
		})
	})

	// Dating Profile Endpoint
	r.GET("/dating-profile", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"bio": "Automating my life, but still figuring out love.",
			"ideal_date": "Coffee, deep conversations, and a spontaneous adventure.",
			"fun_fact": "I treat relationships like Git commits—no force pushes!",
		})
	})

	// Coffee Invite Endpoint
	r.GET("/coffee-invite", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hey! Let's grab a coffee and talk tech, travel, or life. Book a slot!",
			"link": "https://calendly.com/hemanth-coffee",
		})
	})

	r.Run(":8080") // Start server on port 8080
}
