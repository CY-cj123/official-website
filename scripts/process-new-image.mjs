import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SOURCE_IMAGE = '/Users/johnson/Desktop/开发/Web/cjsz/images/Gemini_Generated_Image_f704zaf704zaf704.png';
const DEST_IMAGE = 'public/images/projects/p801.webp';

async function processImage() {
  console.log('Processing user image...');
  
  try {
    // Check if source exists
    await fs.access(SOURCE_IMAGE);
    
    // Convert to WebP and save
    await sharp(SOURCE_IMAGE)
      .webp({ quality: 80 })
      .toFile(DEST_IMAGE);
      
    console.log(`Successfully converted and replaced: ${DEST_IMAGE}`);
    
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();
