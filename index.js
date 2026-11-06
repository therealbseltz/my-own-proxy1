export default {
  async fetch(request) {
    const url = new URL(request.url);
    // Extract the actual URL you want to visit from the search params
    const targetUrl = url.searchParams.get('url'); 

    if (!targetUrl) {
      return new Response('Please provide a URL parameter. Example: ?url=https://example.com', { status: 400 });
    }

    // Fetch the requested site acting as a proxy
    let response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers
    });

    // Return the response back to you
    return response;
  }
};
