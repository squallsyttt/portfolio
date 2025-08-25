#!/usr/bin/env tsx

import fs from "fs";
import path from "path";
import sharp from "sharp";

interface OptimizeOptions {
  quality: number;
  maxWidth: number;
  maxHeight: number;
  formats: ("webp" | "avif" | "jpeg")[];
}

const DEFAULT_OPTIONS: OptimizeOptions = {
  quality: 80,
  maxWidth: 1920,
  maxHeight: 1080,
  formats: ["webp", "avif", "jpeg"],
};

async function optimizeImage(
  inputPath: string, 
  outputDir: string, 
  options: OptimizeOptions = DEFAULT_OPTIONS
) {
  const { name, ext } = path.parse(inputPath);
  const isOriginalImage = ['.jpg', '.jpeg', '.png', '.tiff', '.tif'].includes(ext.toLowerCase());
  
  if (!isOriginalImage) {
    console.log(`Skipping ${inputPath} - not an image file`);
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Processing ${inputPath}`);
    console.log(`Original size: ${metadata.width}x${metadata.height}, ${Math.round((fs.statSync(inputPath).size / 1024))} KB`);

    // Resize if needed
    const needsResize = 
      (metadata.width && metadata.width > options.maxWidth) ||
      (metadata.height && metadata.height > options.maxHeight);

    if (needsResize) {
      image.resize(options.maxWidth, options.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Generate optimized versions
    for (const format of options.formats) {
      const outputPath = path.join(outputDir, `${name}.${format}`);
      
      let pipeline = image.clone();
      
      switch (format) {
        case 'webp':
          pipeline = pipeline.webp({ quality: options.quality });
          break;
        case 'avif':
          pipeline = pipeline.avif({ quality: options.quality });
          break;
        case 'jpeg':
          pipeline = pipeline.jpeg({ quality: options.quality });
          break;
      }
      
      await pipeline.toFile(outputPath);
      
      const outputSize = Math.round((fs.statSync(outputPath).size / 1024));
      console.log(`✓ Created ${format.toUpperCase()}: ${outputSize} KB`);
    }
    
    console.log(`✅ Optimized: ${inputPath}\n`);
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error);
  }
}

async function processDirectory(inputDir: string, outputDir: string) {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const stat = fs.statSync(inputPath);
    
    if (stat.isDirectory()) {
      const subOutputDir = path.join(outputDir, file);
      await processDirectory(inputPath, subOutputDir);
    } else {
      await optimizeImage(inputPath, outputDir);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log("Usage:");
    console.log("  tsx optimize-images.mts <input-dir> [output-dir]");
    console.log("  tsx optimize-images.mts <input-file> [output-dir]");
    console.log("");
    console.log("Examples:");
    console.log("  tsx optimize-images.mts public/images");
    console.log("  tsx optimize-images.mts public/images public/images-optimized");
    console.log("  tsx optimize-images.mts public/images/blog/cover.jpg public/images/blog");
    return;
  }

  const inputPath = path.resolve(args[0]);
  const outputPath = args[1] ? path.resolve(args[1]) : path.join(path.dirname(inputPath), "optimized");
  
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Input path does not exist: ${inputPath}`);
    return;
  }

  const stat = fs.statSync(inputPath);
  
  console.log("🖼️  Image Optimization Tool");
  console.log("==========================");
  console.log(`Input: ${inputPath}`);
  console.log(`Output: ${outputPath}`);
  console.log(`Quality: ${DEFAULT_OPTIONS.quality}%`);
  console.log(`Max size: ${DEFAULT_OPTIONS.maxWidth}x${DEFAULT_OPTIONS.maxHeight}`);
  console.log(`Formats: ${DEFAULT_OPTIONS.formats.join(", ")}`);
  console.log("");

  if (stat.isDirectory()) {
    await processDirectory(inputPath, outputPath);
  } else {
    await optimizeImage(inputPath, outputPath);
  }
  
  console.log("🎉 All done!");
}

main().catch(console.error);