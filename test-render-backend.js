// Test script for Render backend deployment
// Replace YOUR_RENDER_URL with your actual Render backend URL

const RENDER_URL = 'YOUR_RENDER_URL'; // Replace this with your actual Render URL

async function testRenderBackend() {
  console.log('Testing Render backend deployment...\n');

  try {
    // Test 1: Check if server is running
    console.log('1. Testing server health check');
    const healthResponse = await fetch(`${RENDER_URL}/`);
    const healthData = await healthResponse.json();
    console.log('✅ Server health check:', healthData);

    // Test 2: Get all tasks
    console.log('\n2. Testing GET /api/tasks');
    const getResponse = await fetch(`${RENDER_URL}/api/tasks`);
    const tasks = await getResponse.json();
    console.log('✅ GET /api/tasks successful:', tasks);

    // Test 3: Create a new task
    console.log('\n3. Testing POST /api/tasks');
    const createResponse = await fetch(`${RENDER_URL}/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Test Task from Render',
        description: 'This task was created via Render deployment',
        priority: 'high'
      }),
    });
    const newTask = await createResponse.json();
    console.log('✅ POST /api/tasks successful:', newTask);

    // Test 4: Toggle task completion
    console.log('\n4. Testing PATCH /api/tasks/:id/toggle');
    const toggleResponse = await fetch(`${RENDER_URL}/api/tasks/${newTask._id}/toggle`, {
      method: 'PATCH',
    });
    const toggledTask = await toggleResponse.json();
    console.log('✅ PATCH /api/tasks/:id/toggle successful:', toggledTask);

    // Test 5: Delete the test task
    console.log('\n5. Testing DELETE /api/tasks/:id');
    const deleteResponse = await fetch(`${RENDER_URL}/api/tasks/${newTask._id}`, {
      method: 'DELETE',
    });
    const deleteResult = await deleteResponse.json();
    console.log('✅ DELETE /api/tasks/:id successful:', deleteResult);

    console.log('\n🎉 All Render backend tests passed!');
    console.log('Your backend is successfully deployed and working!');

  } catch (error) {
    console.error('❌ Render backend test failed:', error.message);
    console.log('\nMake sure to:');
    console.log('1. Replace YOUR_RENDER_URL with your actual Render URL');
    console.log('2. Check that your MongoDB Atlas connection is working');
    console.log('3. Verify your environment variables are set correctly in Render');
  }
}

// Instructions for use
console.log('To use this test script:');
console.log('1. Replace YOUR_RENDER_URL with your actual Render backend URL');
console.log('2. Run: node test-render-backend.js');
console.log('\nExample:');
console.log('const RENDER_URL = "https://your-app-name.onrender.com";\n');

// Uncomment the line below and replace with your URL to run the test
// testRenderBackend(); 