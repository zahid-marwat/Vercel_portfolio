const fs = require('fs');

// Additional files to clean
const moreFilesToClean = [
  'src/components/Navigation.tsx',
  'src/components/CustomCursor.tsx',
  'src/components/animations/VisualFeedback.tsx',
  'src/components/animations/SpecialEffects.tsx',
  'src/components/animations/SkeletonScreens.tsx',
  'src/components/animations/MorphingEffects.tsx'
];

moreFilesToClean.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove repeat: Infinity from transitions
    content = content.replace(/repeat:\s*Infinity,?\s*/g, '');
    
    // Clean up any double commas that might result
    content = content.replace(/,\s*,/g, ',');
    
    // Clean up trailing commas before closing braces
    content = content.replace(/,(\s*})/g, '$1');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned infinity animations from: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All remaining infinity animations removed!');
