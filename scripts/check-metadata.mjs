import sharp from 'sharp';

const imagePath = 'public/images/projects/p801.webp';

async function checkMetadata() {
  try {
    const metadata = await sharp(imagePath).metadata();
    console.log(metadata);
  } catch (error) {
    console.error("Error reading metadata:", error);
  }
}

checkMetadata();
