# iOS for Android Developers - Skill Bridge

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://aabolfazl.github.io/android-ios-bridge/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A practical learning platform for senior Android developers to reach mid-level iOS capability. Learn by comparing what
you already know.

**Live Site:** [https://aabolfazl.github.io/android-ios-bridge/](https://aabolfazl.github.io/android-ios-bridge/)

## Modules

| #  | Module                                                           | Topics                                                |
|----|------------------------------------------------------------------|-------------------------------------------------------|
| 01 | [Mindset & App Lifecycle](modules/01-mindset-lifecycle.html)     | iOS platform philosophy, app states, scene management |
| 02 | [Swift for Kotlin Developers](modules/02-swift-for-kotlin.html)  | Language syntax mapping, optionals, protocols         |
| 03 | [SwiftUI & UIKit Interop](modules/03-swiftui-uikit-interop.html) | UI framework comparison, Compose to SwiftUI           |
| 04 | [Architecture & State](modules/04-architecture-state.html)       | MVVM, Combine, data flow patterns                     |
| 05 | [Concurrency](modules/05-concurrency.html)                       | async/await, actors, structured concurrency           |
| 06 | [Networking](modules/06-networking.html)                         | URLSession vs Retrofit patterns                       |
| 07 | [Persistence](modules/07-persistence.html)                       | SwiftData, Core Data, UserDefaults, Keychain          |
| 08 | [DI & Package Management](modules/08-di-spm.html)                | SPM and dependency injection                          |
| 09 | [Testing](modules/09-testing.html)                               | XCTest vs JUnit/Espresso                              |
| 10 | [Debugging & Shipping](modules/10-debugging-shipping.html)       | Instruments and App Store deployment                  |

## Features

- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Responsive Design**: Mobile-first with collapsible navigation
- **Offline Ready**: Works completely offline as static HTML/CSS/JS
- **Progress Tracking**: Interactive checklists with localStorage persistence
- **Accessibility**: Keyboard navigable, good contrast, ARIA labels

## GitHub Pages Deployment

This site is designed to be deployed on GitHub Pages. To deploy:

### Option 1: Deploy from Main Branch (Recommended)

1. Go to your repository's **Settings**
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://<username>.github.io/<repository-name>/`

### Option 2: Using GitHub Actions

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The site will auto-deploy on push to main

### Verifying Deployment

After deployment, verify:

- [ ] Home page loads at the Pages URL
- [ ] All module pages are accessible
- [ ] Theme toggle works
- [ ] Navigation between modules works
- [ ] 404 page shows for invalid URLs

## Project Structure

```
android-ios-bridge/
├── index.html                    # Main landing page
├── 404.html                      # Custom 404 page
├── robots.txt                    # Search engine directives
├── sitemap.xml                   # Sitemap for SEO
├── site.webmanifest              # PWA manifest
├── .nojekyll                     # Bypass Jekyll processing
├── modules/
│   ├── 01-mindset-lifecycle.html
│   ├── 02-swift-for-kotlin.html
│   ├── 03-swiftui-uikit-interop.html
│   ├── 04-architecture-state.html
│   ├── 05-concurrency.html
│   ├── 06-networking.html
│   ├── 07-persistence.html
│   ├── 08-di-spm.html
│   ├── 09-testing.html
│   └── 10-debugging-shipping.html
└── assets/
    ├── css/
    │   ├── styles.css            # Main stylesheet
    │   └── code.css              # Code block styling
    ├── img/
    │   ├── favicon.svg           # Site favicon
    │   └── og-default.png        # Social sharing image
    └── js/
        └── app.js                # Theme toggle, navigation
```

## Local Development

This is a static site with no build process required. Simply:

1. Clone the repository
2. Open `index.html` in any modern browser
3. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx serve
   ```

## SEO & Social Sharing

The site includes:

- Canonical URLs for all pages
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card tags for Twitter sharing
- JSON-LD structured data
- XML sitemap
- robots.txt

**Note:** Replace `assets/img/og-default.png` with a proper 1200x630 social preview image for best results.

## Browser Support

Tested on modern browsers (Chrome, Firefox, Safari, Edge). Requires JavaScript for:

- Theme toggle
- Mobile navigation
- Progress checklist persistence

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- **Creator**: [@aabolfazl](https://github.com/aabolfazl)
- Code with the help of [Claude](https://claude.ai) by Anthropic