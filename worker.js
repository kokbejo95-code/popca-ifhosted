export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<style>
body{margin:0;overflow:hidden}
iframe{position:fixed;top:0;left:0;width:100%;height:100%;border:none}
</style>
</head>
<body>
<iframe sandbox="allow-scripts" src="https://ps.popcash.net/go/177419/748078"></iframe>
</body>
</html>`;
    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
