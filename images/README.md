# Image Assets for CCLA Website

This document lists all the images needed for the Child Custody Legal Aid website.

## Required Images

### Logo and Branding
- **logo.png** (Primary logo)
  - Recommended size: 300x100px
  - Format: PNG with transparent background
  - Location: `/images/logo.png`
  - Used in: Header on all pages

- **favicon.png** (Browser icon)
  - Recommended size: 32x32px or 64x64px
  - Format: PNG
  - Location: `/images/favicon.png`
  - Used in: Browser tab icon

### Content Images
- **helping-hand.jpg** (About page image)
  - Recommended size: 300x300px
  - Format: JPG
  - Location: `/images/helping-hand.jpg`
  - Used in: About page
  - Description: Image of helping hands representing support and assistance

### Carousel/Slider Images (Optional for enhanced home page)
- **slider-1.jpg**
  - Recommended size: 1200x400px
  - Format: JPG
  - Location: `/images/slider-1.jpg`
  - Description: Hero image for carousel slide 1

- **slider-2.jpg**
  - Recommended size: 1200x400px
  - Format: JPG
  - Location: `/images/slider-2.jpg`
  - Description: Hero image for carousel slide 2

### Blog Post Images (Optional)
Each blog post can have a featured image:
- **blog-custody-texas.jpg** - For "Determining Child Custody in Texas"
- **blog-fathers-rights.jpg** - For "Understanding Fathers' Rights in Texas"
- **blog-guardianship.jpg** - For "Understanding Guardianship in Texas"
- **blog-possession-access.jpg** - For "Possession and Access Order in Texas"
- **blog-get-custody.jpg** - For "How to Get Custody of Your Children in Texas"
- **blog-child-support.jpg** - For "Changing Child Support Payments in Texas"
- **blog-move-out-state.jpg** - For "Child Custody When Parent Wants to Move"

Recommended size: 800x450px
Format: JPG
Location: `/images/blog/`

## Current Status

### Available from WordPress Export
The following images can be extracted from `ccla-website-wordpress/wp-content/uploads/`:
- helping-hand.jpg (cropped-helping-hand variants)
- slider images (slider_pic1-1.png, slider_pic2-1.png)

### To Be Created/Sourced
- **logo.png** - Extract from `/wp-content/themes/ffer/img/logo1.png`
- **favicon.png** - Convert from `/wp-content/themes/ffer/img/icons/favicon.ico`

## Image Extraction Instructions

To extract images from the WordPress site:

1. Copy logo:
   ```powershell
   Copy-Item "c:\Users\bobla\VisualStudioProjects\ccla-website-wordpress\wp-content\themes\ffer\img\logo1.png" -Destination "c:\Users\bobla\VisualStudioProjects\ccla-website\images\logo.png"
   ```

2. Copy helping hand image:
   ```powershell
   Copy-Item "c:\Users\bobla\VisualStudioProjects\ccla-website-wordpress\wp-content\uploads\2017\07\helping-hand.jpg" -Destination "c:\Users\bobla\VisualStudioProjects\ccla-website\images\helping-hand.jpg"
   ```

3. Copy favicon (will need to convert from .ico to .png):
   ```powershell
   Copy-Item "c:\Users\bobla\VisualStudioProjects\ccla-website-wordpress\wp-content\themes\ffer\img\icons\favicon.ico" -Destination "c:\Users\bobla\VisualStudioProjects\ccla-website\images\favicon.ico"
   ```

## Placeholder Images

Until actual images are available, you can use:
- https://via.placeholder.com/300x100/2563eb/FFFFFF?text=CCLA+Logo (for logo)
- https://via.placeholder.com/300x300/2563eb/FFFFFF?text=Helping+Hands (for helping-hand.jpg)
- https://via.placeholder.com/1200x400/2563eb/FFFFFF?text=Hero+Image (for sliders)

## Image Optimization

Before deployment, optimize all images:
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Target file sizes:
  - Logos: < 50KB
  - Content images: < 200KB
  - Hero/slider images: < 300KB
- Ensure all images are web-optimized (sRGB color space, appropriate compression)

## Accessibility

All images should have:
- Descriptive `alt` text
- Appropriate dimensions specified in HTML
- Lazy loading enabled for below-the-fold images

## License & Copyright

Ensure all images used have appropriate licenses and/or permission for use on the website.

---

**Last Updated:** January 2025
**Maintained By:** CCLA Website Team
