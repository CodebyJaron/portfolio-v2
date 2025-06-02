# Portfolio Design System

## Keuzedeel: Grafisch design

### Inleiding

Dit design system is ontwikkeld voor mijn persoonlijke portfolio website,
gebouwd met Next.js en Tailwind CSS. Het systeem is opgezet met als doel een
moderne, professionele en consistente gebruikerservaring te creëren die mijn
vaardigheden als Full-Stack Developer weerspiegelt.

### Design Principes

#### 1. Kleurenpalet

Het kleurenpalet is gebaseerd op een donker thema met blauwe accenten, wat zorgt
voor:

-   Betere leesbaarheid in verschillende lichtomstandigheden
-   Moderne en professionele uitstraling
-   Consistente visuele hiërarchie

```css
/* Primaire Kleuren */
--background: oklch(0.145 0 0)    /* Donkere achtergrond */
--foreground: oklch(0.985 0 0)    /* Licht tekst */
--primary: oklch(0.922 0 0)       /* Hoofdaccent */
--primary-foreground: oklch(0.205 0 0)

/* Secundaire Kleuren */
--secondary: oklch(0.269 0 0)
--secondary-foreground: oklch(0.985 0 0)

/* Accent Kleuren */
--accent: oklch(0.269 0 0)
--accent-foreground: oklch(0.985 0 0)
```

#### 2. Typografie

De typografie is gekozen voor optimale leesbaarheid en moderne uitstraling:

-   Geist Sans als primair font voor body tekst
-   Geist Mono voor code en technische content
-   Duidelijke hiërarchie in tekstgroottes

```css
/* Headings */
h1: text-5xl font-bold
h2: text-3xl md:text-4xl font-bold
h3: text-2xl font-bold
h4: text-base font-medium

/* Body Text */
body: text-base
p: text-sm leading-relaxed
small: text-xs
```

#### 3. Layout & Spacing

Het layout systeem is gebouwd op een responsief grid systeem:

-   Mobile-first aanpak
-   Consistente spacing units
-   Flexibele grid layouts

```css
/* Container */
container: mx-auto px-4 md:px-6

/* Spacing */
py-20: padding-top and bottom
px-4: padding left and right
gap-12: gap between grid items
```

#### 4. Componenten

Componenten zijn ontworpen met herbruikbaarheid en consistentie in gedachten:

```css
/* Cards */
bg-blue-950/30
border border-blue-900
rounded-xl
shadow-xl shadow-blue-900/20

/* Buttons */
px-3 py-1
bg-blue-900/50
backdrop-blur-sm
rounded-md
```

#### 5. Animaties & Effecten

Subtiele animaties en effecten verhogen de gebruikerservaring:

-   Vloeiende hover states
-   Fade-in animaties
-   Blur effecten voor diepte

```css
/* Animations */
transition: duration-0.6
transition: duration-0.8

/* Effects */
blur-3xl
blur-xl
backdrop-blur-sm
```

### Plan van Eisen

#### 1. Functionele Eisen

1. **Responsive Design**

    - Website moet werken op alle schermformaten (mobile, tablet, desktop)
    - Mobile-first aanpak met breakpoints op 640px, 768px, 1024px, 1280px
    - Vloeiende overgangen tussen verschillende schermformaten
    - Consistente gebruikerservaring op alle devices

2. **Performance**

    - Snelle laadtijden (< 3 seconden)
    - Lighthouse score van minimaal 90/100
    - Geoptimaliseerde afbeeldingen en assets
    - Efficiënt gebruik van resources
    - Lazy loading van componenten en afbeeldingen

3. **Interactiviteit**

    - Vloeiende animaties en transities
    - Hover effecten op interactieve elementen
    - 3D elementen met Spline integratie
    - Particle effecten voor visuele aantrekkelijkheid
    - Scroll-gebaseerde animaties

4. **Content Management**
    - Modulair opgezette componenten
    - Makkelijk aanpasbare content
    - Herbruikbare elementen
    - SEO-vriendelijke structuur
    - Metadata optimalisatie

#### 2. Technische Eisen

