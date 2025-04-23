export default async function handler(req, res) {

  
    try {
      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&format=json&api_key=565fcd7a415ee4be39a9c3e35f9223e7&user=Or1GG1n`
      );
      
      const data = await response.json();
      res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=30');
      return res.status(200).json(data);
    } catch (error) {
      console.error('Last.fm API error:', error);
      return res.status(500).json({ error: 'Failed to fetch track data' });
    }
  }