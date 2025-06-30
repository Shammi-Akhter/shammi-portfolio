# Shammi Portfolio - Professional Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, professional design, and comprehensive sections to showcase your skills and projects.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Built with Framer Motion for engaging user experience
- **Modern UI**: Clean and professional design with dark theme
- **Interactive Elements**: Hover effects, scroll animations, and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds

## 📋 Sections Included

1. **Navigation Bar** - Responsive navbar with smooth scrolling
2. **Hero Section** - Professional introduction with photo and social links
3. **About Section** - Detailed personal and professional information
4. **Skills Section** - Visual representation of technical skills
5. **Education Section** - Academic background and certifications
6. **Experience Section** - Professional work experience
7. **Projects Section** - Portfolio of projects with detailed pages
8. **Contact Section** - Contact form and information
9. **Footer** - Additional links and information

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Icons** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shammi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Customization Guide

### 1. Personal Information

Update your personal information in the following files:

- **Hero Section** (`src/components/sections/Hero.jsx`):
  - Name and designation
  - Professional photo (replace placeholder)
  - Social media links
  - Introduction text

- **About Section** (`src/components/sections/About.jsx`):
  - Personal story and journey
  - Work preferences
  - Hobbies and interests
  - Personal traits

### 2. Contact Information

Update contact details in:
- `src/components/sections/Contact.jsx`
- `src/components/Footer.jsx`

### 3. Skills

Modify skills in `src/components/sections/Skills.jsx`:
- Add/remove skill categories
- Update skill levels (0-100%)
- Change skill names and colors

### 4. Education

Update education details in `src/components/sections/Education.jsx`:
- Degree information
- Institution names
- Duration and location
- Achievements and GPA

### 5. Experience

Modify work experience in `src/components/sections/Experience.jsx`:
- Job titles and companies
- Duration and responsibilities
- Technologies used
- Achievements

### 6. Projects

Update projects in `src/components/sections/Projects.jsx`:
- Project titles and descriptions
- Technology stacks
- Live links and GitHub repositories
- Project images

For detailed project pages, update `src/components/ProjectDetail.jsx`:
- Challenges faced
- Future improvements
- Detailed descriptions

### 7. Styling

Customize colors and styling:
- Primary color: Purple (`#8b5cf6`)
- Background: Dark slate theme
- Update colors in `src/index.css`

### 8. Social Links

Update social media links throughout the components:
- GitHub
- LinkedIn
- Twitter
- Facebook

## 🎨 Design Customization

### Colors
The portfolio uses a purple and dark theme. To change colors:

1. Update the gradient backgrounds in components
2. Modify the color classes in Tailwind CSS
3. Update custom CSS variables in `src/index.css`

### Typography
- Primary font: System fonts (sans-serif)
- Headings: Bold weights
- Body text: Regular weights

### Animations
- Scroll animations using Framer Motion
- Hover effects on interactive elements
- Smooth transitions throughout

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by Shammi**
