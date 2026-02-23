const fs = require('fs');
let t = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// 1. Replace entire h1 block — remove title-colon span, simplify to plain text
t = t.replace(
    /<h1>[\s\S]*?<\/h1>/,
    '<h1>\n                        <span className="title-quote">&ldquo;</span>The Fastest Way to Get Rich\n                        <br />is to <span className="accent">Go Slow.&rdquo;</span>\n                    </h1>'
);

// 2. Replace the btn-arrow span (which has garbled arrow char) with lucide ArrowRight
t = t.replace(
    /Explore Workshops <span className="btn-arrow">[^<]*<\/span>/,
    'Explore Workshops <ArrowRight size={18} className="btn-arrow" />'
);

fs.writeFileSync('src/pages/Home.jsx', t, 'utf8');
console.log('Done');
