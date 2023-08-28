function minifySVGPaths() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  let minifiedHTML = input.value;

  const svgRegex =
    /<svg.*?>[\s\S]*?<\/svg>|<!-- svg path(s) excluded for brevity -->/gi;
  const svgs = input.value.match(svgRegex);

  if (svgs) {
    svgs.forEach((svg) => {
      if (svg.includes('<path')) {
        minifiedHTML = minifiedHTML.replace(
          svg,
          '<!-- svg path(s) excluded for brevity -->'
        );
      } else {
        const pathComment = '<!-- svg path(s) excluded for brevity -->';
        minifiedHTML = minifiedHTML.replace(svg, pathComment);
      }
    });
  }
  output.textContent = minifiedHTML;
}
