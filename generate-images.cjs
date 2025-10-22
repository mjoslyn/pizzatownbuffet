const { createCanvas } = require('canvas');
const fs = require('fs');

function generatePsychedelicImage(filename, colors) {
  const width = 800;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create image data
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const uv = { x: x / width, y: y / height };

      // Create flowing psychedelic pattern (similar to shader)
      const pattern1 = Math.sin(uv.x * 10.0) * Math.cos(uv.y * 8.0);
      const pattern2 = Math.sin(uv.x * 6.0) * Math.cos(uv.y * 12.0);
      const pattern3 = Math.sin(uv.x * 15.0 + uv.y * 10.0);

      // Mix colors based on patterns
      let r = colors[0][0] * (pattern1 * 0.5 + 0.5) + colors[1][0] * (1 - (pattern1 * 0.5 + 0.5));
      let g = colors[0][1] * (pattern1 * 0.5 + 0.5) + colors[1][1] * (1 - (pattern1 * 0.5 + 0.5));
      let b = colors[0][2] * (pattern1 * 0.5 + 0.5) + colors[1][2] * (1 - (pattern1 * 0.5 + 0.5));

      r = r * (pattern2 * 0.5 + 0.5) + colors[2][0] * (1 - (pattern2 * 0.5 + 0.5));
      g = g * (pattern2 * 0.5 + 0.5) + colors[2][1] * (1 - (pattern2 * 0.5 + 0.5));
      b = b * (pattern2 * 0.5 + 0.5) + colors[2][2] * (1 - (pattern2 * 0.5 + 0.5));

      r += pattern3 * 0.1;
      g += pattern3 * 0.1;
      b += pattern3 * 0.1;

      // Add print fuzz (grain noise)
      const noise = (Math.random() * 0.15 - 0.075);
      r += noise;
      g += noise;
      b += noise;

      // Clamp values
      r = Math.max(0, Math.min(1, r));
      g = Math.max(0, Math.min(1, g));
      b = Math.max(0, Math.min(1, b));

      const idx = (y * width + x) * 4;
      data[idx] = r * 255;
      data[idx + 1] = g * 255;
      data[idx + 2] = b * 255;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`Generated ${filename}`);
}

// Generate rhythm post image
generatePsychedelicImage('public/images/rhythm-meaning.png', [
  [1.0, 0.0, 0.5],   // Hot pink
  [1.0, 0.5, 0.0],   // Orange
  [0.5, 0.0, 1.0],   // Purple
]);

// Generate tides post image
generatePsychedelicImage('public/images/rhythm-tides.png', [
  [0.0, 0.5, 1.0],   // Ocean blue
  [0.0, 1.0, 0.8],   // Cyan
  [0.5, 0.0, 1.0],   // Purple
]);

// Generate snake salvation image
generatePsychedelicImage('public/images/snake-salvation.png', [
  [0.2, 0.8, 0.3],   // Green
  [0.8, 0.7, 0.1],   // Yellow
  [0.6, 0.2, 0.8],   // Purple
]);

// Generate example post image
generatePsychedelicImage('public/images/example.png', [
  [0.5, 1.0, 0.0],   // Lime green
  [1.0, 1.0, 0.0],   // Yellow
  [0.0, 1.0, 0.5],   // Teal
]);