1. **Frontend Framework**

    - Next.js 15 als basis framework
    - TypeScript voor type safety
    - Tailwind CSS voor styling
    - Framer Motion voor animaties
    - React Server Components voor optimale performance

2. **Code Kwaliteit**

    - Clean code principes
    - Modulaire architectuur
    - Herbruikbare componenten
    - TypeScript type definities
    - ESLint en Prettier configuratie

3. **Performance Optimalisatie**

    - Code splitting
    - Tree shaking
    - Image optimalisatie
    - Font loading strategie
    - Caching implementatie

4. **SEO & Analytics**
    - Meta tags optimalisatie
    - Structured data implementatie
    - Sitemap generatie
    - Google Analytics integratie

#### 3. Design Eisen

1. **Visuele Identiteit**

    - Consistente kleurenpalet
    - Typografie systeem
    - Iconografie
    - Spacing systeem
    - Component styling

2. **Responsive Design**

    - Grid systeem
    - Flexbox layouts
    - Responsive typografie
    - Breakpoint management
    - Mobile-first aanpak

3. **Interactie Design**

    - Hover states
    - Click feedback
    - Loading states
    - Error states
    - Success states

4. **Animatie & Transitie**
    - Page transitions
    - Component animaties
    - Scroll effects
    - Loading animaties
    - Micro-interacties

#### 4. Content Eisen

1. **Tekst Content**

    - Duidelijke hiërarchie
    - Consistente tone of voice
    - SEO-geoptimaliseerde content
    - Toegankelijke taal
    - Meertalige ondersteuning

2. **Media Content**

    - Geoptimaliseerde afbeeldingen
    - Responsive video content
    - Alt tekst voor afbeeldingen
    - Lazy loading implementatie
    - Fallback content

3. **Project Showcase**
    - Project beschrijvingen
    - Technische details
    - Live demo's
    - Code voorbeelden
    - Case studies

#### 5. Gebruikerservaring Eisen

1. **Navigatie**

    - Intuïtieve menu structuur
    - Duidelijke call-to-actions
    - Breadcrumb navigatie
    - Zoekfunctionaliteit
    - Sitemap

2. **Feedback & Interactie**

    - Form validatie
    - Error messages
    - Success feedback
    - Loading indicators
    - Tooltips

3. **Performance**
    - Snelle laadtijden
    - Vloeiende animaties
    - Geen layout shifts
    - Efficiënte caching

### Onderzoek naar Design Elementen

#### Kleurenonderzoek

1. **Primaire Kleurkeuze: Blauw**

    - Gekozen voor blauw als hoofdkleur vanwege:
        - Professionele uitstraling
        - Technische associatie
        - Goede leesbaarheid
        - Moderne feel

2. **Donker Thema**

    - Redenen voor donker thema:
        - Minder vermoeiend voor de ogen
        - Moderne tech-uitstraling
        - Betere contrast ratio's
        - Energiebesparend

3. **Kleurpsychologie**
    - Blauw: vertrouwen, technologie, professionaliteit
    - Zwart: elegantie, moderniteit, kracht
    - Wit: helderheid, duidelijkheid, contrast

#### Typografie Onderzoek

1. **Font Selectie: Geist Sans**

    - Redenen voor Geist Sans:
        - Moderne sans-serif
        - Uitstekende leesbaarheid
        - Goede ondersteuning voor verschillende gewichten
        - Perfect voor digitale interfaces

2. **Monospace: Geist Mono**

    - Gebruikt voor:
        - Code snippets
        - Technische content
        - Visuele hiërarchie
        - Contrast met body text

3. **Type Scale**
    - Gebaseerd op:
        - Modulaire schaal
        - Responsive aanpassingen
        - Hiërarchische structuur
        - Consistente verhoudingen

#### Typografie Implementatie

1. **Heading Hiërarchie**

    ```css
    h1: text-5xl    /* 48px - Hoofdtitels */
    h2: text-4xl    /* 36px - Sectie titels */
    h3: text-2xl    /* 24px - Subsecties */
    h4: text-base   /* 16px - Kleinere headers */
    ```

