import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSubscriptionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Menu endpoints
  app.get("/api/menu", async (req, res) => {
    try {
      const menuItems = await storage.getMenuItems();
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });

  app.get("/api/menu/featured", async (req, res) => {
    try {
      const featuredItems = await storage.getFeaturedMenuItems();
      res.json(featuredItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured menu items" });
    }
  });

  app.get("/api/menu/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const menuItems = await storage.getMenuItemsByCategory(category);
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items by category" });
    }
  });

  // Location endpoints
  app.get("/api/locations", async (req, res) => {
    try {
      const locations = await storage.getLocations();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch locations" });
    }
  });

  app.get("/api/locations/city/:city", async (req, res) => {
    try {
      const { city } = req.params;
      const locations = await storage.getLocationsByCity(city);
      res.json(locations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch locations by city" });
    }
  });

  app.get("/api/locations/type/:type", async (req, res) => {
    try {
      const { type } = req.params;
      const locations = await storage.getLocationsByType(type);
      res.json(locations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch locations by type" });
    }
  });

  // Trivia endpoints
  app.get("/api/trivia/questions", async (req, res) => {
    try {
      const questions = await storage.getTriviaQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trivia questions" });
    }
  });

  app.get("/api/trivia/random", async (req, res) => {
    try {
      const question = await storage.getRandomTriviaQuestion();
      if (!question) {
        return res.status(404).json({ message: "No trivia questions available" });
      }
      res.json(question);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch random trivia question" });
    }
  });

  app.get("/api/trivia/difficulty/:difficulty", async (req, res) => {
    try {
      const { difficulty } = req.params;
      const questions = await storage.getTriviaQuestionsByDifficulty(difficulty);
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trivia questions by difficulty" });
    }
  });

  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertEmailSubscriptionSchema.parse(req.body);
      const subscription = await storage.createEmailSubscription(validatedData);
      res.status(201).json(subscription);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid email format", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create email subscription" });
    }
  });

  // Stats endpoint for dashboard
  app.get("/api/stats", async (req, res) => {
    try {
      const locations = await storage.getLocations();
      const menuItems = await storage.getMenuItems();
      const questions = await storage.getTriviaQuestions();
      
      const stats = {
        locations: locations.length,
        cities: [...new Set(locations.map(l => l.city))].length,
        menuItems: menuItems.length,
        triviaQuestions: questions.length,
        openingSoon: locations.filter(l => !l.isOpen).length,
      };
      
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
