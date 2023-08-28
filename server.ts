import { serve } from 'https://deno.land/std@0.140.0/http/server.ts';
import { serveFile } from 'https://deno.land/std@0.140.0/http/file_server.ts';

serve(async (req: Request) => {
  // Get pathname without query and hash
  const url = new URL(req.url);
  let path = url.pathname;

  // If it ends with a '/', it likely refers to a directory, so add 'index' as default filename
  if (path.endsWith('/')) {
    path += 'index';
  }

  // If no extension, assume .html
  if (!path.split('/').pop()?.includes('.')) {
    path += '.html';
  }

  const filePath = `${Deno.cwd()}${path}`;
  console.log(filePath);

  try {
    return await serveFile(req, filePath);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return new Response('File not found.', { status: 404 });
    }
    return new Response('Internal server error.', { status: 500 });
  }
});
