const fs = require('fs');

// Final cleanup for animation files
const finalFiles = [
  'src/components/animations/index.tsx',
  'src/components/animations/3DEffects.tsx'
];

finalFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove repeat: Infinity from transitions
    content = content.replace(/repeat:\s*Infinity,?\s*/g, '');
    
    // Clean up any double commas that might result
    content = content.replace(/,\s*,/g, ',');
    
    // Clean up trailing commas before closing braces
    content = content.replace(/,(\s*})/g, '$1');
    
    fs.writeFileSync(filePath, content);
    console.log(`Final cleanup for: ${filePath}`);
  }
});

console.log('All animations completely cleaned!');
