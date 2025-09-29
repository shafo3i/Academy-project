# 🕌 Academy-Project - Islamic Studies Platform

<div align="center">

![Islamic Academy](https://img.shields.io/badge/Islamic-Academy-teal?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

 An institute aiming to equip the youth and sisters with essential Islamic knowledge

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🐛 Report Bug](../../issues) • [✨ Request Feature](../../issues)

</div>

---

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Prerequisites](#-prerequisites)
- [🚀 Quick Start](#-quick-start)
- [🐳 Docker Deployment](#-docker-deployment)
- [⚙️ Environment Configuration](#️-environment-configuration)
- [🗄️ Database Setup](#️-database-setup)
- [💳 Payment Integration](#-payment-integration)
- [📱 API Endpoints](#-api-endpoints)
- [🎨 UI Components](#-ui-components)
- [📊 Admin Dashboard](#-admin-dashboard)
- [🔧 Development](#-development)
- [📈 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Features

### 🎓 **Core Functionality**
- **Course Registration System** - Complete registration flow for Islamic Studies program
- **Dynamic Pricing** -     can be made to accept payments for registrations 
- **Multi-Child Support** - Register multiple children in single transaction
- **International Support** - Global registration with country-specific features

### 💰 **Payment Processing**
- **Stripe Integration** - Secure payment processing with Stripe Checkout
- **Payment Tracking** - Comprehensive payment status monitoring
- **Revenue Analytics** - Real-time revenue and payment statistics
- **Refund Management** - Handle refunds and payment disputes

### 👨‍💼 **Admin Dashboard**
- **Registration Management** - View, edit, and manage all registrations
- **Payment Oversight** - Monitor all payments and revenue
- **Course Management** - Create and manage course content
- **User Authentication** - Secure admin authentication with Better Auth

### 🌐 **User Experience**
- **Responsive Design** - Mobile-first responsive interface
- **Sticky Navigation** - Mobile-friendly navigation with hamburger menu
- **Rich Content Display** - Enhanced course content with bullet points and emojis
- **Success Tracking** - Clear payment confirmation and next steps

### 🔐 **Security & Performance**
- **Type Safety** - Full TypeScript implementation
- **Database Security** - Prisma ORM with PostgreSQL
- **Environment Variables** - Secure configuration management
- **Error Handling** - Comprehensive error management

---

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 15.4.6](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### **Backend**
- **[Prisma ORM](https://prisma.io/)** - Type-safe database toolkit
- **[PostgreSQL](https://postgresql.org/)** - Robust relational database
- **[Better Auth](https://better-auth.com/)** - Secure authentication system
- **[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)** - Server-side form handling

### **Payment & External Services**
- **[Stripe](https://stripe.com/)** - Payment processing platform
- **[Stripe Checkout](https://stripe.com/payments/checkout)** - Hosted payment pages
- **[Webhooks](https://stripe.com/docs/webhooks)** - Real-time payment notifications

### **Development & Deployment**
- **[Docker](https://docker.com/)** - Containerization platform
- **[Railway](https://railway.app/)** - Cloud deployment platform
- **[Git](https://git-scm.com/)** - Version control system

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.0.0 or higher) 
- **npm** or **yarn** package manager
- **Git** for version control
- **Docker** (optional, for containerized deployment)
- **PostgreSQL** database (local or cloud)

### Required Accounts
- **[Stripe Account](https://stripe.com/)** - For payment processing
- **Database Provider** - PostgreSQL database (Railway, Supabase, or local)

---

## 🚀 Quick Start

### 1. **Clone the Repository**

```bash
# Clone the repository
git clone https://github.com/shafo3i/almufeeda.git

# Navigate to project directory
cd almufeeda

# Install dependencies
npm install
```

### 2. **Environment Setup**

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"

# Better Auth Configuration
BETTER_AUTH_SECRET="your-secret-key-here"
BETTER_AUTH_URL="http://localhost:3000"

# Stripe Configuration
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"

# Application Configuration
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### 3. **Database Setup**

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

### 4. **Start Development Server**

```bash
# Start the development server
npm run dev

# Open your browser and navigate to
# http://localhost:3000
```

---

## 🐳 Docker Deployment

### **Using Docker Compose** (Recommended)

1. **Create `docker-compose.yml`:**

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - BETTER_AUTH_SECRET=${BETTER_AUTH_SECRET}
      - BETTER_AUTH_URL=${BETTER_AUTH_URL}
      - STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
      - STRIPE_PUBLISHABLE_KEY=${STRIPE_PUBLISHABLE_KEY}
      - NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=almufeeda
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

2. **Create `Dockerfile`:**

```dockerfile
# Use Node.js 20 Alpine image
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

3. **Deploy with Docker Compose:**

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### **Single Container Deployment**

```bash
# Build the Docker image
docker build -t almufeeda-academy .

# Run the container
docker run -d \
  --name almufeeda-app \
  -p 3000:3000 \
  --env-file .env \
  almufeeda-academy

# View logs
docker logs -f almufeeda-app
```

---

## ⚙️ Environment Configuration

### **Development Environment**

```env
# Development Database
DATABASE_URL="postgresql://localhost:5432/almufeeda_dev"

# Development URLs
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# Stripe Test Keys
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

### **Production Environment**

```env
# Production Database
DATABASE_URL="postgresql://prod-host:5432/almufeeda_prod?sslmode=require"

# Production URLs
BETTER_AUTH_URL="https://your-domain.com"
NEXT_PUBLIC_BASE_URL="https://your-domain.com"

# Stripe Live Keys
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_PUBLISHABLE_KEY="pk_live_..."
```

---

## 🗄️ Database Setup

### **Schema Overview**

The application uses the following main models:

- **CourseRegistration** - Student registration data
- **Payment** - Payment transaction records
- **Course** - Course content and information
- **User** - Admin user accounts
- **Session** - Authentication sessions

### **Database Commands**

```bash
# Generate Prisma client
npx prisma generate

# Create and apply migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio

# Deploy migrations to production
npx prisma migrate deploy
```

---

## 💳 Payment Integration

### **Stripe Setup**

1. **Create Stripe Account** at [stripe.com](https://stripe.com)
2. **Get API Keys** from your Stripe dashboard
3. **Configure Webhooks** (optional for advanced features)
4. **Test Payment Flow** using Stripe test cards

### **Test Payment Cards**

```
Visa:           4242 4242 4242 4242
Mastercard:     5555 5555 5555 4444
Declined:       4000 0000 0000 0002
```

### **Payment Flow**

1. User completes registration form
2. Stripe Checkout session created
3. User redirected to Stripe payment page
4. Payment processed by Stripe
5. User returned to success page
6. Payment status updated in database

---

## 📱 API Endpoints

### **Public Endpoints**

- `GET /` - Homepage
- `GET /register` - Registration form
- `GET /courses/[id]` - Course details
- `GET /success` - Payment success page

### **API Routes**

- `POST /api/auth/*` - Authentication endpoints
- `POST /actions/form/actions` - Form submission handlers

### **Admin Endpoints**

- `GET /dashboard` - Admin dashboard
- `GET /dashboard/registrations` - Registration management
- `GET /dashboard/payments` - Payment management
- `GET /dashboard/courses` - Course management

---

## 🎨 UI Components

### **Custom Components**

- **Header** - Sticky navigation with mobile menu
- **Hero** - Homepage hero section with Arabic text
- **Registration Form** - Multi-step registration form
- **Payment Success** - Payment confirmation page
- **Course Display** - Enhanced content formatting

### **Shadcn/ui Components**

- Card, Button, Input, Label
- Table, Select, Textarea
- Tooltip, Popover, Separator
- Sheet, Skeleton, Sonner (toasts)

---

## 📊 Admin Dashboard

### **Features**

- **Registration Overview** - Total registrations and statistics
- **Payment Monitoring** - Revenue tracking and payment status
- **Course Management** - Create and edit course content
- **User Management** - Admin user accounts

### **Access**

```bash
# Access admin dashboard
http://localhost:3000/dashboard

# Default admin login (configure in your auth system)
Email: admin@almufeeda.com
Password: [set during setup]
```

---

## 🔧 Development

### **Development Commands**

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Format code
npm run format
```

### **Useful Development Tools**

```bash
# View database in browser
npx prisma studio

# Check database status
npx prisma migrate status

# Reset development database
npx prisma migrate reset

# Generate TypeScript types
npx prisma generate
```

---

## 📈 Deployment

### **Railway Deployment**

1. **Connect GitHub repository** to Railway
2. **Set environment variables** in Railway dashboard
3. **Deploy automatically** on git push

### **Vercel Deployment**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Set environment variables
vercel env add
```

### **Manual Deployment**

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Code Standards**

- Use TypeScript for all new code
- Follow existing code style and formatting
- Add proper error handling
- Write descriptive commit messages
- Test your changes thoroughly

---

## 📞 Support

### **Getting Help**

- 📧 **Email**: info@almufeeda.com
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: Check this README and inline code comments
- 💬 **Discussions**: [GitHub Discussions](../../discussions)

### **Common Issues**

1. **Database Connection**: Ensure DATABASE_URL is correctly formatted
2. **Stripe Issues**: Verify API keys and webhook configuration
3. **Build Errors**: Clear `.next` folder and rebuild
4. **Authentication**: Check BETTER_AUTH configuration

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### 🌟 Made with ❤️ for the Muslim Community

**Barakallahu feeki** for using Almufeeda Academy!

[⬆ Back to top](#-almufeeda-academy---islamic-studies-platform)

</div>

---

**Built with Islamic values in mind** 🕌 **Serving the Ummah through education** 📚 **May Allah accept our efforts** 🤲
