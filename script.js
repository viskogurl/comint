function minifySVGPaths() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  let minifiedHTML = input.value;

  const svgRegex = /<svg[\s\S]*?<\/svg>/gi;
  const svgs = input.value.match(svgRegex);

  if (svgs) {
    svgs.forEach((svg) => {
      if (svg.includes('<path')) {
        minifiedHTML = minifiedHTML.replace(
          svg,
          '<!-- svg path(s) excluded for brevity -->'
        );
      }
    });
  }
  output.textContent = minifiedHTML;
}
