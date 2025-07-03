import { 
  users, 
  menuItems, 
  locations, 
  triviaQuestions, 
  userResponses, 
  emailSubscriptions,
  type User, 
  type InsertUser,
  type MenuItem,
  type InsertMenuItem,
  type Location,
  type InsertLocation,
  type TriviaQuestion,
  type InsertTriviaQuestion,
  type UserResponse,
  type EmailSubscription,
  type InsertEmailSubscription
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserPoints(userId: number, points: number): Promise<void>;
  updateUserStreak(userId: number, streak: number): Promise<void>;
  
  // Menu methods
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  getFeaturedMenuItems(): Promise<MenuItem[]>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  
  // Location methods
  getLocations(): Promise<Location[]>;
  getLocationsByCity(city: string): Promise<Location[]>;
  getLocationsByType(type: string): Promise<Location[]>;
  createLocation(location: InsertLocation): Promise<Location>;
  
  // Trivia methods
  getTriviaQuestions(): Promise<TriviaQuestion[]>;
  getTriviaQuestionsByDifficulty(difficulty: string): Promise<TriviaQuestion[]>;
  getRandomTriviaQuestion(): Promise<TriviaQuestion | undefined>;
  createTriviaQuestion(question: InsertTriviaQuestion): Promise<TriviaQuestion>;
  
  // Email subscription methods
  createEmailSubscription(subscription: InsertEmailSubscription): Promise<EmailSubscription>;
  getEmailSubscriptions(): Promise<EmailSubscription[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private menuItems: Map<number, MenuItem>;
  private locations: Map<number, Location>;
  private triviaQuestions: Map<number, TriviaQuestion>;
  private userResponses: Map<number, UserResponse>;
  private emailSubscriptions: Map<number, EmailSubscription>;
  private currentUserId: number;
  private currentMenuItemId: number;
  private currentLocationId: number;
  private currentTriviaQuestionId: number;
  private currentUserResponseId: number;
  private currentEmailSubscriptionId: number;

  constructor() {
    this.users = new Map();
    this.menuItems = new Map();
    this.locations = new Map();
    this.triviaQuestions = new Map();
    this.userResponses = new Map();
    this.emailSubscriptions = new Map();
    this.currentUserId = 1;
    this.currentMenuItemId = 1;
    this.currentLocationId = 1;
    this.currentTriviaQuestionId = 1;
    this.currentUserResponseId = 1;
    this.currentEmailSubscriptionId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize menu items
    const menuItemsData = [
      { name: "Espresso", description: "Clean, punchy, and smooth", category: "coffee", price: "3.50", available: true, featured: false },
      { name: "Americano", description: "Depth without the drama", category: "coffee", price: "4.00", available: true, featured: false },
      { name: "Flat White", description: "Balanced and creamy", category: "coffee", price: "4.50", available: true, featured: false },
      { name: "Cortado", description: "Bold and precise", category: "coffee", price: "4.25", available: true, featured: false },
      { name: "Matcha Latte", description: "Plant-powered flavor", category: "specialty", price: "5.00", available: true, featured: true },
      { name: "Chai Latte", description: "Plant-powered flavor", category: "specialty", price: "4.75", available: true, featured: false },
      { name: "Iced Coffee", description: "Fuel for the heat", category: "cold", price: "3.75", available: true, featured: false },
      { name: "Cold Brew", description: "Fuel for the heat", category: "cold", price: "4.25", available: true, featured: false },
    ];

    menuItemsData.forEach(item => {
      const menuItem: MenuItem = {
        id: this.currentMenuItemId++,
        name: item.name,
        description: item.description,
        category: item.category,
        price: item.price,
        available: item.available,
        featured: item.featured,
      };
      this.menuItems.set(menuItem.id, menuItem);
    });

    // Initialize locations
    const locationsData = [
      { name: "TŌKI Shibuya", address: "1-1-1 Shibuya", city: "Tokyo", country: "Japan", latitude: "35.6598", longitude: "139.7023", type: "storefront", isOpen: false, openingHours: "Coming Soon" },
      { name: "TŌKI Harajuku", address: "2-2-2 Harajuku", city: "Tokyo", country: "Japan", latitude: "35.6702", longitude: "139.7026", type: "storefront", isOpen: false, openingHours: "Coming Soon" },
      { name: "TŌKI Shinjuku Cart", address: "3-3-3 Shinjuku", city: "Tokyo", country: "Japan", latitude: "35.6896", longitude: "139.6917", type: "cart", isOpen: false, openingHours: "Coming Soon" },
      { name: "TŌKI Roppongi", address: "4-4-4 Roppongi", city: "Tokyo", country: "Japan", latitude: "35.6627", longitude: "139.7371", type: "kiosk", isOpen: false, openingHours: "Coming Soon" },
    ];

    locationsData.forEach(location => {
      const locationItem: Location = {
        id: this.currentLocationId++,
        name: location.name,
        address: location.address,
        city: location.city,
        country: location.country,
        latitude: location.latitude,
        longitude: location.longitude,
        type: location.type,
        isOpen: location.isOpen,
        openingHours: location.openingHours,
      };
      this.locations.set(locationItem.id, locationItem);
    });

    // Initialize trivia questions
    const triviaQuestionsData = [
      { question: "What is the most consumed beverage in the world after water?", options: ["Coffee", "Tea", "Juice", "Soda"], correctAnswer: 1, difficulty: "easy", category: "coffee", points: 10 },
      { question: "Which country is the largest producer of coffee beans?", options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"], correctAnswer: 2, difficulty: "medium", category: "coffee", points: 15 },
      { question: "What does 'espresso' mean in Italian?", options: ["Strong", "Fast", "Pressed out", "Dark"], correctAnswer: 2, difficulty: "medium", category: "coffee", points: 15 },
      { question: "Which Japanese tea ceremony principle emphasizes simplicity?", options: ["Wa", "Kei", "Sei", "Jaku"], correctAnswer: 3, difficulty: "hard", category: "culture", points: 20 },
    ];

    triviaQuestionsData.forEach(question => {
      const triviaQuestion: TriviaQuestion = {
        id: this.currentTriviaQuestionId++,
        question: question.question,
        options: question.options,
        correctAnswer: question.correctAnswer,
        difficulty: question.difficulty,
        category: question.category,
        points: question.points,
      };
      this.triviaQuestions.set(triviaQuestion.id, triviaQuestion);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id, 
      points: 0, 
      streak: 0, 
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  async updateUserPoints(userId: number, points: number): Promise<void> {
    const user = this.users.get(userId);
    if (user) {
      user.points = (user.points || 0) + points;
      this.users.set(userId, user);
    }
  }

  async updateUserStreak(userId: number, streak: number): Promise<void> {
    const user = this.users.get(userId);
    if (user) {
      user.streak = streak;
      this.users.set(userId, user);
    }
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(item => item.category === category);
  }

  async getFeaturedMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(item => item.featured);
  }

  async createMenuItem(insertMenuItem: InsertMenuItem): Promise<MenuItem> {
    const id = this.currentMenuItemId++;
    const menuItem: MenuItem = { ...insertMenuItem, id };
    this.menuItems.set(id, menuItem);
    return menuItem;
  }

  async getLocations(): Promise<Location[]> {
    return Array.from(this.locations.values());
  }

  async getLocationsByCity(city: string): Promise<Location[]> {
    return Array.from(this.locations.values()).filter(location => location.city === city);
  }

  async getLocationsByType(type: string): Promise<Location[]> {
    return Array.from(this.locations.values()).filter(location => location.type === type);
  }

  async createLocation(insertLocation: InsertLocation): Promise<Location> {
    const id = this.currentLocationId++;
    const location: Location = { ...insertLocation, id };
    this.locations.set(id, location);
    return location;
  }

  async getTriviaQuestions(): Promise<TriviaQuestion[]> {
    return Array.from(this.triviaQuestions.values());
  }

  async getTriviaQuestionsByDifficulty(difficulty: string): Promise<TriviaQuestion[]> {
    return Array.from(this.triviaQuestions.values()).filter(question => question.difficulty === difficulty);
  }

  async getRandomTriviaQuestion(): Promise<TriviaQuestion | undefined> {
    const questions = Array.from(this.triviaQuestions.values());
    if (questions.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

  async createTriviaQuestion(insertTriviaQuestion: InsertTriviaQuestion): Promise<TriviaQuestion> {
    const id = this.currentTriviaQuestionId++;
    const triviaQuestion: TriviaQuestion = { ...insertTriviaQuestion, id };
    this.triviaQuestions.set(id, triviaQuestion);
    return triviaQuestion;
  }

  async createEmailSubscription(insertEmailSubscription: InsertEmailSubscription): Promise<EmailSubscription> {
    const id = this.currentEmailSubscriptionId++;
    const emailSubscription: EmailSubscription = { 
      ...insertEmailSubscription, 
      id, 
      subscribedAt: new Date(), 
      active: true 
    };
    this.emailSubscriptions.set(id, emailSubscription);
    return emailSubscription;
  }

  async getEmailSubscriptions(): Promise<EmailSubscription[]> {
    return Array.from(this.emailSubscriptions.values());
  }
}

export const storage = new MemStorage();
