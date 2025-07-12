// Simple test script for the backend API
const API_URL = 'http://localhost:5000/api';

async function testBackend() {
  console.log('Testing backend API...\n');

  try {
    // Test 1: Get all tasks
    console.log('1. Testing GET /api/tasks');
    const getResponse = await fetch(`${API_URL}/tasks`);
    const tasks = await getResponse.json();
    console.log('✅ GET /api/tasks successful:', tasks);

    // Test 2: Create a new task
    console.log('\n2. Testing POST /api/tasks');
    const createResponse = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Test Task',
        description: 'This is a test task',
        priority: 'medium'
      }),
    });
    const newTask = await createResponse.json();
    console.log('✅ POST /api/tasks successful:', newTask);

    // Test 3: Toggle task completion
    console.log('\n3. Testing PATCH /api/tasks/:id/toggle');
    const toggleResponse = await fetch(`${API_URL}/tasks/${newTask._id}/toggle`, {
      method: 'PATCH',
    });
    const toggledTask = await toggleResponse.json();
    console.log('✅ PATCH /api/tasks/:id/toggle successful:', toggledTask);

    // Test 4: Delete the test task
    console.log('\n4. Testing DELETE /api/tasks/:id');
    const deleteResponse = await fetch(`${API_URL}/tasks/${newTask._id}`, {
      method: 'DELETE',
    });
    const deleteResult = await deleteResponse.json();
    console.log('✅ DELETE /api/tasks/:id successful:', deleteResult);

    console.log('\n🎉 All backend tests passed!');

  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
    console.log('\nMake sure your backend is running on http://localhost:5000');
  }
}

// Run the test if this file is executed directly
if (typeof window === 'undefined') {
  testBackend();
} 