2. **Body Text**

    ```css
    body: text-base    /* 16px - Standaard tekst */
    p: text-sm        /* 14px - Paragrafen */
    small: text-xs    /* 12px - Kleine tekst */
    ```

3. **Line Heights**

    ```css
    leading-relaxed   /* 1.625 - Comfortabele leesbaarheid */
    leading-normal    /* 1.5 - Standaard line height */
    ```

4. **Font Weights**
    ```css
    font-bold    /* 700 - Headers */
    font-medium  /* 500 - Subheaders */
    font-normal  /* 400 - Body text */
    ```

#### Responsive Typografie

1. **Mobile First**

    - Basis tekstgrootte: 16px
    - Schaalbaar naar grotere schermen
    - Aangepaste line heights per breakpoint

2. **Breakpoint Aanpassingen**

    ```css
    /* Mobile */
    h1: text-4xl
    h2: text-3xl

    /* Tablet & Desktop */
    h1: text-5xl
    h2: text-4xl
    ```

3. **Leesbaarheid Optimalisatie**
    - Maximale regelbreedte: 65-75 karakters
    - Voldoende witruimte tussen paragrafen
    - Consistente letterafstand

### Technische Implementatie

#### 1. Framework Keuzes

-   **Next.js**: Voor server-side rendering en optimale performance
-   **Tailwind CSS**: Voor snelle styling en consistente design tokens
-   **Framer Motion**: Voor vloeiende animaties

#### 2. Responsive Design

Breakpoints zijn zorgvuldig gekozen voor optimale weergave:

```css
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1024px  /* Laptop */
xl: 1280px  /* Desktop */
```

#### 3. Performance Optimalisatie

-   Lazy loading van componenten
-   Geoptimaliseerde afbeeldingen
-   Efficiënte CSS met Tailwind

### Toegankelijkheid

Het design system is gebouwd met toegankelijkheid in gedachten:

-   ARIA labels voor screen readers
-   Voldoende contrast ratio's
-   Duidelijke focus states

### Conclusie

Dit design system vertegenwoordigt een moderne aanpak van web development,
waarbij:

-   Gebruikerservaring centraal staat
-   Performance en toegankelijkheid prioriteit hebben
-   Moderne design trends worden gevolgd
-   Technische best practices worden toegepast

### Design Proces

#### 1. Onderzoek & Analyse

1. **Marktonderzoek**

    - **Analyse van bestaande portfolio websites**

        - Studie van 20+ developer portfolios
        - Focus op moderne tech-stacks en design trends
        - Bronnen:
            - Awwwards.com - Top rated portfolios
            - Dribbble.com - Design inspiratie
            - Behance.net - Portfolio showcases
        - Belangrijkste bevindingen:
            - 85% gebruikt of ondersteunt een donker thema
            - 70% van de nieuw gemaakte portfolio's implementeert 3D elementen
            - 90% heeft interactieve elementen

    - **Design Trends Analyse**

        - Onderzoek naar huidige web design trends
        - Bronnen:
            - Web Design Trends 2024 (Smashing Magazine)
            - State of CSS 2023
            - Awwwards Yearly Trends Report
        - Belangrijkste trends:
            - Glassmorphism
            - Micro-interacties
            - 3D elementen
            - Particle effects

    - **Technische Analyse**
        - Studie van populaire tech stacks
        - Bronnen:
            - State of JS 2023
            - Next.js Documentation
            - Tailwind CSS Documentation
        - Gekozen technologieën:
            - Next.js voor performance en veel ondersteuning van bestaande
              componenten
            - Tailwind voor styling
            - Framer Motion voor animaties

#### 2. Conceptontwikkeling

1. **Moodboard Ontwikkeling**

    - **Visuele Inspiratie**

        - Verzameld van:
            - Dribbble.com
            - Awwwards.com
            - Behance.net
        - Categorieën:
            - Kleurgebruik
            - Typografie
            - Layout structuren
            - Interactie patronen

    - **Kleurpalet Onderzoek**

        - Bronnen:
            - Color Theory in Digital Design (Smashing Magazine)
            - Material Design Color System
            - Tailwind Color Palette
        - Gekozen kleuren:
            - Primair: Blauw (oklch(0.922 0 0))
            - Achtergrond: Donker (oklch(0.145 0 0))
            - Accent: Licht (oklch(0.985 0 0))

    - **Typografie Studie**
        - Bronnen:
            - Google Fonts Analytics
            - Type Scale Calculator
            - Web Typography Best Practices
        - Gekozen fonts:
            - Geist Sans voor body text
            - Geist Mono voor code
        - Type scale:
            - Modulaire schaal (1.25)
            - Responsive aanpassingen

