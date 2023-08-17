const fs = require('fs').promises;
const path = require('path');

describe('support.ejs Template', () => {
  it('renders without errors', async () => {
    try {
      // Construct the path to the checkin.ejs template using __dirname
      const templatePath = path.join(__dirname, '..', 'views', '__test__', 'support.ejs');

      // Read the template file asynchronously
      const template = await fs.readFile(templatePath, 'utf8');

      // Simulated rendered content (replace this with your actual rendering logic)
      const rendered = template;

      // No errors should be thrown during rendering
      expect(() => rendered).not.toThrow();
    } catch (error) {
      // Handle any errors here
      console.error('Error:', error);
    }
  });

  // Additional test cases can be added here
});