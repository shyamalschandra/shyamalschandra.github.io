# Shyamal Suhana Chandra — Animated Resume

A single-page, Apple-inspired animated resume built with Jekyll for GitHub Pages. Features smooth scroll animations, dark/light theme toggle, and a modern, polished design.

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   bundle install
   ```

2. **Run Jekyll locally:**
   ```bash
   bundle exec jekyll serve
   ```

3. **View your site:**
   Open [http://localhost:4000](http://localhost:4000) in your browser.

### Deploy to GitHub Pages

#### Option 1: User/Organization Site (username.github.io)

1. Create a new repository named `shyamalschandra.github.io` (replace with your username).

2. In `_config.yml`, ensure:
   ```yaml
   url: "https://shyamalschandra.github.io"
   baseurl: ""
   ```

3. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Animated resume"
   git branch -M main
   git remote add origin git@github.com:shyamalschandra/shyamalschandra.github.io.git
   git push -u origin main
   ```

4. Go to **Settings → Pages** in your repository and select:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `root`
   - Click **Save**

5. Your site will be live at `https://shyamalschandra.github.io` within a few minutes.

#### Option 2: Project Site (username.github.io/repo-name)

1. Create a repository with any name (e.g., `resume` or `portfolio`).

2. In `_config.yml`, set:
   ```yaml
   url: "https://shyamalschandra.github.io"
   baseurl: "/resume"  # Replace with your repo name
   ```

3. Push to GitHub (same steps as above).

4. In **Settings → Pages**, select:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
   - Click **Save**

5. Your site will be live at `https://shyamalschandra.github.io/resume`.

## 📁 Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Main layout template
├── assets/
│   ├── css/
│   │   └── main.css     # All styles (Apple-inspired design)
│   └── js/
│       └── main.js      # Scroll animations, theme toggle, smooth scrolling
├── index.html           # Single-page resume content
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## 🎨 Features

- **Apple-like Design**: Clean, modern UI with glassmorphism effects
- **Smooth Animations**: Scroll-triggered fade-ins and transitions
- **Dark/Light Theme**: Toggle between themes (preference saved in localStorage)
- **Responsive**: Mobile-friendly layout
- **Single Page**: All sections in one scrollable page
- **Sections Included**:
  - Hero with profile snapshot
  - Skills (grouped by category)
  - Projects (ready for your content)
  - Certificates (ready for your content)
  - Experience (ready for your content)
  - Education
  - Contact form

## ✏️ Customization

### Update Content

Edit `index.html` to update:
- Personal information
- Skills
- Projects
- Experience
- Certificates
- Education

### Styling

Modify `assets/css/main.css` to adjust:
- Colors (CSS variables in `:root`)
- Typography
- Spacing
- Animations

### JavaScript

Edit `assets/js/main.js` to customize:
- Animation triggers
- Theme toggle behavior
- Smooth scrolling behavior

## 🔧 Troubleshooting

### Jekyll won't start locally

- Make sure Ruby is installed: `ruby --version`
- Install Bundler: `gem install bundler`
- Run `bundle install` again

### GitHub Pages not updating

- Check that `_config.yml` has the correct `url` and `baseurl`
- Wait a few minutes for GitHub to rebuild
- Check the **Actions** tab for build errors

### Assets not loading

- Ensure paths use `{{ '/assets/...' | relative_url }}` in the layout
- Check that `baseurl` in `_config.yml` matches your repository name

## 📝 License

This resume template is free to use and modify for personal or commercial projects.

---

Built with ❤️ using Jekyll and GitHub Pages.