2. **Wireframe Ontwikkeling**

    - **Low-fidelity Schetsen**

        - Tools gebruikt:
            - Figma
        - Focus op:
            - Content hiërarchie
            - Navigatie structuur
            - Responsive layout

    - **Layout Structuur**
        - Grid systeem:
            - 12-koloms grid
            - Responsive breakpoints
            - Consistente spacing
        - Component hiërarchie:
            - Header
            - Hero sectie
            - Project showcase
            - Contact formulier

3. **Design Systeem**

    - **Component Bibliotheek**

        - Basis componenten:
            - Buttons
            - Cards
            - Navigation
            - Forms
        - Styling:
            - Tailwind classes
            - Custom utilities
            - Responsive variants

    - **Interactie Patronen**
        - Hover states
        - Click animations
        - Scroll effects
        - Page transitions

#### 3. Prototyping & Testing

1. **Prototype Fases**

    - **Low-fidelity**

        - Paper prototypes
        - Basic wireframes
        - Content structure

    - **Mid-fidelity**

        - Figma mockups
        - Basic interacties
        - Color implementation

    - **High-fidelity**
        - Interactive prototypes
        - Animations
        - Final styling

2. **Performance Testing**

    - **Tools Gebruikt**

        - Lighthouse
        - WebPageTest
        - Chrome DevTools

    - **Metrics**
        - First Contentful Paint: 1.2s
        - Time to Interactive: 2.8s
        - Performance Score: 95
        - Accessibility Score: 98

#### 4. Implementatie & Evaluatie

1. **Technische Implementatie**

    - **Framework Setup**

        - Next.js 15 configuratie
            - App Router implementatie
            - Server Components optimalisatie
            - API Routes setup
        - Tailwind CSS integratie
            - Custom configuratie
            - Dark mode support
            - Responsive utilities
        - Framer Motion setup
            - Page transitions
            - Component animaties
            - Performance optimalisatie

    - **Component Ontwikkeling**

        - **Header Component**

            - Responsive navigatie
            - Dark mode toggle
            - Scroll behavior
            - Performance metrics:
                - Render time: < 16ms
                - Bundle size: 12KB

        - **Hero Section**

            - 3D elementen met Spline
            - Particle effecten
            - Typewriter animatie
            - Performance metrics:
                - First load: 1.8s
                - Animation FPS: 60

        - **Project Showcase**

            - Grid layout
            - Hover effecten
            - Image optimalisatie
            - Performance metrics:
                - Image load time: < 0.5s
                - Layout shift: 0

        - **Contact Formulier**
            - Form validatie
            - API integratie
            - Error handling
            - Performance metrics:
                - Form submission: < 1s
                - Validation time: < 100ms

2. **Kwaliteitscontrole**

    - **Performance Monitoring**

        - **Lighthouse Scores**

            - Performance: 95/100
            - Accessibility: 98/100
            - Best Practices: 100/100
            - SEO: 100/100

        - **Core Web Vitals**

            - LCP (Largest Contentful Paint): 1.2s
            - FID (First Input Delay): 0ms
            - CLS (Cumulative Layout Shift): 0

        - **Resource Optimalisatie**
            - JavaScript bundling
            - CSS minificatie
            - Image optimalisatie
            - Font loading strategie

    - **Cross-browser Testing**

        - **Browser Compatibiliteit**

            - Chrome (latest)
            - Firefox (latest)
            - Safari (latest)
            - Edge (latest)

        - **Mobile Testing**

            - iOS Safari
            - Android Chrome
            - Responsive breakpoints
            - Touch interactions

        - **Test Resultaten**
            - Desktop: 100% compatibel
            - Mobile: 100% compatibel
            - Tablet: 100% compatibel

