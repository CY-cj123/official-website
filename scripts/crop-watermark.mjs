import sharp from 'sharp';
import fs from 'fs/promises';

const IMAGE_PATH = 'public/images/projects/p801.webp';
const TEMP_PATH = 'public/images/projects/p801_temp.webp';

async function cropWatermark() {
  console.log('Cropping watermark...');
  
  try {
    const metadata = await sharp(IMAGE_PATH).metadata();
    const originalWidth = metadata.width;
    const originalHeight = metadata.height;
    
    // Crop 100 pixels from the bottom
    const newHeight = originalHeight - 100;
    
    await sharp(IMAGE_PATH)
      .extract({ left: 0, top: 0, width: originalWidth, height: newHeight })
      .toFile(TEMP_PATH);
      
    // Overwrite original
    await fs.rename(TEMP_PATH, IMAGE_PATH);
    
    console.log(`Successfully cropped image to ${originalWidth}x${newHeight}`);
    
  } catch (error) {
    console.error('Error cropping image:', error);
  }
}

cropWatermark();
