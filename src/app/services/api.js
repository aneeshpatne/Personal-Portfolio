const API_URL = 'https://leetcode-server-3r7o.onrender.com';
export async function getValues() {
    try{
    const response = await fetch(`${API_URL}/level`);
    if(!response.ok){
        throw new Error('Failed to fetch values');
    }
    const data = await response.json(); 
    return {
        val3: data.easy,
        val2: data.medium,
        val1: data.hard
    };
    }
    catch(err){
        console.error('Error fetching levels:', err);
        throw err;
    }
}