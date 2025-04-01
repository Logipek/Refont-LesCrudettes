const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(process.cwd(), 'public/images');
const outputDir = path.join(process.cwd(), 'public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(inputDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext) && !fs.statSync(path.join(inputDir, file)).isDirectory();
});

// Optimize each image
async function optimizeImages() {
  console.log('🌱 Starting image optimization for Les Crudettes...');

  const results = {
    success: 0,
    failed: 0,
    totalSaved: 0
  };

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);

    // Skip if it's a directory
    if (fs.statSync(inputPath).isDirectory()) continue;

    const fileExt = path.extname(file).toLowerCase();
    const fileName = path.basename(file, fileExt);

    // Get original file size in KB
    const originalSize = fs.statSync(inputPath).size / 1024;

    try {
      // Create WebP version (high quality but smaller size)
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(path.join(outputDir, `${fileName}.webp`));

      // Create optimized original format version with proper quality settings
      if (['.jpg', '.jpeg'].includes(fileExt)) {
        await sharp(inputPath)
          .jpeg({ quality: 80, mozjpeg: true })
          .toFile(path.join(outputDir, `${fileName}${fileExt}`));
      } else if (fileExt === '.png') {
        await sharp(inputPath)
          .png({ quality: 80, compressionLevel: 9, adaptiveFiltering: true })
          .toFile(path.join(outputDir, `${fileName}${fileExt}`));
      } else {
        // For other formats, just copy with slight compression
        await sharp(inputPath)
          .toFile(path.join(outputDir, `${fileName}${fileExt}`));
      }

      // Calculate size savings for the WebP version
      const webpSize = fs.statSync(path.join(outputDir, `${fileName}.webp`)).size / 1024;
      const savedSize = originalSize - webpSize;
      const savingsPercent = ((savedSize / originalSize) * 100).toFixed(2);

      console.log(`✅ Optimized: ${file} (Saved: ${savedSize.toFixed(2)}KB, ${savingsPercent}%)`);

      results.success++;
      results.totalSaved += savedSize;
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
      results.failed++;
    }
  }

  const totalSavedMB = (results.totalSaved / 1024).toFixed(2);
  console.log('\n🌿 Image optimization complete!');
  console.log(`✅ Successfully optimized: ${results.success} images`);
  console.log(`❌ Failed: ${results.failed} images`);
  console.log(`💾 Total space saved: ${totalSavedMB}MB`);
  console.log('\n💡 Tips for Next.js static export:');
  console.log('1. Make sure to set { images: { unoptimized: true } } in next.config.js');
  console.log('2. Use regular <img> tags for exported sites or use next/image with unoptimized prop');
}

optimizeImages().catch(err => {
  console.error('Error in optimization process:', err);
  process.exit(1);
});
