# LostSoul V2 🎮

A modern web-based 2D platform game built with Phaser.js and Django, featuring real-time score tracking, user profiles, and community engagement.

[![Django](https://img.shields.io/badge/Django-4.2.1-green.svg)](https://djangoproject.com/)
[![Phaser](https://img.shields.io/badge/Phaser-3.x-blue.svg)](https://phaser.io/)
[![Python](https://img.shields.io/badge/Python-3.x-yellow.svg)](https://python.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple.svg)](https://getbootstrap.com/)

## 🚀 Project Overview

LostSoul V2 is an interactive web platform that combines modern game development with robust web application features. Built as a 2D pixel-art platform game using the Phaser.js engine, the project is hosted on a Django-powered website that provides user management, community features, and persistent game data.

### ✨ Key Features

- **🎯 2D Platform Game**: Physics-based gameplay with sprite animations and level progression
- **👤 User Management**: Complete authentication system with custom profiles
- **🏆 Leaderboards**: Real-time score tracking and community rankings  
- **💬 Community System**: User comments and feedback system
- **📱 Responsive Design**: Mobile-friendly interface with Bootstrap
- **🔒 Secure Backend**: Django-powered with proper authentication and authorization

## 🛠️ Technology Stack

### Backend
- **Django 4.2.1** - Web framework and API
- **Python 3.x** - Backend programming language
- **SQLite** - Database (development)
- **Pillow** - Image processing for avatars

### Frontend & Game Engine
- **Phaser.js 3.x** - 2D game development framework
- **Bootstrap 5.3** - CSS framework and UI components
- **Font Awesome** - Icon library
- **Vanilla JavaScript** - Game logic and interactions
- **HTML5 Canvas/WebGL** - Game rendering

## 📁 Project Structure

```
LostSoul_V2/
├── lost_soulV2/                    # Django project root
│   ├── lost_soulV2/               # Main project configuration
│   ├── commons/                   # Shared functionality and main pages
│   ├── lost_soul_game/           # Game-specific features and models
│   ├── profiles/                 # User management and profiles
│   ├── static/                   # CSS, JavaScript, and game assets
│   │   ├── css/                  # Stylesheets
│   │   ├── game/                 # Phaser.js game files
│   │   │   ├── js/               # Game logic
│   │   │   │   ├── scenes/       # Game scenes
│   │   │   │   ├── classes/      # Game entities
│   │   │   │   └── components/   # UI components
│   │   │   └── src/              # Game assets
│   │   └── img/                  # Static images
│   ├── media/                    # User-uploaded content
│   └── templates/                # HTML templates
├── ProjectDescription.md         # Detailed project analysis
├── Improvements.md              # Development roadmap
└── README.md                    # This file
```

## 🎮 Game Features

### Core Gameplay
- **Physics-based Movement**: Arcade physics with gravity and collision detection
- **Scene Management**: Multiple game states (menu, gameplay, pause, game over)
- **Level Design**: Tilemap-based levels with platforms and obstacles
- **Character Animation**: Sprite-based player character with smooth animations
- **Scoring System**: Real-time score calculation and persistence

### Web Integration
- **Account System**: User registration and authentication
- **Profile Customization**: Avatars, usernames, and biographies  
- **Score Persistence**: Automatic saving of high scores to user profiles
- **Community Features**: Leaderboards and user comments
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdrianCCRS/LostSoul_V2.git
   cd LostSoul_V2
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   cd lost_soulV2
   pip install -r requirements.txt
   ```

4. **Setup database**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Run development server**
   ```bash
   python manage.py runserver
   ```

7. **Access the application**
   - Open your browser and navigate to `http://127.0.0.1:8000`
   - Create an account or login to start playing

## 🎯 Usage

### For Players
1. **Register/Login**: Create an account to track your scores
2. **Play the Game**: Navigate to the game section and start playing
3. **Community**: Check leaderboards and interact with other players
4. **Profile**: Customize your profile with avatar and bio

### For Developers
- **Admin Panel**: Access Django admin at `/admin/` for user management
- **Game Development**: Modify game scenes in `static/game/js/scenes/`
- **Styling**: Update CSS in `static/css/`
- **Models**: Extend functionality by modifying Django models

## 🔧 Development

### Django Apps Architecture

1. **commons**: Shared functionality, main pages, and navigation
2. **lost_soul_game**: Game-specific features, comments, and score management  
3. **profiles**: User authentication, profiles, and account management

### Game Architecture

- **Modular Design**: ES6 modules for organized code structure
- **Scene Management**: Separate scenes for different game states
- **Class-based Entities**: Object-oriented approach for game objects
- **Component System**: Reusable UI components

## 🚧 Future Enhancements

### Planned Features
- **🔊 Audio System**: Background music and sound effects
- **👾 Enemy AI**: Hostile entities and combat mechanics
- **⚔️ Boss Battles**: Challenging end-level encounters
- **🌍 Multiple Worlds**: Additional levels and environments
- **🛡️ Admin Moderation**: Staff roles for community management
- **📧 Contact System**: Functional contact form with email integration

### Technical Improvements
- **🔐 Enhanced Security**: Environment variables and production settings
- **🧪 Testing Suite**: Comprehensive unit and integration tests
- **🐳 Containerization**: Docker setup for easy deployment
- **📊 Analytics**: Player behavior tracking and game statistics
- **🚀 Performance**: Optimization for better loading times

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yeison Adrián Cáceres Torres**
- GitHub: [@AdrianCCRS](https://github.com/AdrianCCRS)
- Email: [yeadcato@gmail.com](mailto:yeadcato@gmail.com)


⭐ If you found this project interesting, please give it a star! Your feedback and suggestions are always welcome.