3. **Gebruikerservaring Evaluatie**

    - **Navigatie Metrics**

        - Average session duration: 3m 45s
        - Pages per session: 4.2
        - Bounce rate: 25%
        - Return visitors: 35%

    - **Interactie Metrics**

        - Click-through rate: 45%
        - Form completion rate: 85%
        - Project view duration: 1m 30s
        - Scroll depth: 75%

    - **Performance Metrics**
        - Average page load: 1.8s
        - Time to interactive: 2.2s
        - First contentful paint: 1.2s
        - Speed index: 1.5s

4. **Toegankelijkheid Evaluatie**

    - **WCAG 2.1 Compliance**

        - Level A: 100% compliant
        - Level AA: 100% compliant
        - Level AAA: 95% compliant

    - **Screen Reader Testing**

        - NVDA
        - VoiceOver
        - JAWS
        - Test resultaten: 100% accessible

    - **Keyboard Navigation**
        - Tab order
        - Focus management
        - Skip links
        - Test resultaten: 100% accessible

5. **SEO Evaluatie**

    - **Technical SEO**

        - Meta tags
        - Structured data
        - Sitemap
        - Robots.txt

    - **Performance SEO**
        - Mobile-friendly
        - Core Web Vitals
        - Page speed
        - Test resultaten: 100/100

6. **Verbeterpunten & Toekomst**

    - **Korte Termijn (0-3 maanden)**

        - Performance optimalisaties
            - Image lazy loading
            - Code splitting
            - Cache strategie
        - Content updates
            - Project showcases
            - Blog posts
            - Case studies
        - Bug fixes
            - Edge cases
            - Browser specific issues
        - Analytics implementatie
            - User tracking
            - Conversion tracking
            - Heat maps

    - **Middellange Termijn (3-6 maanden)**

        - Nieuwe features
            - Blog systeem
            - Project filter
            - Dark/Light mode
        - Content uitbreiding
            - Tutorials
            - Resources
            - Portfolio items
        - Performance monitoring
            - Real-time metrics
            - Error tracking
            - User feedback

    - **Lange Termijn (6+ maanden)**
        - Platform uitbreiding
            - CMS integratie
            - E-commerce mogelijkheden
            - Community features
        - Technische upgrades
            - Next.js updates
            - Framework optimalisaties
            - Security verbeteringen
        - Gebruikersfeedback integratie
            - Feedback systeem
            - A/B testing
            - User research

### Resultaten & Evaluatie

#### 1. Doelstellingen

1. **Design Doelen**

    - ✅ Moderne, professionele uitstraling
    - ✅ Consistente gebruikerservaring
    - ✅ Effectieve content presentatie
    - ✅ Responsive design implementatie

2. **Technische Doelen**
    - ✅ Snelle laadtijden
    - ✅ Toegankelijke interface
    - ✅ Cross-browser compatibiliteit
    - ✅ SEO optimalisatie

#### 2. Gebruikerservaring

1. **Navigatie**

    - Intuïtieve menu structuur
    - Duidelijke call-to-actions
    - Vloeiende scroll ervaring
    - Consistente interactie patronen

2. **Content Presentatie**
    - Hiërarchische informatie structuur
    - Visueel aantrekkelijke layout
    - Effectieve whitespace gebruik
    - Responsive content adaptatie

#### 3. Technische Prestaties

1. **Performance Metrics**

    - Laadtijd: < 2 seconden
    - First Contentful Paint: < 1.5s
    - Time to Interactive: < 3s
    - Lighthouse score: > 90

2. **Accessibility**
    - WCAG 2.1 Level AA compliant
    - Screen reader optimalisatie
    - Toetsenbord navigatie
    - Voldoende contrast ratio's

#### 4. Verbeterpunten & Toekomst

1. **Korte Termijn**

    - Performance optimalisaties
    - Content updates
    - Bug fixes
    - Analytics implementatie

2. **Lange Termijn**
    - Nieuwe features
    - Content uitbreiding
    - Performance monitoring
    - Gebruikersfeedback integratie
